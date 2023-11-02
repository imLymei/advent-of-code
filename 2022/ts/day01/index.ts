import { open } from 'node:fs/promises';

async function partOne() {
	const file = await open('./data.data');

	let maxElf = 0;
	let actualElf = 0;

	for await (const line of file.readLines()) {
		if (line === '') {
			maxElf = Math.max(maxElf, actualElf);
			actualElf = 0;
		} else actualElf += +line;
	}

	console.log(`Part One: ${maxElf}`);
}

async function partTwo() {
	const file = await open('./data.data');

	const elves: number[] = [];
	let actualElf = 0;
	let highestElf = 0;

	for await (const line of file.readLines()) {
		if (line !== '') actualElf += +line;
		else {
			if (actualElf > highestElf) {
				elves.unshift(actualElf);
				highestElf = actualElf;
				if (elves.length > 3) elves.pop();
			}
			actualElf = 0;
		}
	}

	const response = elves.slice(0, 3).reduce((sum, value) => sum + value, 0);

	console.log(`Part Two ${response}`);
}

partOne();
partTwo();
