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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const UserNotFoundException_1 = require("../exceptions/UserNotFoundException");
let ServicesService = exports.ServicesService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ServicesService = _classThis = class {
        constructor(servicesRepository, usersService) {
            this.servicesRepository = servicesRepository;
            this.usersService = usersService;
        }
        async createService(createServiceDto) {
            await this.verifyUserExists(createServiceDto.userEmail);
            return this.servicesRepository.create(createServiceDto);
        }
        async addOfferingUser(addOfferingUserDto) {
            await this.verifyUserExists(addOfferingUserDto.userEmail);
            return this.servicesRepository.addOfferingUser(addOfferingUserDto);
        }
        async findAllServices() {
            return this.servicesRepository.findAllServices();
        }
        async findUserServices(userEmail) {
            await this.verifyUserExists(userEmail);
            return this.servicesRepository.findUserServices(userEmail);
        }
        async verifyUserExists(userEmail) {
            const user = await this.usersService.findOneByEmail(userEmail);
            if (user.role !== 'sitter') {
                throw new common_1.BadRequestException('User must be a sitter to add a service');
            }
            if (!user)
                throw new UserNotFoundException_1.UserNotFoundException();
        }
    };
    __setFunctionName(_classThis, "ServicesService");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ServicesService = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ServicesService = _classThis;
})();
//# sourceMappingURL=services.service.js.map