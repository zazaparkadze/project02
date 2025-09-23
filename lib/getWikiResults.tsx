export default async function getWikiResults(searchTerm: string) {
  const paramsObj = {
    action: "query",
    format: "json",
    origin: "*",
    generator: "search",
    gsrsearch: searchTerm,
    /*    gsrlimit: "20", */
    prop: "pageimages|extracts",
    /* exchar: "100", */
    /*  exlimit: "max", */
    explaintext: "true",
    exintro: "true",
  };
  const searchParams = new URLSearchParams(paramsObj);
  const res = await fetch("https://en.wikipedia.org/w/api.php?" + searchParams);
  return res.json();
}
