import UserModel, { invoiceModel } from './model';
import { InvoiceService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {invoiceModelService}
 */
const UserService: InvoiceService = {
    /**
     * @returns {Promise < invoiceModel[] >}
     * @memberof UserService
     */
    async findAll(): Promise < invoiceModel[] > {
        try {
            return await UserModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < invoiceModel >}
     * @memberof UserService
     */
    async findOne(id: string): Promise < invoiceModel > {
        try {
            return await UserModel.findOne({
                _id: new Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {invoiceModel} user
     * @returns {Promise < invoiceModel >}
     * @memberof UserService
     */
    async insert(body: invoiceModel): Promise < invoiceModel > {
        try {
            const user: invoiceModel = await UserModel.create(body);

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < invoiceModel >}
     * @memberof UserService
     */
    async remove(id: string): Promise < invoiceModel > {
        try {
            const user: invoiceModel = await UserModel.findOneAndRemove({
                _id: new Types.ObjectId(id)
            });

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default UserService;
