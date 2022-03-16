import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    interface responseType {
        data: {
            err: any;
            data: object;
        };
    }

    const response: responseType = {
        data: {
            err: false,
            data: {},
        },
    };

    const [state, setState] = useState(response);

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
                setState((state: any) => {
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
