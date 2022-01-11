<template>
    <Header  :cart=cart @add=addCart :products=products />
    <router-view
    :cart=cart
    @add=addCart
    :products=products
    
    >
    </router-view>
    <Footer />
</template>

<style>


</style>
<script>
import axios from 'axios'
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
        products:[],
      }
    },
     methods:{
       addCart(product){
        this.cart.push(product);
        },
         getCart(){
       axios.get('http://192.168.1.2:8000/api/produits')
            .then(resp =>{
                console.log(resp.data.data)
                this.products = resp.data.data
                });
   }
    
   },
   mounted(){
     this.getCart()
   }
}
</script>
