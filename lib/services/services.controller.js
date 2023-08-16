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
exports.ServicesController = void 0;
const common_1 = require("@nestjs/common");
let ServicesController = exports.ServicesController = (() => {
    let _classDecorators = [(0, common_1.Controller)('services')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _createService_decorators;
    let _addOfferingUser_decorators;
    let _findAllServices_decorators;
    let _findUserServices_decorators;
    var ServicesController = _classThis = class {
        constructor(servicesService) {
            this.servicesService = (__runInitializers(this, _instanceExtraInitializers), servicesService);
        }
        async createService(createServiceDto) {
            return this.servicesService.createService(createServiceDto);
        }
        async addOfferingUser(addOfferingUserDto) {
            return this.servicesService.addOfferingUser(addOfferingUserDto);
        }
        async findAllServices() {
            return this.servicesService.findAllServices();
        }
        async findUserServices(userEmail) {
            return this.servicesService.findUserServices(userEmail);
        }
    };
    __setFunctionName(_classThis, "ServicesController");
    (() => {
        _createService_decorators = [(0, common_1.Post)('create'), (0, common_1.HttpCode)(common_1.HttpStatus.CREATED)];
        _addOfferingUser_decorators = [(0, common_1.Post)('addOfferingUser'), (0, common_1.HttpCode)(common_1.HttpStatus.CREATED)];
        _findAllServices_decorators = [(0, common_1.Get)('findAll'), (0, common_1.HttpCode)(common_1.HttpStatus.OK)];
        _findUserServices_decorators = [(0, common_1.Get)('findUserServices/:userEmail'), (0, common_1.HttpCode)(common_1.HttpStatus.OK)];
        __esDecorate(_classThis, null, _createService_decorators, { kind: "method", name: "createService", static: false, private: false, access: { has: obj => "createService" in obj, get: obj => obj.createService } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _addOfferingUser_decorators, { kind: "method", name: "addOfferingUser", static: false, private: false, access: { has: obj => "addOfferingUser" in obj, get: obj => obj.addOfferingUser } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAllServices_decorators, { kind: "method", name: "findAllServices", static: false, private: false, access: { has: obj => "findAllServices" in obj, get: obj => obj.findAllServices } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findUserServices_decorators, { kind: "method", name: "findUserServices", static: false, private: false, access: { has: obj => "findUserServices" in obj, get: obj => obj.findUserServices } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ServicesController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ServicesController = _classThis;
})();
//# sourceMappingURL=services.controller.js.map