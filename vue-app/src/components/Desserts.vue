<template>
    <div class="desserts">
        <ul class="liste">
            <li>
                <img :src="this.mousse.pic" alt="mousse">
                <p>{{ this.mousse.description }}</p>
                <button class="desserts__button" @click="add_mousse">Mousse au chocolat - 5 euros</button>
            </li>
            <li>
                <img :src="this.pain_perdu.pic" alt="pain perdu">
                <p>{{ this.pain_perdu.description }}</p>
                <button class="desserts__button" @click="add_pain_perdu">Pain perdu - 4 euros</button>
            </li>
            <li>
                <img :src="this.tarte_aux_pommes.pic" alt="tarte aux pommes">
                <p>{{ this.tarte_aux_pommes.description }}</p>
                <button class="desserts__button" @click="add_tarte_aux_pommes">Tarte aux pommes - 9 euros</button>
            </li>
        </ul>
    </div>
</template>

<script>
import cart from "../cart/Cart.js"
export default {
    data () {
      return {
          mousse: {
              key: 0,
              prix: 5,
              pic: "https://static.750g.com/images/622-auto/fda0f8e6c84da81a4dafefbaddaec12b/mousse-au-chocolat.jpeg",
              description: "Il existe une multitude de recettes de mousses au chocolat. Certaines sont légères et très mousseuses, d'autres plus riches. Ce qui est certain, c'est que c'est un dessert que l'on aime tous."
          },
          pain_perdu: {
              key: 1,
              prix: 4,
              pic: "https://static.750g.com/images/622-auto/2e23161aa2fba7dff6748340b9ece79a/pain-perdu.jpg",
              description: "Le pain perdu me rappelle mon enfance, avec ce mélange d'ingrédients très basiques : du lait, du pain, des oeufs et du sucre, un vrai bonheur dans l'assiette."
          },
            tarte_aux_pommes: {
              key: 2,
              prix: 9,
              pic: "https://static.750g.com/images/auto-427/6bb785b2f1b8590919f1e5d171133e98/tarte-alsacienne-aux-pommes.png",
              description: "La tarte aux pommes est un dessert traditionnel mais indémodable. Chaque famille ou presque a sa propre recette et chacun y va de sa touche personnelle pour parfaire sa tarte."
          }
        }
    },
    methods: {
        add_mousse () {
            cart.add_product(this.mousse.prix)
        },
        add_pain_perdu () {
            cart.add_product(this.pain_perdu.prix)
        },
        add_tarte_aux_pommes () {
            cart.add_product(this.tarte_aux_pommes.prix)
        }
    }
}
</script>

<style>

.liste {
    list-style-type: none;
}

</style>