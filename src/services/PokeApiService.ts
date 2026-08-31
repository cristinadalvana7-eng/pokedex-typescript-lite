import { PokemonApiResponse, PokemonResumo } from "../models/pokemon";

export class PokeApiService {
  async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase()}`
      );

      if (!resposta.ok) {
        console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
        return null;
      }

      const dados: PokemonApiResponse = await resposta.json();

      const tipos = dados.types.map((item) => item.type.name);

      const pokemon: PokemonResumo = {
        id: dados.id,
        nome: dados.name,
        tipos: tipos,
        altura: dados.height,
        peso: dados.weight,
      };

      console.log(`[OK] Pokémon encontrado: ${pokemon.nome}`);

      return pokemon;
    } catch (erro) {
      console.log("[ERRO] Não foi possível buscar o Pokémon.");
      return null;
    }
  }
}import { PokemonApiResponse, PokemonResumo } from "../models/pokemon";

