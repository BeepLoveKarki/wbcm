"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
class CustomError extends Error {
    constructor({ name = "", message = "", data } = {}) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
        this.name = name;
        this.data = data;
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=customError.js.map