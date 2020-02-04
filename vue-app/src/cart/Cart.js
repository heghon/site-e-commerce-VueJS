class Cart {

    constructor () {
        this.state = {
            cart: 0,
            nbr: 0,
            list: Array
        }
    }

    add_product (item) {
        this.state.cart += item.prix,
        this.state.list[this.state.nbr] = item,
        this.state.nbr++    }
}

export default new Cart()