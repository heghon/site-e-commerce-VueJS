<template>
  <div id="desserts-table">
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th></th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fondant au chocolat</td>
          <td>Le Fondant au chocolat se caractérise par une texture particulièrement soyeuse, dense et parfaitement homogène, qui fond dans la bouche.</td>
          <td><img alt="fondant" src="http://lesucre-prod.s3.amazonaws.com/uploads/post/bigvisual/355/75a3062a-799a-4063-bdd4-16f908c5f599.jpg"></td>
          <td><button class="fondant-add" type="button">6 euros</button></td>
        </tr>
        <tr>
          <td>Flan pâtisser</td>
          <td>Le flan est un entremets, une crème dessert composée d'œufs battus dans du lait que l'on cuit au four.</td>
          <td><img alt="flan" src="http://lesucre-prod.s3.amazonaws.com/uploads/post/bigvisual/538/938cfa7f-36df-4eee-8912-66177b9f2d68.jpg"></td>
          <td><button class="flan-add" type="button">4 euros</button></td>
        </tr>
        <tr>
          <td>Quatre-quarts</td>
          <td>gâteau breton qui tire son nom du fait que les quatre ingrédients qui le composent (farine, sucre, beurre, œufs) y sont en quantité égale (en masse),</td>
          <td><img alt="quatre-quart" src="http://lesucre-prod.s3.amazonaws.com/uploads/post/bigvisual/557/fb5dcae9-1bfe-4d97-b5b8-ad5e52f443de.jpg"></td>
          <td><button class="quatre-quart-add" type="button">3 euros</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'desserts-table',
  }
</script>

<style scoped></style>