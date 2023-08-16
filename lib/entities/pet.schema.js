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
exports.PetSchema = exports.PetDocument = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PetDocument = exports.PetDocument = (() => {
    let _classDecorators = [(0, mongoose_1.Schema)({ versionKey: false, collection: 'pets' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _petName_decorators;
    let _petName_initializers = [];
    let _petAge_decorators;
    let _petAge_initializers = [];
    let _petImageLink_decorators;
    let _petImageLink_initializers = [];
    let _petType_decorators;
    let _petType_initializers = [];
    let _petBreed_decorators;
    let _petBreed_initializers = [];
    let _petGender_decorators;
    let _petGender_initializers = [];
    let _petBloodPressure_decorators;
    let _petBloodPressure_initializers = [];
    let _petBoneDensity_decorators;
    let _petBoneDensity_initializers = [];
    let _petWeight_decorators;
    let _petWeight_initializers = [];
    let _petOwner_decorators;
    let _petOwner_initializers = [];
    var PetDocument = _classThis = class extends mongoose_2.Document {
        constructor() {
            super(...arguments);
            this.petName = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _petName_initializers, void 0));
            this.petAge = __runInitializers(this, _petAge_initializers, void 0);
            this.petImageLink = __runInitializers(this, _petImageLink_initializers, void 0);
            this.petType = __runInitializers(this, _petType_initializers, void 0);
            this.petBreed = __runInitializers(this, _petBreed_initializers, void 0);
            this.petGender = __runInitializers(this, _petGender_initializers, void 0);
            this.petBloodPressure = __runInitializers(this, _petBloodPressure_initializers, void 0);
            this.petBoneDensity = __runInitializers(this, _petBoneDensity_initializers, void 0);
            this.petWeight = __runInitializers(this, _petWeight_initializers, void 0);
            this.petOwner = __runInitializers(this, _petOwner_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "PetDocument");
    (() => {
        _petName_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _petAge_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _petImageLink_decorators = [(0, mongoose_1.Prop)()];
        _petType_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _petBreed_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _petGender_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _petBloodPressure_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _petBoneDensity_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _petWeight_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _petOwner_decorators = [(0, mongoose_1.Prop)({ required: true })];
        __esDecorate(null, null, _petName_decorators, { kind: "field", name: "petName", static: false, private: false, access: { has: obj => "petName" in obj, get: obj => obj.petName, set: (obj, value) => { obj.petName = value; } } }, _petName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petAge_decorators, { kind: "field", name: "petAge", static: false, private: false, access: { has: obj => "petAge" in obj, get: obj => obj.petAge, set: (obj, value) => { obj.petAge = value; } } }, _petAge_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petImageLink_decorators, { kind: "field", name: "petImageLink", static: false, private: false, access: { has: obj => "petImageLink" in obj, get: obj => obj.petImageLink, set: (obj, value) => { obj.petImageLink = value; } } }, _petImageLink_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petType_decorators, { kind: "field", name: "petType", static: false, private: false, access: { has: obj => "petType" in obj, get: obj => obj.petType, set: (obj, value) => { obj.petType = value; } } }, _petType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petBreed_decorators, { kind: "field", name: "petBreed", static: false, private: false, access: { has: obj => "petBreed" in obj, get: obj => obj.petBreed, set: (obj, value) => { obj.petBreed = value; } } }, _petBreed_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petGender_decorators, { kind: "field", name: "petGender", static: false, private: false, access: { has: obj => "petGender" in obj, get: obj => obj.petGender, set: (obj, value) => { obj.petGender = value; } } }, _petGender_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petBloodPressure_decorators, { kind: "field", name: "petBloodPressure", static: false, private: false, access: { has: obj => "petBloodPressure" in obj, get: obj => obj.petBloodPressure, set: (obj, value) => { obj.petBloodPressure = value; } } }, _petBloodPressure_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petBoneDensity_decorators, { kind: "field", name: "petBoneDensity", static: false, private: false, access: { has: obj => "petBoneDensity" in obj, get: obj => obj.petBoneDensity, set: (obj, value) => { obj.petBoneDensity = value; } } }, _petBoneDensity_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petWeight_decorators, { kind: "field", name: "petWeight", static: false, private: false, access: { has: obj => "petWeight" in obj, get: obj => obj.petWeight, set: (obj, value) => { obj.petWeight = value; } } }, _petWeight_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petOwner_decorators, { kind: "field", name: "petOwner", static: false, private: false, access: { has: obj => "petOwner" in obj, get: obj => obj.petOwner, set: (obj, value) => { obj.petOwner = value; } } }, _petOwner_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        PetDocument = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetDocument = _classThis;
})();
exports.PetSchema = mongoose_1.SchemaFactory.createForClass(PetDocument);
//# sourceMappingURL=pet.schema.js.map