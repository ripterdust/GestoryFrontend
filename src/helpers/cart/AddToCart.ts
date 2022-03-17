interface dataInterface {
    id: string;
}

interface stateInterface {
    quantity: number;
    productId: string;
    size: string;
}

export const addToCart = (
    setState: any,
    data: dataInterface,
    state: stateInterface
) => {
    setState((state: object) => ({
        ...state,
        productId: data.id,
    }));

    console.log('hola');
};
