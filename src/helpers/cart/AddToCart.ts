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

    const { cart } = localStorage;
    console.log(JSON.parse(cart));

    // if (state.productId != '') {
    //     console.log('no hay producto');
    // }
};
