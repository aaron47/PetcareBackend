"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = exports.UserSchema = exports.UserDocument = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UserDocument = exports.UserDocument = (() => {
    let _classDecorators = [(0, mongoose_1.Schema)({ versionKey: false, collection: 'users' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _fullName_decorators;
    let _fullName_initializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _role_decorators;
    let _role_initializers = [];
    let _gender_decorators;
    let _gender_initializers = [];
    let _phone_decorators;
    let _phone_initializers = [];
    let _password_decorators;
    let _password_initializers = [];
    let _accountStatus_decorators;
    let _accountStatus_initializers = [];
    var UserDocument = _classThis = class extends mongoose_2.Document {
        constructor() {
            super(...arguments);
            this.fullName = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _fullName_initializers, void 0));
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.role = __runInitializers(this, _role_initializers, void 0);
            this.gender = __runInitializers(this, _gender_initializers, void 0);
            this.phone = __runInitializers(this, _phone_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.accountStatus = __runInitializers(this, _accountStatus_initializers, 'pending');
        }
    };
    __setFunctionName(_classThis, "UserDocument");
    (() => {
        _fullName_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _email_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _role_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _gender_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _phone_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _password_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _accountStatus_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _fullName_decorators, { kind: "field", name: "fullName", static: false, private: false, access: { has: obj => "fullName" in obj, get: obj => obj.fullName, set: (obj, value) => { obj.fullName = value; } } }, _fullName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } } }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: obj => "role" in obj, get: obj => obj.role, set: (obj, value) => { obj.role = value; } } }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: obj => "gender" in obj, get: obj => obj.gender, set: (obj, value) => { obj.gender = value; } } }, _gender_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: obj => "phone" in obj, get: obj => obj.phone, set: (obj, value) => { obj.phone = value; } } }, _phone_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: obj => "password" in obj, get: obj => obj.password, set: (obj, value) => { obj.password = value; } } }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _accountStatus_decorators, { kind: "field", name: "accountStatus", static: false, private: false, access: { has: obj => "accountStatus" in obj, get: obj => obj.accountStatus, set: (obj, value) => { obj.accountStatus = value; } } }, _accountStatus_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        UserDocument = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserDocument = _classThis;
})();
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserDocument);
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["SITTER"] = "sitter";
    UserRole["OWNER"] = "owner";
})(UserRole || (exports.UserRole = UserRole = {}));
//# sourceMappingURL=user.schema.js.map