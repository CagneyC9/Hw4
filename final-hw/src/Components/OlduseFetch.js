import { useEffect, useState } from 'react';

const useFetch = (urls) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const fetchMultipleURLs = async () => {
            try {
                const requests = urls.map(async (url) => {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw Error(`Cannot fetch data for resource: ${url}`);
                    }
                    return response.json();
                });

                const results = await Promise.all(requests);
                setData(results);
                setError(null);
                setIsPending(false);
            } catch (err) {
                setIsPending(false);
                setError(err.message);
            }
        };

        fetchMultipleURLs();

        // The empty dependency array ensures that this effect runs only once (on mount)
    }, []);

    return { data, isPending, error };
};

export default useFetch;