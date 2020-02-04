<template>
    <div class="cart"> 
        Panier : 
        {{ nbr }} articles
        <br>
        {{ total }} €
        </div>
</template>

<script>
import total from "../cart/Cart.js"
export default {
    data () {
        return {
            state: total.state
        }
    },
    computed: {
        total: function () {return this.state.cart},
        nbr: function () {return this.state.nbr},
    }
}
</script>
