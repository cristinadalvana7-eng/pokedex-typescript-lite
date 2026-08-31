# Pokédex TypeScript Lite

## Descrição

Mini-projeto desenvolvido em Node.js e TypeScript para consultar informações de Pokémon na PokeAPI e armazenar os Pokémon encontrados em um catálogo durante a execução do programa.

## Objetivo

Praticar conceitos básicos de desenvolvimento back-end com Node.js e TypeScript, incluindo:

- Interfaces
- Classes
- Arrays
- Métodos de array
- Funções assíncronas
- async/await
- fetch
- Tratamento de erros
- Consumo de API
- Git e GitHub

## Tecnologias utilizadas

- Node.js
- TypeScript
- PokeAPI
- tsx
- Git
- GitHub

## Pré-requisitos

Para executar o projeto é necessário ter Node.js e npm instalados.

## Instalação

Depois de baixar ou clonar o projeto, entre na pasta pelo terminal e execute:

```bash
npm install
```

## Como executar

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O ponto de entrada da aplicação é:

```text
src/main.ts
```

## Funcionalidades

- Busca de Pokémon pelo nome ou ID.
- Tratamento de Pokémon inexistente.
- Mapeamento dos dados recebidos da PokeAPI.
- Adição de Pokémon ao catálogo.
- Bloqueio de Pokémon duplicado.
- Listagem do catálogo.
- Remoção de Pokémon pelo ID.
- Tratamento de tentativa de remoção de Pokémon inexistente.

## Exemplos de execução

### Busca válida

Entrada testada:

```text
pikachu
```

Resultado:

```text
[OK] Pokémon encontrado: pikachu
```

Dados retornados:

```text
ID: 25
Nome: pikachu
Tipo: electric
Altura: 4
Peso: 60
```

### Busca inválida

Entrada testada:

```text
pokemon-inexistente
```

Resultado:

```text
[ERRO] Pokémon não encontrado: pokemon-inexistente
null
```

### Duplicidade

Foi testada a tentativa de adicionar o mesmo Pokémon duas vezes.

Resultado:

```text
[OK] pikachu adicionado ao catálogo.
[AVISO] pikachu já está no catálogo.
```

### Remoção

Foi testada a remoção do Pokémon com ID 25.

Resultado:

```text
[OK] Pokémon removido do catálogo.
```

Também foi testada a tentativa de remover um ID inexistente:

```text
[AVISO] Nenhum Pokémon encontrado com esse ID.
```

## Estrutura dos arquivos

```text
pokedex-typescript-lite/
├── src/
│   ├── models/
│   │   └── pokemon.ts
│   ├── services/
│   │   ├── PokeApiService.ts
│   │   └── BoxService.ts
│   └── main.ts
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

### `src/models/pokemon.ts`

Contém as interfaces utilizadas para representar os dados do Pokémon e o retorno da PokeAPI.

### `src/services/PokeApiService.ts`

Responsável por consultar a PokeAPI, tratar erros e transformar os dados recebidos em um objeto simplificado.

### `src/services/BoxService.ts`

Contém a classe `CatalogoPokemon`, responsável por adicionar, listar e remover Pokémon do catálogo em memória.

### `src/main.ts`

Arquivo principal utilizado para executar e demonstrar o funcionamento do projeto.

## PokeAPI

A aplicação utiliza a PokeAPI para consultar os dados dos Pokémon.

Documentação oficial:

https://pokeapi.co/docs/v2

## Kanban

O planejamento do projeto foi organizado utilizando quatro colunas:

| Backlog | A Fazer | Em Andamento | Concluído |
|---|---|---|---|
| Melhorias futuras | Novos testes | README | Criar repositório no GitHub |
| Novas funcionalidades | Configurar Node.js e TypeScript | Documentação | Criar interfaces de Pokémon |
|  |  |  | Criar integração com PokeAPI |
|  |  |  | Tratar Pokémon inexistente |
|  |  |  | Mapear resposta da API |
|  |  |  | Criar catálogo |
|  |  |  | Impedir duplicidade |
|  |  |  | Listar Pokémon |
|  |  |  | Remover Pokémon |

## Branches utilizadas

```text
main
develop
feat/pokedex
docs/readme
```

## Versionamento

O projeto foi desenvolvido de forma incremental utilizando Git e GitHub, com commits separados para as principais etapas do desenvolvimento.
