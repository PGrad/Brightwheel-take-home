import { useEffect, useMemo, useRef, useState } from "react";
import Search from "./Search";
import { debounce, getListings, PAGE_SIZE } from "../api";
import CompanyCard from "./CompanyCard";
import { CompanyCardType, KeyValueObjectType } from "../types";
import "./CompanyList.css";
import { Button, Typography } from "@mui/material";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { setHidden } from "../utils";

export default function CompanyList() {
    const [pageNo, setPageNo] = useState(1);
    const [companies, setCompanies] = useState<CompanyCardType[]>([]);
    const [query, setQuery] = useState('');
    const [count, setCount] = useState(0);
    const [links, setLinks] = useState<KeyValueObjectType>({});
    const lastPageNo = useMemo(() => Math.ceil(count / PAGE_SIZE), [query]);

    const searchRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const getCompanies = async () => {
            const queryObj = query ? { "name_like": `^${query}` } : {};
            const { results, count, links } = (await getListings(queryObj, pageNo));

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
            console.log(links);
        };

        getCompanies();

        searchRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [pageNo, query]);

    const onValueChange = debounce((value: string) => {
        setQuery(value);
        setPageNo(1);
        setCompanies([]);
    }, 100);

    const goToPage = (idx: number) => {
        setPageNo(idx);
    };

    return (
        <main id="main" className="listings">
            <Search
                ref={searchRef}
                onValueChange={onValueChange}
            />

            <Typography variant="body1" sx={{ margin: "1em" }}>
                { count > 0 ? `Showing ${companies.length} of ${count} results.` : "No results found." }
            </Typography>

            <ul className="list-no-decoration">
                {companies.length > 0 &&
                    companies.map((company: CompanyCardType, idx: number) => (
                        <li key={idx}>
                            <CompanyCard
                                id={company.id}
                                name={company.name}
                                description={company.description}
                                address={company.address}
                                starred={company.starred}
                                image={company.image}
                            />
                        </li>
                    )
                )}
            </ul>
            
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
                >
                    <FirstPageIcon />
                </Button>

                <Button
                    onClick={() => goToPage(pageNo - 1)}
                    sx={setHidden(!links.prev)}
                >
                    <KeyboardArrowLeftIcon />
                </Button>

                <Typography variant="body1">
                    Page {pageNo}
                </Typography>

                <Button
                    onClick={() => goToPage(pageNo + 1)}
                    sx={setHidden(!links.next)}
                >
                    <KeyboardArrowRightIcon />
                </Button>

                <Button
                    onClick={() => goToPage(lastPageNo)}
                    sx={setHidden(!links.last || (pageNo == lastPageNo))}
                >
                    <LastPageIcon />
                </Button>
            </nav>
        </main>
    );
}