interface dataInterface {
    id: string;
    productName: string;
    productImage: any;
    productPrice: number;
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
    if (state.productId) {
        const { productId, quantity } = state;
        const { productName, productPrice } = data;

        const objectToSave = {
            quantity,
            name: productName,
            price: productPrice,
        };

        cart[productId] = objectToSave;
        localStorage.cart = JSON.stringify(cart);
    }
};
