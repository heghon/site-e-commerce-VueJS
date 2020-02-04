<template>
    <div class="drinks">
        <ul class="liste">
            <li>
                <img :src="this.mojito.pic" alt="mojito">
                <p>{{ this.mojito.description }}</p>
                <button class="drinks__button" @click="add_mojito">Mojito - 7 euros</button>
            </li>
            <li>
                <img :src="this.margarita.pic" alt="margarita">
                <p>{{ this.margarita.description }}</p>
                <button class="drinks__button" @click="add_margarita">Margarita - 6,5 euros</button>
            </li>
            <li>
                <img :src="this.sex_on_the_beach.pic" alt="sex on the beach">
                <p>{{ this.sex_on_the_beach.description }}</p>
                <button class="drinks__button" @click="add_sotb">Sex on the beach - 8 euros</button>
            </li>
        </ul>
    </div>
</template>

<script>
import cart from "../cart/Cart.js"
export default {
    data () {
      return {
          mojito: {
              key: 0,
              prix: 7,
              pic: "https://static.750g.com/images/auto-360/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg",
              description: "cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche."
          },
          margarita: {
              key: 1,
              prix: 6.5,
              pic: "https://static.750g.com/images/320-auto/5479d3dd25b24c4da9882350171a6b12/margarita.jpeg",
              description: "Cocktail à base de tequila, de liqueur d'orange et de jus de citron."
          },
            sex_on_the_beach: {
              key: 2,
              prix: 8,
              pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sex_On_The_Beach.jpg/280px-Sex_On_The_Beach.jpg",
              description: "Cocktail fruité composé de vodka, schnapps à la pêche, jus d'orange et de jus de canneberge"
          }
        }
    },
    methods: {
        add_mojito () {
            cart.add_product(this.mojito)
        },
        add_margarita () {
            cart.add_product(this.margarita)
        },
        add_sotb () {
            cart.add_product(this.sex_on_the_beach)
        }
    }
}
</script>

<style>

.liste {
    list-style-type: none;
}

</style>