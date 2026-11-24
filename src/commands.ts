import { CLICommand } from './state.js';
import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { commandMap } from './command_map.js';
import { commandMapBack } from './command_map_back.js';

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: 'exit',
            description: 'Exit the Pokedex',
            callback: commandExit
        },
        help: {
            name: 'help',
            description: 'Displays a help message',
            callback: commandHelp
        },
        map: {
            name: 'map',
            description: 'Displays the names of 20 location areas in the Pokemon world',
            callback: commandMap
        },
        mapb: {
            name: 'mapb',
            description: 'Displays the names of the previous 20 location areas in the Pokemon world',
            callback: commandMapBack
        }
    }
}