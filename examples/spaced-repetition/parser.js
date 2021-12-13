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

	return (async () => {
		const data = {
			metadata: [],
		};

		for await (const line of rl) {
			// Special keyword `k` found
			if (line.startsWith('k ')) {
				data.metadata.push(line);
			}
		}

		return data;
	})();
}
