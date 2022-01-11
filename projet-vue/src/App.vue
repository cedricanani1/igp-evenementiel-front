<template>
    <Header :reponse=reponse :cart=cart @event=numberCart />
    <router-view
    :cart=cart
    :reponse=reponse
    @event=numberCart
    
    >
    </router-view>
    <Footer />
</template>

<style>


</style>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  components:{
    Header,Footer
    },
    methods:{
       numberCart(){
         this.reponse = "bravo"
          
          //   this.cart = this.cart.push;
        },
    },
    data(){
      return{
        cart:[],
        reponse:"adjobi dit oui",
      }
    }
}
</script>
