import { useEffect, useState } from "react";
import { debounce, getFavoritesCount } from "../api";
import Search from "./Search";
import { Checkbox, Typography } from "@mui/material";
import CompanyList from "./CompanyList";
import "./CompanySearchPage.css";

export default function CompanySearchPage() {
  const [query, setQuery] = useState("");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getCount = async () => {
      setCount(await getFavoritesCount({
        "starred": "true"
      }));
    };

    getCount();
  }, []);

  const onFavoritesClick = () => {
    setFavoritesOnly(!favoritesOnly);
  };

  const onValueChange = debounce((value: string) => {
      setQuery(value);
  }, 100);

  return (
    <main className="main">
      <Search
          onValueChange={onValueChange}
      />

      <div className="checkbox">
        <Checkbox
          checked={favoritesOnly}
          onChange={onFavoritesClick}
        />
        <Typography variant="body1">
          See Favorites ({count})
        </Typography>
      </div>

      <CompanyList
          query={query}
          favorited={favoritesOnly}
      />
    </main>
  );
}