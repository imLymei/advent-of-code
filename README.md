<div align='center'> <a href='https://github.com/imLymei/advent-of-code/blob/main/README.md' alt='English readme'>English</a> | <a href='https://github.com/imLymei/advent-of-code/blob/main/README_PT_BR.md'>Português</a> </div>

# Advent of Code Repository

This repository aims to store and share my solutions for the "Advent of Code" challenge. The directory structure of this repository follows an organization pattern by year, programming language, and challenge day. Here is the general structure of the repository:

```
/root
  /2022
    /ts
      /day01
        data.data
        index.ts
        package.json
        package-lock.json
      /day02
        ...
  /2021
    ...
  /2020
    ...
  ...
```

## Directory Structure

- `/root`: Root directory of the repository.
- `/<year>`: Subdirectory representing the challenge year.
- `/ts`: Subdirectory representing the TypeScript programming language (language abbreviation).
- `/day01`: Subdirectory representing the challenge day in the format "dayXX" (where XX is the day from 01 to 25).

## Directory Contents

Inside each "dayXX" subdirectory, you will find the following files:

- `data.data`: This file contains exclusively the input data required for the day's challenge.

- `index.ts` (or equivalent): This is the main file that contains the code used to solve the day's challenge. Depending on the programming language, the file name may vary, for example, `index.ts` for TypeScript, `index.js` for JavaScript, or `index.rs` for Rust.

- `package.json` (or equivalent): This file is specific to projects that use package managers like npm (Node.js). It describes project dependencies and other settings. The file name may vary depending on the language (e.g., `package.json` for TypeScript/JavaScript, `Cargo.toml` for Rust).

- `package-lock.json` (or equivalent): This file is a locked version of project dependencies and is automatically generated by npm in JavaScript/TypeScript projects. In different languages, this file may have a different name or may not exist.

## How to Use

You can access the solutions based on the year, programming language, and challenge day you want to explore. Simply navigate through the corresponding directories and examine the source code files and input data.

Feel free to clone this repository or download the solutions for reference or study. If you have any questions or suggestions for improvements in the solutions, please feel free to get in touch or create issues in the repository.

Enjoy solving the Advent of Code challenges! 🎅🎄🌟
