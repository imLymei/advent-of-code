import { open } from 'node:fs/promises';

const playValue: { [key: string]: number } = {
	rock: 1,
	paper: 2,
	scissor: 3,
};

const translatePlay: { [key: string]: string } = {
	A: 'rock',
	B: 'paper',
	C: 'scissor',
	X: 'rock',
	Y: 'paper',
	Z: 'scissor',
};

const winMatchup: { [key: string]: string } = {
	rock: 'scissor',
	paper: 'rock',
	scissor: 'paper',
};

const points = {
	draw: 3,
	win: 6,
};

async function partOne() {
	const file = await open('./data.data');

	let totalScore = 0;

	function getScore(play: string): number {
		const [enemyPlay, myPlay] = play.split(' ').map((play) => translatePlay[play]);
		let myPoints = playValue[myPlay];

		if (enemyPlay === myPlay) myPoints += points.draw;
		else if (winMatchup[myPlay] === enemyPlay) myPoints += points.win;

		return myPoints;
	}

	for await (const line of file.readLines()) {
		totalScore += getScore(line);
	}

	console.log(`Part One: ${totalScore}`);
}

async function partTwo() {
	const file = await open('./data.data');

	let totalScore = 0;

	function getScore(play: string): number {
		const plays = play.split(' ');
		const enemyPlay = translatePlay[plays[0]];
		const myPlay = plays[1];

		let myPoints = 0;

		switch (myPlay) {
			case 'X':
				myPoints += playValue[winMatchup[enemyPlay]];
				break;
			case 'Y':
				myPoints += points.draw + playValue[enemyPlay];
				break;
			case 'Z':
				let tempPlay = enemyPlay;

				while (winMatchup[tempPlay] !== enemyPlay) {
					tempPlay = winMatchup[tempPlay];
				}

				myPoints += points.win + playValue[tempPlay];

				break;
		}

		return myPoints;
	}

	for await (const line of file.readLines()) {
		totalScore += getScore(line);
	}

	console.log(`Part Two: ${totalScore}`);
}

partOne();
partTwo();
