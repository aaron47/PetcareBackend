"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
let AuthController = exports.AuthController = (() => {
    let _classDecorators = [(0, common_1.Controller)('auth')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _login_decorators;
    let _create_decorators;
    let _findUserByEmail_decorators;
    let _updateUserAccountStatus_decorators;
    var AuthController = _classThis = class {
        constructor(authService) {
            this.authService = (__runInitializers(this, _instanceExtraInitializers), authService);
        }
        async login(loginUserDto) {
            return this.authService.login(loginUserDto);
        }
        async create(createUserDto) {
            return this.authService.signUp(createUserDto);
        }
        async findUserByEmail(userEmail) {
            return this.authService.findUserByEmail(userEmail);
        }
        async updateUserAccountStatus(updateUserAccountStatusDto) {
            return this.authService.updateUserAccountStatus(updateUserAccountStatusDto);
        }
    };
    __setFunctionName(_classThis, "AuthController");
    (() => {
        _login_decorators = [(0, common_1.Post)('login'), (0, common_1.HttpCode)(common_1.HttpStatus.OK)];
        _create_decorators = [(0, common_1.Post)('signUp'), (0, common_1.HttpCode)(common_1.HttpStatus.CREATED)];
        _findUserByEmail_decorators = [(0, common_1.Get)('user/:email'), (0, common_1.HttpCode)(common_1.HttpStatus.OK)];
        _updateUserAccountStatus_decorators = [(0, common_1.Post)('updateUserAccountStatus'), (0, common_1.HttpCode)(common_1.HttpStatus.OK)];
        __esDecorate(_classThis, null, _login_decorators, { kind: "method", name: "login", static: false, private: false, access: { has: obj => "login" in obj, get: obj => obj.login } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: obj => "create" in obj, get: obj => obj.create } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findUserByEmail_decorators, { kind: "method", name: "findUserByEmail", static: false, private: false, access: { has: obj => "findUserByEmail" in obj, get: obj => obj.findUserByEmail } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateUserAccountStatus_decorators, { kind: "method", name: "updateUserAccountStatus", static: false, private: false, access: { has: obj => "updateUserAccountStatus" in obj, get: obj => obj.updateUserAccountStatus } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        AuthController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthController = _classThis;
})();
//# sourceMappingURL=auth.controller.js.map