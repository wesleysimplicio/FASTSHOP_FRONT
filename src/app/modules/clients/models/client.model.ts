import { StatusEnum } from 'src/app/shared/enum/status.enum';

export class Client {

    code: string;
    name: string;
    document: number;
    email: string;
    status: StatusEnum;
    createAt: Date;
    updateAt: Date;

    constructor() {
        this.code = '';
        this.name = '';
        this.document = null;
        this.email = '';
        this.status = StatusEnum.Active;
        this.createAt = null;
        this.updateAt = null;
    }
}