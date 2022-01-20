"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../../config/connection/connection");
const mongoose_1 = require("mongoose");
const InvoiceSchema = new mongoose_1.Schema({
    invoiceFor: String,
    billTo: String,
    shipTo: String,
    date: String,
    paymentTerms: String,
    dueDate: String,
    pNumber: String,
    notes: String,
    terms: String,
    total: Number,
    amountPayed: Number,
    balanceDu: Number,
    tax: Number,
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'userModel' },
    itemId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'itemsModel' }]
}, {
    collection: 'invoiceModel',
    versionKey: false
}).pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () { });
});
/**
 * Helper method for getting user's gravatar.
 */
exports.default = connections.db.model('invoiceModel', InvoiceSchema);
//# sourceMappingURL=model.js.map