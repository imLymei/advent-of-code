# Repositório do Advent of Code

Este repositório tem como objetivo armazenar e compartilhar as minhas soluções para o desafio "Advent of Code". A estrutura de diretórios deste repositório segue um padrão organizado por ano, linguagem de programação e dia do desafio. Aqui está a estrutura geral do repositório:

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

## Estrutura de Diretórios

- `/root`: Diretório raiz do repositório.
- `/<ano>`: Subdiretório que representa o ano do desafio.
- `/ts`: Subdiretório que representa a linguagem de programação TypeScript (sigla da linguagem).
- `/day01`: Subdiretório que representa o dia do desafio no formato "dayXX" (onde XX é o dia de 01 a 25).

## Conteúdo dos Diretórios

Dentro de cada subdiretório "dayXX", você encontrará os seguintes arquivos:

- `data.data`: Este arquivo contém exclusivamente os dados de entrada necessários para o desafio do dia.

- `index.ts` (ou equivalente): Este é o arquivo principal que contém o código utilizado para resolver o desafio do dia. Dependendo da linguagem de programação, o nome do arquivo pode variar, por exemplo, `index.ts` para TypeScript, `index.js` para JavaScript ou `index.rs` para Rust.

- `package.json` (ou equivalente): Este arquivo é específico para projetos que utilizam gerenciadores de pacotes como o npm (Node.js). Ele descreve as dependências do projeto e outras configurações. O nome do arquivo pode variar dependendo da linguagem (por exemplo, `package.json` para TypeScript/JavaScript, `Cargo.toml` para Rust).

- `package-lock.json` (ou equivalente): Este arquivo é uma versão travada das dependências do projeto e é gerado automaticamente pelo npm em projetos JavaScript/TypeScript. Em linguagens diferentes, esse arquivo pode ter um nome diferente, ou talvez nem exista.

## Como Usar

Você pode acessar as soluções de acordo com o ano, linguagem de programação e dia do desafio que deseja explorar. Basta navegar pelos diretórios correspondentes e examinar os arquivos de código-fonte e os dados de entrada.

Sinta-se à vontade para clonar este repositório ou baixar as soluções para referência ou estudo. Se você tiver alguma dúvida ou sugestão de melhorias nas soluções, fique à vontade para entrar em contato ou criar problemas (issues) no repositório.

Divirta-se resolvendo os desafios do Advent of Code! 🎅🎄🌟
