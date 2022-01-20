
import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface itemsModel
 * @extends {Document}
 */
export interface itemsModel extends Document {
    name: string;
    price: number;

}

const ItemsSchema: Schema = new Schema({
    name: String,
    price: Number,
}, {
    collection: 'itemsModel',
    versionKey: false
}).pre('save', async function (next: NextFunction): Promise < void > {});


/**
 * Helper method for getting user's gravatar.
 */


export default connections.db.model < itemsModel > ('itemsModel', ItemsSchema);
