<template>
  <div id="drinks-table">
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
          <td>Mojito</td>
          <td>cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche.</td>
          <td><img alt="mojito" src="http://lesucre-prod.s3.amazonaws.com/uploads/post/bigvisual/1539/b8dc75b4-e1e5-496c-805e-45f66f4a00c4.jpg"></td>
          <td><button class="mojito-add" type="button">7,5 euros</button></td>
        </tr>
        <tr>
          <td>Vodka orange</td>
          <td>Le Screwdriver, de l'anglais tournevis, est un cocktail à base de jus d'orange et de vodka.</td>
          <td><img alt="vodka-orange" src="http://lesucre-prod.s3.amazonaws.com/uploads/post/bigvisual/1542/406b1fad-fade-4328-b2e7-bfbc2d86778a.jpg"></td>
          <td><button class="vodka-add" type="button">6 euros</button></td>
        </tr>
        <tr>
          <td>Americano</td>
          <td>cocktail à base de campari, de vermouth doux et de soda, servi avec des glaçons, décoré d'une tranche d'orange.</td>
          <td><img alt="americano" src="http://lesucre-prod.s3.amazonaws.com/uploads/post/bigvisual/1544/d2627e06-0cf5-4a92-a440-6e3cf972c12f.jpg"></td>
          <td><button class="americano-add" type="button">7 euros</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'drinks-table',
  }
</script>

<style scoped></style>