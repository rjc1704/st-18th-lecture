import { Suspense } from "react";
import PokemonList from "./_components/PokemonList";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getPokemons } from "@/api/getPokemons";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PokemonList />
    </HydrationBoundary>
  );
}
