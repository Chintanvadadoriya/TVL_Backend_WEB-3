class ErrorHandler extends Error {
	status;
	message;
	logout;
	constructor(status = 400, message, logout = false) {
		super(message);
		this.status = status;
		this.message = message;
		this.logout = logout;
		Error.captureStackTrace(this, this.constructor);
		Object.setPrototypeOf(this, ErrorHandler.prototype);
	}

	serializeError() {
		const payload = {
			success: false,
			data: null,
			errors: Array.isArray(this.message) ? this.message : [this.message],
		};
		if (this.logout) {
			payload.logout = true;
		}

		return payload;
	}
}

module.exports = ErrorHandler;
