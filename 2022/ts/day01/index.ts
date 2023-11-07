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

	const elves: number[] = [0,0,0];
	let actualElf = 0;

	for await (const line of file.readLines()) {
		if (line !== '') actualElf += +line;
		else {
			const findIndex = elves.findIndex(elf => elf < actualElf)
			if (findIndex >= 0) {
				elves.splice(findIndex, 1);
				elves.unshift(actualElf);
			}
			actualElf = 0;
		}
	}

	const response = elves.reduce((sum, value) => sum + value, 0);

	console.log(`Part Two ${response}`);
}

partOne();
partTwo();
