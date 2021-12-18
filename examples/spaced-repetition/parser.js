import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import Parsimmon from 'parsimmon';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PTA = Parsimmon.createLanguage({
	// Main entry point of the parser
	value: (r) =>
		Parsimmon.alt(r._ident, r.dueDate, r.progress, r.question, r.answer),

	_ident: () => Parsimmon.string('	').times(1),

	// Actual PTA values
	dueDate: () => Parsimmon.regexp(/2021-11-30/).desc('Due date'),
	progress: () => Parsimmon.string('P: 1'),
	question: () => Parsimmon.string('Q: '),
	answer: () => Parsimmon.string('A: '),
});

export default async function parser(plainTextPath) {
	if (!plainTextPath) {
		throw new Error('Path to plain text not provided.');
	}

	const text = await fs.promises.readFile(
		path.join(__dirname, plainTextPath),
		'utf-8'
	);

	console.log(PTA);

	return PTA.value.tryParse(text);
}
