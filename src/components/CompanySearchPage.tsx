import { useEffect, useState } from "react";
import { debounce, getFavoritesCount } from "../api";
import Search from "./Search";
import { Checkbox, Typography } from "@mui/material";
import CompanyList from "./CompanyList";
import { changeStarStatus } from "../api";
import "./CompanySearchPage.css";
import { showError } from "../utils";

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

  const onStarChange = async (id: string, wasStarred: boolean) => {
    // Show an error to the user if the star status could not be updated.
    if (await changeStarStatus(id, !wasStarred)) {
        console.log("Star status updated.");

        if (wasStarred) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }

        return true;
    } else {
        showError("Failed to update star status.");
        return false;
    }
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
          aria-labelledby="favorites"
        />
        <Typography id="favorites" aria-hidden variant="body1">
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