import Record from 'sp-repetition';
import parser from './parser.js';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

async function main() {
	try {
		const data = await parser('./main.dat');
	} catch (error) {
		console.log(error);
	}
}

main();
