import {ILocation, IBusiness, IPerson, IAnimal, IVehicle, ITrailer} from './interfaces'

//business decision: All farm animals are considered large
// pets are small animals 

class Farm implements ILocation, IBusiness {
    readonly location:string;
    public businessName:string;

    constructor (location:string){
        this.location = location;
    }

    private largeAnimals:IAnimal[]=[];

    //assignment
    getLargeAnimals(){
        return this.largeAnimals;
    }

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

// cattleTrailer and smallTrailer can use abstraction
class cattleTrailer implements ITrailer {
    capacity: number
    animals:IAnimal[]
    isFull(){
        return false;
    }
}

// cattleTrailer and smallTrailer can use abstraction
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



const HewbiesFarm = new Farm("Texas");
const Horse = new LargeAnimal();
HewbiesFarm.addLargeAnimal(Horse);

console.log(HewbiesFarm)

