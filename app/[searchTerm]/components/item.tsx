import Link from "next/link";

type Props = {
  result: Result;
};

export default function item({ result }: Props) {
  const content = (
    <main
      key={result.pageid}
      className=" flex flex-col max-w-[1000px] mx-4 p-12"
    >
      <section
        className="flex p-2 bg-slate-600 items-center 
      rounded-xl border-1 border-transparent w-fit"
      >
        {result.thumbnail?.source ? (
          <img
            src={result.thumbnail.source}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            alt="no pics"
            loading="lazy"
            className="mr-2"
          ></img>
        ) : (
          <h1 className="text-red-600 text-4xl">🗃️</h1>
        )}
        <p className="text-4xl underline">
          <Link
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target="_blank"
          >
            {result.title}
          </Link>
        </p>
      </section>
      <p className="text-[20px] text-justify p-2">{result.extract}</p>
    </main>
  );
  return content;
}
