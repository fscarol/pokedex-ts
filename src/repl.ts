import { createInterface } from 'node:readline';
import { commandExit } from './command_exit.js';
import { getCommands } from './commands.js';


export function cleanInput(input:string): string[] {
    return input.trim().toLowerCase().split(' ').filter(char => char !== '');
}

export function startREPL() {

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > '
    });

    rl.prompt();

    rl.on('line', (line) => {
        const input = cleanInput(line);
        if (input.length !== 0) {
            let registry = getCommands();
            let command = registry[input[0]];
            if (command) {
                try {
                    command.callback(registry);
                } catch (err) {
                    console.log(err);
                }
            } else {
                console.log('Unknown command');
            }
            rl.prompt();
        } else {
            rl.prompt();
            return;
        }
    }).on('close', () => {
        commandExit();
    });
}
