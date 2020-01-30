<template>
  <div id="app" class="small container">
    
    <h1>All</h1>
    <Cart />
    <ul>
      <li class="menu-horizontal">All</li>
      <li class="menu-horizontal">Drinks</li>
      <li class="menu-horizontal">Desserts</li>
    </ul>
    <h2>Drinks</h2>
    <drinks-table />
    <h2>Desserts</h2>
    <desserts-table />
  </div>
</template>

<script>
import DrinksTable from '@/components/DrinksTable.vue'
import DessertsTable from '@/components/DessertsTable.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'app',
  components: {
    DrinksTable,
    DessertsTable,
    Cart,
  }
}
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 880px;
  }

  .menu-horizontal {
    display:inline-block;
    text-align:center;
    width: 100px;
  }
</style>
