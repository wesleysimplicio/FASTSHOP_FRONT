import { StatusEnum } from 'src/app/shared/enum/status.enum';
import { Product } from '../../products/models/product.model';

export class Order {

    Code: string;
    ClientId: string;
    Products: Array<Product>;
    Status: StatusEnum;
    CreateAt: Date;
    UpdateAt: Date;

    constructor() {
        this.Code = '';
        this.ClientId = '';
        this.Products = new Array<Product>();
        this.Status = StatusEnum.Active;
        this.CreateAt = null;
        this.UpdateAt = null;
    }
}