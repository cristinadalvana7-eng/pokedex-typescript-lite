import { PokemonResumo } from "../models/pokemon";

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }

    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  listar(): PokemonResumo[] {
    return this.pokemons;
  }

  remover(id: number): void {
    const indice = this.pokemons.findIndex(
      (pokemon) => pokemon.id === id
    );

    if (indice === -1) {
      console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID.`);
      return;
    }

    this.pokemons.splice(indice, 1);

    console.log(`[OK] Pokémon removido do catálogo.`);
  }
}