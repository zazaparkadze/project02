import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { searchTerm } = await params;
  const wikiData: Promise<SearchResults> = getWikiResults(searchTerm);
  const data: SearchResults = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", "");

  if (!data?.query?.pages) {
    return {
      title: `No results for ${displayTerm}`,
    };
  }
  return {
    title: `${displayTerm}`,
    description: `${displayTerm} failed`,
  };
}

export default async function WikiSearchResults({ params }: Props) {
  const { searchTerm } = await params;
  const wikiData: Promise<SearchResults> = getWikiResults(searchTerm);
  const data: SearchResults = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const emojis = ["&#127969;", "&#9757;"];

  const content = (
    <div className="flex flex-col items-center text-amber-300">
      <h1 id="top" className="text-3xl">
        Results for {`\"${searchTerm}\"`}
      </h1>
      <div className="w-[100%] flex flex-col items-end sticky top-25">
        <p className="text-4xl  bg-transparent md:text-5xl">
          <a href="#">&#9757;</a>{" "}
        </p>
      </div>
      <div className="w-[100%] flex flex-col items-end sticky top-45">
        <p className="text-4xl  bg-transparent md:text-5xl">
          <a href="/">&#127969;</a>{" "}
        </p>
      </div>
      {results ? (
        Object.values(results).map((result) => {
          return <Item result={result} key={result.pageid} />;
        })
      ) : (
        <h2>No Results</h2>
      )}
    </div>
  );

  return content;
}
