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
exports.ServiceSchema = exports.ServiceDocument = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ServiceDocument = exports.ServiceDocument = (() => {
    let _classDecorators = [(0, mongoose_1.Schema)({ versionKey: false, collection: 'services' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _serviceName_decorators;
    let _serviceName_initializers = [];
    let _usersOfferingService_decorators;
    let _usersOfferingService_initializers = [];
    var ServiceDocument = _classThis = class extends mongoose_2.Document {
        constructor() {
            super(...arguments);
            this.serviceName = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _serviceName_initializers, void 0));
            this.usersOfferingService = __runInitializers(this, _usersOfferingService_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "ServiceDocument");
    (() => {
        _serviceName_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _usersOfferingService_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _serviceName_decorators, { kind: "field", name: "serviceName", static: false, private: false, access: { has: obj => "serviceName" in obj, get: obj => obj.serviceName, set: (obj, value) => { obj.serviceName = value; } } }, _serviceName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _usersOfferingService_decorators, { kind: "field", name: "usersOfferingService", static: false, private: false, access: { has: obj => "usersOfferingService" in obj, get: obj => obj.usersOfferingService, set: (obj, value) => { obj.usersOfferingService = value; } } }, _usersOfferingService_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ServiceDocument = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ServiceDocument = _classThis;
})();
exports.ServiceSchema = mongoose_1.SchemaFactory.createForClass(ServiceDocument);
//# sourceMappingURL=service.schema.js.map