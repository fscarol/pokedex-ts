import type { State } from './state.js';

export function cleanInput(input:string): string[] {
    return input.trim().toLowerCase().split(' ').filter(char => char !== '');
}

export async function startREPL(state:State): Promise<void> {
    state.interface.prompt();

    state.interface.on('line', async (line) => {
        const input = cleanInput(line);
        if (input.length !== 0) {
            let registry = state.commands;
            let command = registry[input[0]];
            if (command) {
                try {
                    await command.callback(state);
                } catch (err) {
                    if (err instanceof Error) {
                        console.log(err.message);
                    }
                }
            } else {
                console.log('Unknown command');
            }
        }
        state.interface.prompt();
    });
}
