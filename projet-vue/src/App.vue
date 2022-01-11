<template>
    <Header  :cart=cart @add=addCart  />
    <router-view
    :cart=cart
    @add=addCart
    
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
   data(){
      return{
        cart:[],
        cartVue:false,
      }
    },
     methods:{
       addCart(product){
        this.cart.push(product);
        this.cartVue === true;
        },
    },
}
</script>
