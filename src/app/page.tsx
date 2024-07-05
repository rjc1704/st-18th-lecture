import { Suspense } from "react";
import PokemonList from "./_components/PokemonList";

export default async function Home() {
  return (
    <>
      <PokemonList />
    </>
  );
}
