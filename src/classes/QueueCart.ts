export class QueueCart {
    #productId;
    #quantity;
    constructor(productId: string, quantity: number) {
        this.#productId = productId;
        this.#quantity = quantity;
    }

    getItems() {}
}
