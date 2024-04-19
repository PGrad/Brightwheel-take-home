const API_ENDPOINT = 'http://localhost:3001';

export async function getListingsByQuery(query: string, pageNo: number = 1) {
    const response = await fetch(`${API_ENDPOINT}/search?name_like=^${query}&_limit=10&_page=${pageNo}`);

    if (!response.ok) {
        throw new Error('Failed to fetch listings.');
    }

    return await response.json();
}

export async function getAllListings(pageNo: number = 1) {
    const response = await fetch(`${API_ENDPOINT}/search?_limit=10&_page=${pageNo}`);

    if (!response.ok) {
        throw new Error('Failed to fetch listings.');
    }

    return await response.json();
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