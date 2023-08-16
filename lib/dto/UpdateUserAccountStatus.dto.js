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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAccountStatusDto = void 0;
const class_validator_1 = require("class-validator");
let UpdateUserAccountStatusDto = exports.UpdateUserAccountStatusDto = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _userEmail_decorators;
    let _userEmail_initializers = [];
    let _adminEmail_decorators;
    let _adminEmail_initializers = [];
    let _status_decorators;
    let _status_initializers = [];
    return _a = class UpdateUserAccountStatusDto {
            constructor() {
                this.userEmail = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _userEmail_initializers, void 0));
                this.adminEmail = __runInitializers(this, _adminEmail_initializers, void 0);
                this.status = __runInitializers(this, _status_initializers, void 0);
            }
        },
        (() => {
            _userEmail_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsEmail)()];
            _adminEmail_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsEmail)()];
            _status_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _userEmail_decorators, { kind: "field", name: "userEmail", static: false, private: false, access: { has: obj => "userEmail" in obj, get: obj => obj.userEmail, set: (obj, value) => { obj.userEmail = value; } } }, _userEmail_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _adminEmail_decorators, { kind: "field", name: "adminEmail", static: false, private: false, access: { has: obj => "adminEmail" in obj, get: obj => obj.adminEmail, set: (obj, value) => { obj.adminEmail = value; } } }, _adminEmail_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } } }, _status_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();
//# sourceMappingURL=UpdateUserAccountStatus.dto.js.map