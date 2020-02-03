class Cart {

    constructor () {
        this.state = {
            cart: 0
        }
    }


    add_product (prix) {
        this.state.cart += prix
    }
}

export default new Cart()