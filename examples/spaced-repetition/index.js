import Record from 'sp-repetition';
import parser from './parser.js';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

async function main() {
	const cards = await parser('./main.dat');

	cards.forEach((card) => {
		const progress = Number(card.progress.replace('P: ', ''));
		const dueDate = Math.round(
			new Date(card.dueDate).getTime() / DAY_IN_MS
		);
		const record = new Record(
			progress,
			dueDate,
			[1, 4, 8, 17],
			[-3, -1, 1]
		);
		record.review(1);
	});
}

main().catch(console.log);
