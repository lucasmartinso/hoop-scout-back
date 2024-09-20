export class Hospedagem{
    id: number;
    beginDate: Date;
    finishDate: Date | null;
    status: boolean;
    price: number;
    comment: string;
    createdAt: Date; 
}