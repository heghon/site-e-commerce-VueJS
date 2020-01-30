<template>
  <div id="cart">
        <div id="box">
            Total
            <div id="total">0</div>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'cart',
  }
</script>

<style scoped>
#box {
    background: #66c788;
    border: 1px solid #000000;
    width: 50px;
    text-align: center;
    float: right;
  }

#total {
    text-align: center;
}
</style>