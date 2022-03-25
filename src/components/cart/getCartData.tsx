export const getCartData = (cart: object) => {
    const keysCart = Object.keys(cart);
    let arrCart: Array<object> = [];
    keysCart.map((key: string) => {
        // @ts-ignore
        const element: object = cart[key];
        arrCart = [...arrCart, element];
    });

    return arrCart;
};
