import { StatusEnum } from 'src/app/shared/enum/status.enum';

export class Product {

    code: string;
    name: string;
    price: number;
    status: StatusEnum;
    createAt: Date;
    updateAt: Date;

    constructor() {
        this.code = '';
        this.name = '';
        this.price = 0;
        this.status = StatusEnum.InStock;
        this.createAt = null;
        this.updateAt = null;
    }
}