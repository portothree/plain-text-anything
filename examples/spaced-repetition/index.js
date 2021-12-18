import Record from 'sp-repetition';
import dayjs from 'dayjs';
import { promises as fsPromises } from 'fs';
import parser from './parser.js';

const { writeFile } = fsPromises;

const DAY_IN_MS = 24 * 60 * 60 * 1000;

function dateStringToNumber(dateString) {
	return Math.round(new Date(dateString).getTime() / DAY_IN_MS);
}

async function main() {
	const today = dateStringToNumber(new Date().toLocaleDateString());
	const cards = await parser('./main.dat');

	// Filter out cards with due date greater than today
	// and create new records after review
	const records = cards
		.filter((card) => dateStringToNumber(card.dueDate) <= today)
		.map((card) => {
			const progress = Number(card.progress.replace('P: ', ''));
			const dueDate = dateStringToNumber(card.dueDate);
			const record = new Record(
				progress,
				dueDate,
				[1, 4, 8, 17],
				[-3, -1, 1]
			);
			record.review(1);

			return [
				dayjs(new Date(record.dueDate * DAY_IN_MS)).format(
					'YYYY-MM-DD'
				),
				`	P: ${record.progress}`,
				card.question,
				card.answer,
			].join('\n');
		});

	await writeFile('main.out.dat', records);
}

main().catch(console.log);
