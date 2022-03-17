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

    const cart = JSON.parse(localStorage.cart);
    if (state.productId && state.quantity) {
        const { productId, quantity } = state;
        cart[productId] = { quantity };
        localStorage.cart = JSON.stringify(cart);
    }
};
