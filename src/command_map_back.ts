import type { State } from './state.js';

export async function commandMapBack(state: State): Promise<void> {
    if (state.prevLocationsURL === null) {
        console.log("you're on the first page");
        return;
    }
    const response = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = response.next;
    state.prevLocationsURL = response.previous;
    for (const result of response.results) {
        console.log(result.name);
    }
}
