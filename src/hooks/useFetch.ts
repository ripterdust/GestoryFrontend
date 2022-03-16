import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [state, setState] = useState({
        data: {},
        err: false,
    });

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                setState((state) => {
                    return {
                        ...state,
                        data: response,
                        err: false,
                    };
                });
            })
            .catch((err) => {
                setState((state) => {
                    return {
                        ...state,
                        data: {
                            err,
                        },
                    };
                });
            });
    }, []);

    return state;
};
