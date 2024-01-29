// const multer = require("multer");
// const util = require("util");
// const path = require("path");
// const storage = (dest) => {
// 	return multer.diskStorage({
// 		destination: dest,
// 		filename: (req, file, cb) => {
// 			req.Allfiles = req.Allfiles || {};
// 			const filename = `${new Date().getTime().toString()}-${
// 				file.fieldname
// 			}-${file.originalname}`;
// 			req.Allfiles[file.fieldname] = [
// 				...(req.Allfiles[file.fieldname] || []),
// 				filename,
// 			];
// 			cb(null, filename);
// 			// req.Allfiles = filesObject;
// 		},
// 	});
// };
// const getStorage = (dest) => {
// 	return multer({
// 		storage: storage(path.join("public", "assets", dest || ".")),
// 	});
// };

// exports.uploadMultiImage = (fields = []) => {
// 	return getStorage().fields(fields);
// };

// exports.singleUploadImage = (path, fieldname) => {
// 	return getStorage(path).single(fieldname);
// };

// exports.singleFileUploadAsync = (path, fieldname = "image") => {
// 	return util.promisify(getStorage(path).single(fieldname));
// };

const fs = require("fs").promises;
const path = require("path");

const pathAndImgName = ({ key, image, location }) => {
	const imageName = `${new Date().getTime()}-${key}-${image?.name}`;
	const uploadPath = path.join(
		process.cwd(),
		"public",
		"assets",
		location,
		imageName
	);
	return {
		imageName,
		uploadPath,
	};
};

const createDirifNotExiest = async (location) => {
	console.log("call");
	try {
		await fs.access(path.join(process.cwd(), "public", "assets", location));
	} catch (err) {
		if (err?.code === "ENOENT") {
			await fs.mkdir(
				path.join(process.cwd(), "public", "assets", location)
			);
		}
	}
};

exports.uploadImages = async ({ path = ".", req }) => {
	console.log("req?.files", req?.files);
	const allfiles = {};
	if (!req?.files) {
		return allfiles;
	}
	for (key in req?.files) {
		await createDirifNotExiest(path);
		if (Array.isArray(req?.files[key])) {
			await Promise.all(
				req?.files[key]?.map(async (image) => {
					const { imageName, uploadPath } = pathAndImgName({
						key,
						image,
						location: path,
					});

					await new Promise((resolve) => {
						image?.mv(uploadPath, (err) => {
							if (err) throw err;
							console.log("imageName", imageName);
							allfiles[key] = [
								...(allfiles[key] || []),
								imageName,
							];
							resolve(true);
						});
					});
				})
			);
		} else {
			const { imageName, uploadPath } = pathAndImgName({
				key,
				image: req?.files[key],
				location: path,
			});
			await new Promise((resolve) => {
				req?.files[key]?.mv(uploadPath, (err) => {
					if (err) throw err;

					allfiles[key] = [imageName];
					resolve(true);
				});
			});
		}
	}
	return allfiles;
};
