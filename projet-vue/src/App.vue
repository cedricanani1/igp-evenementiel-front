<template>
    <Header :reponse=reponse :cart=cart />
    <router-view
    :cart=cart
    
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
      //  numberCart(items){
      //       this.cart = this.cart.push(items)
      //   },
    },
    data(){
      return{
        cart:[],
        reponse:"adjobi dit oui",
      }
    }
}
</script>
