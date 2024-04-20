import { useEffect, useState } from "react";
import { debounce, getFavoritesCount } from "../api";
import Search from "./Search";
import { Checkbox, Typography } from "@mui/material";
import CompanyList from "./CompanyList";
import { changeStarStatus } from "../api";
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

  const onStarChange = (id: string, wasStarred: boolean) => {
    if (wasStarred) {
        setCount(count - 1);
    } else {
        setCount(count + 1);
    }

    changeStarStatus(id, !wasStarred);
  };

  return (
    <main className="main">
      <Search
          onValueChange={onValueChange}
          placeholderText={favoritesOnly ? "Search on your favorites..." : "Search for a company..."}
      />

      <div className="checkbox">
        <Checkbox
          checked={favoritesOnly}
          onChange={onFavoritesClick}
        />
        <Typography variant="body1">
          See Favorites ({count} total)
        </Typography>
      </div>

      <CompanyList
          query={query}
          favoritesOnly={favoritesOnly}
          onStarChange={onStarChange}
      />
    </main>
  );
}