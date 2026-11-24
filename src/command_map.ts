import type { State } from './state.js';

export async function commandMap(state: State): Promise<void> {
    const response = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
    state.nextLocationsURL = response.next;
    state.prevLocationsURL = response.previous;
    for (const result of response.results) {
        console.log(result.name);
    }
}
