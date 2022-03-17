export const formatePrice = (price: number) => {
    const lang = navigator.language;
    const options = { style: 'currency', currency: 'USD' };
    const intl = new Intl.NumberFormat(lang, options);

    return intl.format(price);
};
