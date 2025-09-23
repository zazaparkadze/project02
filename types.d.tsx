type Result = {
  pageid: string;
  title: string;
  extract: string;
  snippet: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SearchResults = {
  query?: {
    pages?: Result[];
  };
};
