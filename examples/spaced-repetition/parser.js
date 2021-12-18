import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import * as readline from 'readline';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default async function parser(plainTextPath) {
	if (!plainTextPath) {
		throw new Error('Path to plain text not provided.');
	}

	const fileStream = fs.createReadStream(path.join(__dirname, plainTextPath));

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity,
	});

	const matchMapper = {
		'k ': 'metadata',
		'2021-11-30': 'dueDate',
		'P: ': 'progress',
		'Q: ': 'question',
		'A: ': 'answer',
	};

	return (async () => {
		const data = {
			metadata: null,
			dueDate: null,
			progress: null,
			question: null,
			answer: null,
		};

		for await (const line of rl) {
			Object.entries(matchMapper).forEach(([key, value]) => {
				if (line.match(key)) {
					data[value] = line;
				}
			});
		}

		return [data];
	})();
}
