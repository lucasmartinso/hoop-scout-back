export class Hospedagem{
    id: number;
    beginDate: Date;
    finishDate: Date | null;
    status: string | null;
    price: number;
    comment: string;
    createdAt: Date; 
}