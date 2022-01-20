import UserModel, { itemsModel } from './model';
import { ItemsService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {invoiceModelService}
 */
const ItemsService: ItemsService = {
    /**
     * @returns {Promise < itemsModel[] >}
     * @memberof UserService
     */
    async findAll(): Promise < itemsModel[] > {
        try {
            return await UserModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < itemsModel >}
     * @memberof UserService
     */
    async findOne(id: string): Promise < itemsModel > {
        try {
            return await UserModel.findOne({
                _id: new Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {itemsModel} user
     * @returns {Promise < itemsModel >}
     * @memberof UserService
     */
    async insert(body: itemsModel): Promise < itemsModel > {
        try {
            const user: itemsModel = await UserModel.create(body);

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < itemsModel >}
     * @memberof UserService
     */
    async remove(id: string): Promise < itemsModel > {
        try {
            const user: itemsModel = await UserModel.findOneAndRemove({
                _id: new Types.ObjectId(id)
            });

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default ItemsService;
