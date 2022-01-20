import UserModel, { UsersModel } from './model';
import { InvoiceService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {invoiceModelService}
 */
const UserService: InvoiceService = {
    /**
     * @returns {Promise < UsersModel[] >}
     * @memberof UserService
     */
    async findAll(): Promise < UsersModel[] > {
        try {
            return await UserModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < UsersModel >}
     * @memberof UserService
     */
    async findOne(id: string): Promise < UsersModel > {
        try {
            return await UserModel.findOne({
                _id: new Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {UsersModel} user
     * @returns {Promise < UsersModel >}
     * @memberof UserService
     */
    async insert(body: UsersModel): Promise < UsersModel > {
        try {
            const user: UsersModel = await UserModel.create(body);

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < UsersModel >}
     * @memberof UserService
     */
    async remove(id: string): Promise < UsersModel > {
        try {
            const user: UsersModel = await UserModel.findOneAndRemove({
                _id: new Types.ObjectId(id)
            });

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default UserService;
