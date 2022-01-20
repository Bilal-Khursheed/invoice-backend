
import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface UsersModel
 * @extends {Document}
 */
export interface UsersModel extends Document {
    name: string;
    email: string;
    pNumber : number;

}

const UserSchema: Schema = new Schema({
    name: String,
    email: String,
    pNumber : Number,
}, {
    collection: 'userModel',
    versionKey: false
}).pre('save', async function (next: NextFunction): Promise < void > {});


/**
 * Helper method for getting user's gravatar.
 */


export default connections.db.model < UsersModel > ('userModel', UserSchema);
