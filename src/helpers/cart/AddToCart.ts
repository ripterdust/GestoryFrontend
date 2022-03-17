interface dataInterface {
    id: string;
}

interface stateInterface {
    quantity: number;
    productId: string | undefined;
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

    // Verifiying if the cart exists

    const cartKeys = Object.keys(cart);
    const find = cartKeys.find((element) => element == state.productId);

    if (state.productId && !find && state.quantity) {
        const { productId } = state;

        console.log(productId);
    }
};
