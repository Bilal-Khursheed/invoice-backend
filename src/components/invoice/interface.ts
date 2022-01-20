import { invoiceModel } from './model';

/**
 * @export
 * @interface InvoiceService
 */
export interface InvoiceService {

    /**
     * @returns {Promise<invoiceModel[]>}
     * @memberof InvoiceService
     */
    findAll(): Promise<invoiceModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<invoiceModel>}
     * @memberof InvoiceService
     */
    findOne(code: string): Promise<invoiceModel>;

    /**
     * @param {invoiceModel} invoiceModel
     * @returns {Promise<invoiceModel>}
     * @memberof InvoiceService
     */
    insert(invoiceModel: invoiceModel): Promise<invoiceModel>;

    /**
     * @param {string} id
     * @returns {Promise<invoiceModel>}
     * @memberof InvoiceService
     */
    remove(id: string): Promise<invoiceModel>;
}
