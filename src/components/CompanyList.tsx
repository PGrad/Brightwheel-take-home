import { useEffect, useState } from "react";
import Search from "./Search";
import { debounce, getListings } from "../api";
import CompanyCard from "./CompanyCard";
import { CompanyCardType, KeyValueObjectType } from "../types";
import "./CompanyList.css";
import { Typography } from "@mui/material";

export default function CompanyList() {
    const [pageNo, setPageNo] = useState(1);
    const [companies, setCompanies] = useState<CompanyCardType[]>([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [links, setLinks] = useState<KeyValueObjectType>({});

    useEffect(() => {
        const getCompanies = async () => {
            const queryObj = query ? { "name_like": `^${query}` } : {};
            const { results, count, links } = (await getListings(queryObj, pageNo));

            const listings = results.filter((listing: CompanyCardType) =>
                listing.name && listing.name !== ""
            );

            setCompanies([...listings]);
            setCount(count);
            setLinks({ ...links });

            setLoading(false);
        };

        getCompanies();

        window.addEventListener('scroll', () => {
            if (!loading && (window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight) {
                if (pageNo !== -1) {
                    setPageNo(pageNo + 1);
                    setLoading(true);
                }
            }
        });
    }, [pageNo, query]);

    const onValueChange = debounce((value: string) => {
        setQuery(value);
        setPageNo(1);
        setCompanies([]);
    }, 100);

    const onSearch = () => {
        // Do nothing for now.
        // The query will already
        // be evaluated in onValueChange.
        // I just leave the option for a button
        // for users who are used to clicking on
        // a search button.
        return;
    };

    return (
        <main id="main" className="listings">
            <Search
                onValueChange={onValueChange}
                onSearch={onSearch}
            />

            <Typography variant="body1">
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
        </main>
    );
}