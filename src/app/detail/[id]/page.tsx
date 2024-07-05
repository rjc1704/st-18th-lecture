import SsrList from "@/app/_components/SsrList";
import BackButton from "@/components/BackButton";
import { Pokemon } from "@/types/pokemon.type";
import { Suspense } from "react";

export default async function PokemonDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id, " 포켓몬디테일 페이지렌더링");
  const pokemonData: Pokemon = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_URL}/api/pokemons/${id}`,
  ).then((res) => res.json());
  return (
    <div>
      <h1>상세 및 리스트 분리 페이지</h1>
      <section>
        <h2>{pokemonData.korean_name} 상세</h2>
        <BackButton />
      </section>
      <div className="flex gap-2">
        <section className="border border-blue-500">
          <h2>포켓몬 전체 리스트 1 (총10개)</h2>
          <Suspense
            fallback={
              <div className="text-[30px] text-red-500">
                포켓몬리스트 로딩중...
              </div>
            }
          >
            <SsrList totalCount={10} />
          </Suspense>
        </section>
        <section className="border border-blue-500">
          <h2>포켓몬 전체 리스트 2 (총50개)</h2>
          <Suspense
            fallback={
              <div className="text-[30px] text-red-500">
                포켓몬리스트 로딩중...
              </div>
            }
          >
            <SsrList totalCount={50} />
          </Suspense>
        </section>
        {/* <section className="border border-blue-500">
          <h2>포켓몬 전체 리스트 3</h2>
          <Suspense
            fallback={
              <div className="text-[30px] text-red-500">
                포켓몬리스트 로딩중...
              </div>
            }
          >
            <SsrList totalCount={100} />
          </Suspense>
        </section> */}
      </div>
    </div>
  );
}
