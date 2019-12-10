import { StatusEnum } from 'src/app/shared/enum/status.enum';

export class Client {

    Code: string;
    Name: string;
    Document: number;
    Email: string;
    Status: StatusEnum;
    CreateAt: Date;
    UpdateAt: Date;

    constructor() {
        this.Code = '';
        this.Name = '';
        this.Document = 0;
        this.Email = '';
        this.Status = StatusEnum.Active;
        this.CreateAt = null;
        this.UpdateAt = null;
    }
}