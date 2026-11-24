import { initState } from "./state.js";
import { startREPL } from "./repl.js";

async function main() {
    try {
        const state = initState();
        await startREPL(state);
    } catch (err) {
        console.log(err);
    }
}

main();
