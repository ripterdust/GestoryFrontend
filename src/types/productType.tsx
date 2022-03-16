interface dataType {
    id: string;
    productCategory: string;
    productImage: string;
    productName: string;
    productPrice: number;
    serialNumber: string;
}

export type props = {
    id: string;
    data: dataType;
};
