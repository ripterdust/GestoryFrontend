export const getCartData = (cart: object) => {
    const keysCart = Object.keys(cart);
    let arrCart: any = [];

    keysCart.map((product: string) => {
        arrCart = [...arrCart, cart[product]];
    });

    return arrCart;
};
