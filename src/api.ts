import { CompanyCardType, KeyValueObjectType } from "./types";

const API_ENDPOINT = 'http://localhost:3001';
export const PAGE_SIZE = 10;

export async function getFavoritesCount(query: KeyValueObjectType): Promise<number> {
    const query_string = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
    const response = await fetch(`${API_ENDPOINT}/search?${query_string}&_limit=1`);

    if (!response.ok) {
        console.log('Failed to fetch count.');
        return 0;
    }

    return Number(response.headers.get('X-Total-Count'));
}

export async function getListings(query: KeyValueObjectType): Promise<{
    results: CompanyCardType[],
    count: number,
    links: KeyValueObjectType
}> {
    const query_string = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
    const response = await fetch(`${API_ENDPOINT}/search?${query_string}`);

    if (!response.ok) {
        console.log('Failed to fetch listings.');
        return {
            "results": [],
            "count": 0,
            "links": {}
        }
    }

    // Get the total count of results.
    const count = response.headers.get('X-Total-Count');

    // Get the first, prev, next, and last links from the response header
    // if available.
    const links = response.headers.get('Link')?.split(',');
    const linksObj = links?.reduce((acc, link) => {
        const pair = link.split(';')
        if (!pair || !pair[0] || !pair[1]) {
            return acc;
        }

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

export async function changeStarStatus(id: string, status: boolean): Promise<boolean> {
    const response = await fetch(`${API_ENDPOINT}/search/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ starred: status }),
    });

    if (!response.ok) {
        console.log('Failed to update star status.');
        return false;
    }

    return true;
}

export function debounce(fn: any, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };