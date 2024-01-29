const { Op, fn, col, literal } = require("sequelize");

const ACTION = {
	GT: "GT",
	LT: "LT",
	GTE: "GET",
	LTE: "LTE",
	BEETWEEN: "BEETWEEN",
	IN: "IN",
	LIKE: "LIKE",
	REGEX: "REGEX",
	OR: "OR",
};

class APIfeature {
	#params = {};
	#limit;
	#model;
	#totalPage = 0;

	constructor({ model, query = {}, option }) {
		const { limit } = query;

		this.#model = model;
		this.#limit = +limit || 10;
	}

	#buildQuery(name, values) {
		switch (name) {
			case ACTION.GT:
				return { [Op.gt]: values };
			case ACTION.LT:
				return { [Op.lt]: values };
			case ACTION.GTE:
				return { [Op.gte]: values };
			case ACTION.LTE:
				return { [Op.lte]: values };
			case ACTION.BEETWEEN:
				return { [Op.between]: [...values] };
			case ACTION.IN:
				return { [Op.in]: [...values] };
			case ACTION.LIKE:
				return { [Op.like]: `%${values}%` };
			case ACTION.REGEX:
				return { [Op.iRegexp]: values };
			case ACTION.OR:
				return { [Op.or]: [...values] };
			default:
				return { ...values };
		}
	}

	search(values) {
		const or = [];
		for (const key in values) {
			or.push({
				[key]: this.#buildQuery(ACTION.LIKE, values[key]),
			});
		}
		or.push();
		this.#params = {
			where: this.#buildQuery(ACTION.OR, or),
		};
		console.log("this.#params", this.#params);
		return this;
	}

	searchWitRawQuery(query) {
		this.#params = {
			...this.#params?.where,
			where: literal(query),
		};
		return this;
	}

	condition(values) {
		this.#params = {
			...this.#params,
			where: { ...values },
		};
		return this;
	}

	orderBy(values = []) {
		this.#params = {
			...this.#params,
			order: values,
		};
		return this;
	}

	groupBy({ groupBy, as = "count", func = "COUNT", concatArr = [] }) {
		const attr = [
			...(this.#params?.attributes || []),
			[fn(func, col(groupBy)), as],
		];
		if (concatArr?.length) {
			concatArr.map((column) => {
				attr.push([
					literal(`GROUP_CONCAT(DISTINCT(${column?.column}))`),
					column?.as,
				]);
			});
		}
		this.#params = {
			...this.#params,
			attributes: attr,
			group: [groupBy],
		};
		return this;
	}

	having(condition) {
		this.#params = {
			...this.#params,
			having: condition,
		};
		return this;
	}

	simpleGroupBy(name) {
		this.#params = {
			...this.#params,
			group: [name],
		};
		return this;
	}

	includes(models = []) {
		this.#params = {
			...this.#params,
			include: models,
		};
		return this;
	}

	projection(attr = ["id"]) {
		this.#params = {
			...this.#params,
			attributes: attr,
		};
		return this;
	}

	filter(values = []) {
		if (values?.length) {
			const conditions = values.map((value) => {
				if (value?.value) {
					return {
						[value?.name]: this.#buildQuery(
							value?.type,
							value?.value
						),
					};
				}
			});
			this.#params = {
				...this.#params,
				where: {
					...this.#params?.where,
					[Op.and]: conditions,
				},
			};
		}
		return this;
	}

	paginate(pageno = 1) {
		const offset = (pageno - 1) * this.#limit;
		this.#params = {
			limit: this.#limit,
			offset,
			...this.#params,
		};
		return this;
	}

	getTotalPages() {
		return this.#totalPage;
	}

	async findOne() {
		return await this.#model.findOne({
			...this.#params,
		});
	}

	async findAll() {
		const result = await this.#model.findAndCountAll({
			...this.#params,
		});
		if (result) {
			if (Array.isArray(result?.count)) {
				this.#totalPage = Math.ceil(
					result?.count?.length / this.#limit
				);
			} else {
				this.#totalPage = Math.ceil(result?.count / this.#limit);
			}
		}

		return result;
	}
}

module.exports = {
	ACTION,
	APIfeature,
};

// SELECT `Category`.`id`, count(`Category`.`id`) AS `count` FROM `Categories` AS `Category` LEFT OUTER JOIN `Subcategories` AS `subcategory` ON `Category`.`id` = `subcategory`.`categoryId` GROUP BY `Category`.`id`;
