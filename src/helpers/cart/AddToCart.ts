interface dataInterface {
    id: string;
}

export const addToCart = (setState: any, data: dataInterface) => {
    setState((state: object) => ({
        ...state,
        productId: data.id,
    }));
};
