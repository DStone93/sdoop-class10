import {ILocation, IBusiness, IPerson, IAnimal, IVehicle, ITrailer} from './interfaces'

//business decision: All farm animals are considered large
// pets are small animals 

class Farm implements ILocation, IBusiness {
    location:string;
    businessName:string;

    largeAnimals:IAnimal[]=[];

    horseTrailer:ITrailer[]=[];
    cattleTrailer:ITrailer[]=[];
    smallTrailer:ITrailer[]=[];

    addLargeAnimal( animal:LargeAnimal){
        this.largeAnimals.push( animal );
        console.log(this.largeAnimals)
    }

    // set (){
    //     return this.largeAnimals.map(animal => animal.name).push();
    // }


}

class Individual implements IPerson {

    get name(){
        return `${this.fname} ${this.lname}`;
    }

    constructor( public fname:string, public lname:string ){

    }
}

class Family implements IPerson {
    name: string;
    familyMembers:IPerson[]=[];
    pets:IAnimal[]=[];


    addOwner( member:Individual){
        this.familyMembers.push( member );
    }

    addPet( pet:Pet){
        this.pets.push( pet );
    }

}

class Car implements IVehicle {
    brand: string;
    
}

class Truck implements IVehicle {
    brand:string;
}

class Trailer implements ITrailer {
    capacity:number;
    animals:[]
    isFull() {
        return false;
    }
}

class horseTrailer extends Trailer {

    
}

class cattleTrailer implements ITrailer {
    capacity: number
    animals:IAnimal[]
    isFull(){
        return false;
    }
}

class smallTrailer implements ITrailer {
    capacity: number;
    animals:IAnimal[]
    isFull(){
        return false;
    }

}

class Animal implements IAnimal {
    species:string;
    name:string;
}

class LargeAnimal extends Animal {
    name = "Large Animal"
}

class Pet extends Animal {

}



const HewbiesFarm = new Farm();
HewbiesFarm.location = "Texas";
const Horse = new LargeAnimal();
HewbiesFarm.addLargeAnimal(Horse);

console.log(HewbiesFarm)

