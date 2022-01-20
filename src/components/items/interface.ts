import { itemsModel } from './model';

/**
 * @export
 * @interface ItemsService
 */
export interface ItemsService {

    /**
     * @returns {Promise<itemsModel[]>}
     * @memberof ItemsService
     */
    findAll(): Promise<itemsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<itemsModel>}
     * @memberof ItemsService
     */
    findOne(code: string): Promise<itemsModel>;

    /**
     * @param {itemsModel} itemsModel
     * @returns {Promise<itemsModel>}
     * @memberof ItemsService
     */
    insert(itemsModel: itemsModel): Promise<itemsModel>;

    /**
     * @param {string} id
     * @returns {Promise<itemsModel>}
     * @memberof ItemsService
     */
    remove(id: string): Promise<itemsModel>;
}
