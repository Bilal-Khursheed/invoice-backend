import { UsersModel } from './model';

/**
 * @export
 * @interface InvoiceService
 */
export interface InvoiceService {

    /**
     * @returns {Promise<UsersModel[]>}
     * @memberof InvoiceService
     */
    findAll(): Promise<UsersModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<UsersModel>}
     * @memberof InvoiceService
     */
    findOne(code: string): Promise<UsersModel>;

    /**
     * @param {UsersModel} UsersModel
     * @returns {Promise<UsersModel>}
     * @memberof InvoiceService
     */
    insert(UsersModel: UsersModel): Promise<UsersModel>;

    /**
     * @param {string} id
     * @returns {Promise<UsersModel>}
     * @memberof InvoiceService
     */
    remove(id: string): Promise<UsersModel>;
}
