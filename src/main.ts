import { PokeApiService } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/BoxService";

async function main() {
  const api = new PokeApiService();
  const catalogo = new CatalogoPokemon();

  const pikachu = await api.buscarPokemon("pikachu");

  if (pikachu !== null) {
    catalogo.adicionar(pikachu);
    catalogo.adicionar(pikachu);
  }

  console.log("Catálogo:");
  console.log(catalogo.listar());

  catalogo.remover(25);
  catalogo.remover(999);

  console.log("Catálogo após remoção:");
  console.log(catalogo.listar());
}

main();