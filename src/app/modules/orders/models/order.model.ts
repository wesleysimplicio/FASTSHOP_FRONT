import { StatusEnum } from 'src/app/shared/enum/status.enum';
import { Product } from '../../products/models/product.model';

export class Order {

    code: string;
    client: string;
    clientId: string;
    products: Array<Product>;
    status: StatusEnum;
    createAt: Date;
    updateAt: Date;

    constructor() {
        this.code = '';
        this.client = '';
        this.clientId = '';
        this.products = new Array<Product>();
        this.status = StatusEnum.Processing;
        this.createAt = null;
        this.updateAt = null;
    }
}