"use client";

import { getPokemons } from "@/api/getPokemons";
import { Pokemon } from "@/types/pokemon.type";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function PokemonList() {
  const {
    data: pokemonList,
    isPending,
    error,
  } = useQuery<Pokemon[], Error, Pokemon[], [string]>({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });
  console.log("isPending:", isPending);

  if (isPending) return <p className="text-2xl">isPending...</p>;

  if (error) return <p></p>;

  return (
    <ul className="grid grid-cols-6 gap-2 px-2">
      {pokemonList.map((pokemon) => (
        <li
          key={pokemon.id}
          className="p-2 border border-red-500 rounded-sm cursor-pointer"
        >
          <Link href={`/detail/${pokemon.id}`}>
            <Image
              src={pokemon.sprites.front_default}
              alt={`${pokemon.korean_name} 전면이미지`}
              width={100}
              height={100}
            />
            <p>{pokemon.korean_name}</p>
            <p>도감번호: {pokemon.order}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
