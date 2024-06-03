import { DataPokemon } from "./DataPokemon.interface";

export interface Pokemons {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    url: string;
}

export interface PoekmonData {
    chain:             Chain;
}

export interface Chain {
    evolves_to:        Chain[];
    species:           Species;
}


export interface Species {
    name: string;
}

