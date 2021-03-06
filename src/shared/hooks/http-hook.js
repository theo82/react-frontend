import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    // UseRef will store data across re-render cycles.
    const activeHtttpRequest = useRef([]);

    const sendRequest = useCallback (async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true);
        try {
            const httpAbortCtl = new AbortController();
            activeHtttpRequest.current.push(httpAbortCtl);
                
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtl.signal
            });

            const responseData = await response.json();

            activeHtttpRequest.current = activeHtttpRequest.current.filter(reqCtrl => reqCtrl !== httpAbortCtl)
            if (!response.ok) {
            throw new Error(responseData.message);
            }
            
            setIsLoading(false);
            return responseData;
        }catch(err) {
            setError(err.message);
            setIsLoading(false);
            throw err;
        }
        }, []);

        const clearError = () => {
            setError(null);
        }

        // It will run some clear up logic when the component unmounts
        useEffect(() => {
            return () => {
                activeHtttpRequest.current.forEach(abortCtrl => abortCtrl.abort());
            };
        }, []);

    return { isLoading, error, sendRequest, clearError };
}