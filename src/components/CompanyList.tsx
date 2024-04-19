import { useEffect, useState } from "react";
import Search from "./Search";
import { debounce, getAllListings, getListingsByQuery } from "../api";
import CompanyCard from "./CompanyCard";
import { CompanyCardType } from "../types";
import { CompanyCardType, KeyValueObjectType } from "../types";
import "./CompanyList.css";

export default function CompanyList() {
    const [pageNo, setPageNo] = useState(1);
    const [companies, setCompanies] = useState<CompanyCardType[]>([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getListings = async () => {
            let listings: CompanyCardType[] = [];

            if (query === '') {
                listings = await getAllListings(pageNo);
            } else {
                listings = await getListingsByQuery(query, pageNo);
            }

            listings = listings.filter((listing: CompanyCardType) =>
                listing.name && listing.name !== ""
            );

            setCompanies([...listings])
        };

        getListings();
    }, [pageNo, query]);

    const onValueChange = debounce((value: string) => {
        setQuery(value);
        setPageNo(1);
    }, 100);

    const onSearch = () => {
        // Do nothing.
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

            <ul className="list-no-decoration">
                {companies.length > 0 ?
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
                ) :
                    <p>No results found.</p>
                }
            </ul>
        </main>
    );
}