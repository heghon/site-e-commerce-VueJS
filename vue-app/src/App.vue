<template>
  <div id="app" class="small container">
    <header>
      <h1>Chez monsieur</h1>
      <cart></cart>
    </header>

    <br/>
    <br/>
    <br/>
    <br/>

    <main>
      <ul class="filters">
        <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toute la carte</a></li>
        <li><a href="#" :class="{selected: filter === 'desserts'}" @click.prevent="filter = 'desserts'">Desserts</a></li>
        <li><a href="#" :class="{selected: filter === 'drinks'}" @click.prevent="filter = 'drinks'">Boissons</a></li>
      </ul>
      <p>
        <drinks v-show="this.filter === 'all' | this.filter === 'drinks'"></drinks>
        <desserts v-show="this.filter === 'all' | this.filter === 'desserts'"></desserts>
      </p>
    </main>
  </div>
</template>

<script>
import cart from "./components/Cart.vue";
import drinks from "./components/Drinks.vue";
import desserts from "./components/Desserts.vue";
export default {
  name: 'app',
  components: {
    cart,
    drinks,
    desserts
  },
  data () {
    return {
      filter: 'all',
    }
  },
}
</script>

<style>
header {
	position: absolute;
	width: 100%;
	height: 100px;
	background-color: darkblue;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
  justify-content: space-evenly;
}

h1 {
	color: white;
}

.cart {
  height: 60px;
	text-align: center;
	background: grey;
	border: 2px black solid;
	padding: 3px;
  margin-right: 100px;
}

.filters {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
}

.selected {
	border: 1px grey solid;
}
</style>
