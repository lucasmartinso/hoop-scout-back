export interface petService { 
    id: number;
    petId: number;
    serviceId: number;
}

export interface hostUser {
    beginDate: Date; 
    finishDate: Date; 
    petId: number[]; 
    comment: string;
}