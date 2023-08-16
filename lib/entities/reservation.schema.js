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
exports.ReservationSchema = exports.ReservationDocument = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ReservationDocument = exports.ReservationDocument = (() => {
    let _classDecorators = [(0, mongoose_1.Schema)({ versionKey: false, collection: 'reservations' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _ownerId_decorators;
    let _ownerId_initializers = [];
    let _sitterId_decorators;
    let _sitterId_initializers = [];
    let _petId_decorators;
    let _petId_initializers = [];
    let _serviceId_decorators;
    let _serviceId_initializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _duration_decorators;
    let _duration_initializers = [];
    let _budget_decorators;
    let _budget_initializers = [];
    var ReservationDocument = _classThis = class extends mongoose_2.Document {
        constructor() {
            super(...arguments);
            this.ownerId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _ownerId_initializers, void 0));
            this.sitterId = __runInitializers(this, _sitterId_initializers, void 0);
            this.petId = __runInitializers(this, _petId_initializers, void 0);
            this.serviceId = __runInitializers(this, _serviceId_initializers, void 0);
            this.createdAt = __runInitializers(this, _createdAt_initializers, new Date().toLocaleDateString());
            this.status = __runInitializers(this, _status_initializers, 'pending');
            this.duration = __runInitializers(this, _duration_initializers, void 0);
            this.budget = __runInitializers(this, _budget_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "ReservationDocument");
    (() => {
        _ownerId_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _sitterId_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _petId_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _serviceId_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _createdAt_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _status_decorators = [(0, mongoose_1.Prop)()];
        _duration_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _budget_decorators = [(0, mongoose_1.Prop)({ required: true })];
        __esDecorate(null, null, _ownerId_decorators, { kind: "field", name: "ownerId", static: false, private: false, access: { has: obj => "ownerId" in obj, get: obj => obj.ownerId, set: (obj, value) => { obj.ownerId = value; } } }, _ownerId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sitterId_decorators, { kind: "field", name: "sitterId", static: false, private: false, access: { has: obj => "sitterId" in obj, get: obj => obj.sitterId, set: (obj, value) => { obj.sitterId = value; } } }, _sitterId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petId_decorators, { kind: "field", name: "petId", static: false, private: false, access: { has: obj => "petId" in obj, get: obj => obj.petId, set: (obj, value) => { obj.petId = value; } } }, _petId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _serviceId_decorators, { kind: "field", name: "serviceId", static: false, private: false, access: { has: obj => "serviceId" in obj, get: obj => obj.serviceId, set: (obj, value) => { obj.serviceId = value; } } }, _serviceId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } } }, _createdAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } } }, _status_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _duration_decorators, { kind: "field", name: "duration", static: false, private: false, access: { has: obj => "duration" in obj, get: obj => obj.duration, set: (obj, value) => { obj.duration = value; } } }, _duration_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _budget_decorators, { kind: "field", name: "budget", static: false, private: false, access: { has: obj => "budget" in obj, get: obj => obj.budget, set: (obj, value) => { obj.budget = value; } } }, _budget_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ReservationDocument = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ReservationDocument = _classThis;
})();
exports.ReservationSchema = mongoose_1.SchemaFactory.createForClass(ReservationDocument);
//# sourceMappingURL=reservation.schema.js.map