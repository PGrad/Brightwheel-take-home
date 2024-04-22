import { useEffect, useMemo, useRef, useState } from "react";
import { getListings, PAGE_SIZE } from "../api";
import CompanyCard from "./CompanyCard";
import { CompanyCardType, KeyValueObjectType, StarChangeHandlerType } from "../types";
import "./CompanyList.css";
import { Box, Button, Typography } from "@mui/material";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { setHidden } from "../utils";

export function CompanyPage({
    companies,
    onStarChange,
}: {
    companies: CompanyCardType[]
    onStarChange: StarChangeHandlerType
}) {
    return (
        <Box className="list">
            {companies.length > 0 &&
                companies.map((company: CompanyCardType) => (
                    <CompanyCard
                        key={company.id}
                        company={{...company}}
                        onStarChange={onStarChange}
                    />
                )
            )}
        </Box>
    );
};

export default function CompanyList({
    query,
    favoritesOnly,
    onStarChange,
}: {
    query: string,
    favoritesOnly: boolean,
    onStarChange: StarChangeHandlerType
}) {
    const [pageNo, setPageNo] = useState(1);
    const [companies, setCompanies] = useState<CompanyCardType[]>([]);
    const [count, setCount] = useState(0);
    const [links, setLinks] = useState<KeyValueObjectType>({});
    const lastPageNo = useMemo(() => Math.ceil(count / PAGE_SIZE), [count]);
    const countRef = useRef<HTMLElement>(null); 

    useEffect(() => {
        const getCompanies = async () => {
            let queryObj: KeyValueObjectType = query ? {
                "name_like": `^${query}`,
            } : {};

            if (favoritesOnly) {
                queryObj = {
                    ...queryObj,
                    "starred": "true",
                };
            } else {
                // We only paginate when the
                // user is searching for all results.
                //
                // Given that a user can
                // add or remove favorites,
                // pagination on favorites
                // can become fairly complicated.
                //
                // For this assignment, I'll
                // just not do it.
                queryObj = {
                    ...queryObj,
                    "_limit": PAGE_SIZE,
                    "_page": pageNo
                };
            }

            const { results, count, links } = (await getListings(queryObj));

            const listings = results
                .filter((listing: CompanyCardType) =>
                    listing.name && listing.name !== ""
                )
                .sort((a: CompanyCardType, b: CompanyCardType) => {
                    return a.name.localeCompare(b.name);
                });

            setCompanies([...listings]);
            setCount(count);

            setLinks({ ...links });
        };

        getCompanies();
    }, [pageNo, query, favoritesOnly]);

    const goToPage = (idx: number) => {
        setPageNo(idx);

        countRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const starChange = async (id: string, wasStarred: boolean) => {
        // Call the parent's onStarChange function.
        if (await onStarChange(id, wasStarred)) {
            if (wasStarred && favoritesOnly) {
                setCompanies([...companies.filter(
                    (company: CompanyCardType) => company.id !== id
                )]);
            }

            return true;
        }

        return false;
    };

    return (
        <Box className="listings">
            {!favoritesOnly && <Typography
                variant="body1"
                sx={{ margin: "1em 0 .5em 0", textAlign: "center"}}
                ref={countRef}
            >
                { count > 0 ? `Showing ${companies.length} of ${count} results.` : "No results found." }
            </Typography>}

            <CompanyPage
                companies={companies}
                onStarChange={starChange}
            />

            {!favoritesOnly && count != 0 &&
                <nav className="links">
                    {/**
                     * I don't navigate to the links directly,
                     * because that would take the app to a new
                     * page and create a new instance of the app.
                     * 
                     * Instead, I use the links to tell if there
                     * is a page to go to in the first place.
                     * 
                     * If a link is not available, I hide the button
                     * but I still want it to take up space on the
                     * page so the page # isn't off-center. To hide it,
                     * I have to set the visibility dynamically
                     * in the style attribute, b/c Material UI
                     * doesn't support the hidden attribute.
                     * 
                     * https://github.com/mui/material-ui/issues/20452
                     */}
                    <Button
                        onClick={() => goToPage(1)}
                        sx={setHidden(!links.first || (pageNo == 1))}
                        aria-label="First"
                    >
                        <FirstPageIcon />
                    </Button>

                    <Button
                        onClick={() => goToPage(pageNo - 1)}
                        sx={setHidden(!links.prev)}
                        aria-label="Previous"
                    >
                        <KeyboardArrowLeftIcon />
                    </Button>

                    <Typography variant="body1">
                        Page {pageNo}
                    </Typography>

                    <Button
                        onClick={() => goToPage(pageNo + 1)}
                        sx={setHidden(!links.next)}
                        aria-label="Next"
                    >
                        <KeyboardArrowRightIcon />
                    </Button>

                    <Button
                        onClick={() => goToPage(lastPageNo)}
                        sx={setHidden(!links.last || (pageNo == lastPageNo))}
                        aria-label="Last"
                    >
                        <LastPageIcon />
                    </Button>
                </nav>
            }
        </Box>
    );
}