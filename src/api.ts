import { CompanyCardType, KeyValueObjectType } from "./types";

const API_ENDPOINT = 'http://localhost:3001';
export const PAGE_SIZE = 10;

export async function getListings(query: KeyValueObjectType, pageNo: number = 1): Promise<{
    results: CompanyCardType[],
    count: number,
    links: KeyValueObjectType
}> {
    const query_string = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
    const response = await fetch(`${API_ENDPOINT}/search?${query_string}&_limit=${PAGE_SIZE}&_page=${pageNo}`);

    if (!response.ok) {
        throw new Error('Failed to fetch listings.');
    }

    // Get the total count of results.
    const count = response.headers.get('X-Total-Count');

    // Get the first, prev, next, and last links from the response header
    // if available.
    const links = response.headers.get('Link')?.split(',');
    const linksObj = links?.reduce((acc, link) => {
        const pair = link.split(';')
        const key = pair[1].match(/rel="(.*)"/)![1];
        acc = {
            [key]: pair[0],
            ...acc
        };
        return acc;
    }, {});

    return {
        "results": await response.json(),
        "count": count ? Number(count) : 0,
        "links": {
            ...linksObj
        }
    };
}

export async function changeStarStatus(id: string, status: boolean): Promise<void> {
    const response = await fetch(`${API_ENDPOINT}/search/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ starred: status }),
    });

    if (!response.ok) {
        throw new Error('Failed to update star status.');
    }

    return;
}

export function debounce(fn: any, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };