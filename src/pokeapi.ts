export class PokeAPI {
    private static readonly baseURL = 'https://pokeapi.co/api/v2';

    constructor() {

    }

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        const locationsURL = pageURL ?? (PokeAPI.baseURL + '/location-area/');
        const response = await fetch(locationsURL);
        if (!response.ok) {
            throw new Error(`${response.status}: Something went wrong with this location area URL.`);
        }
        return response.json();
    }

    async fetchLocation(locationName: string | null): Promise<Location> {
        const locationURL = PokeAPI.baseURL + '/location-area/' + locationName;
        const response = await fetch(locationURL);
        if (!response.ok) {
            throw new Error(`${response.status}: Something went wrong with this location name.`);
        }
        return response.json();
    }
}

export type ShallowLocations = {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<Location>
}

export type Location = {
    name: string,
    url: string
}
