<template>
    <div class="cart"> 
        Panier total :
        <br>
        {{ total }} 
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
        total: function () {return this.state.cart}
    }
}
</script>
