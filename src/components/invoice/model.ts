
import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface invoiceModel
 * @extends {Document}
 */
export interface invoiceModel extends Document {
    invoiceFor: string;
    billTo: string;
    shipTo: string;
    date: Date;
    paymentTerms: string;
    dueDate: Date;
    pNumber: string;
    notes: string;
    terms: string;
    total: number;
    amountPayed: number;
    balanceDu: number;
    tax: number;
    
}

const InvoiceSchema: Schema = new Schema({
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
    userId: { type: Schema.Types.ObjectId, ref: 'userModel' },
    itemId: [{ type: Schema.Types.ObjectId, ref: 'itemsModel' }]
}, {
    collection: 'invoiceModel',
    versionKey: false
}).pre('save', async function (next: NextFunction): Promise < void > {});


/**
 * Helper method for getting user's gravatar.
 */


export default connections.db.model < invoiceModel > ('invoiceModel', InvoiceSchema);
