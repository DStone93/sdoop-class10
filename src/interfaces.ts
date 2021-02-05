export interface ILocation {
    location:string;
}

export interface IBusiness {
    businessName:string;
}

export interface IPerson {
    name: string;
}

export interface IAnimal {
    species:string;
    name:string;
}

export interface IVehicle {
    brand:string;
}

export interface ITrailer{
    capacity:number
    animals:IAnimal[]
    isFull():boolean
}

