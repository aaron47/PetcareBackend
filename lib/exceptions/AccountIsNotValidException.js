"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountIsNotValidException = void 0;
const common_1 = require("@nestjs/common");
class AccountIsNotValidException extends common_1.HttpException {
    constructor() {
        super('Your account is currently in a pending or rejected state, please try again at a later time', 400);
    }
}
exports.AccountIsNotValidException = AccountIsNotValidException;
//# sourceMappingURL=AccountIsNotValidException.js.map