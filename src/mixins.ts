type Constructor = new (...args: any[]) => {};
export function withAnimal<Parent extends Constructor>( MixOn:Parent ){
    return class /* anon class "input class" */ extends MixOn {
        chocolateChips = true;
    }
}