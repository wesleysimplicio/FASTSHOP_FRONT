import { StatusEnum } from 'src/app/shared/enum/status.enum';

export class Product {

    Code: string;
    Name: string;
    Price: number;
    Status: StatusEnum;
    CreateAt: Date;
    UpdateAt: Date;

    constructor() {
        this.Code = '';
        this.Name = '';
        this.Price = 0;
        this.Status = StatusEnum.Active;
        this.CreateAt = null;
        this.UpdateAt = null;
    }
}