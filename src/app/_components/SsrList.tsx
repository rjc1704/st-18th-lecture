import { Pokemon } from "@/types/pokemon.type";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

interface SsrListProps {
  totalCount: number;
}
export default async function SsrList({ totalCount }: SsrListProps) {
  const defaultUrl =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PRODUCTION_URL;

  const pokemonList: Pokemon[] = await fetch(
    `${defaultUrl}/api/pokemons/setTotal/${totalCount}`,
  ).then((res) => res.json());

  return (
    <ul className="grid grid-cols-2 gap-2 px-2">
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
