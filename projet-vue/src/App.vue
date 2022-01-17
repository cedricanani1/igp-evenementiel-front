<template>
    <Header
    :cart=cart
     @add=addCart 
    :products=products 
     @removeItem=removeItemsCart
     @removeBySign=removeFromCart
     @increase=increaseFromCart
     @localstorage=cartFromLocalStorage
     :itemCost=item_cost
      />
    <router-view
    :cart=cart
    @add=addCart
    :products=products
    @removeItem=removeItemsCart
     @removeBySign=removeFromCart
     @increase=increaseFromCart
     :itemCost=item_cost

    :listData=products
    :perPage="5"
    :total=products.length
    :totalPages="Math.ceil(products.length/4)"
    @pageChanged=onPageChange
    :currentPage=currentPage
    :maxVisibleButtons="3"
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
    Header,Footer,
    },
   data(){
      return{
        cart:[],
        cartVue:false,
        products:[
          {
            id:1,
            libelle:'annanas',
            prix:2000,
            photo:'img.jpg'
          },
            {
            id:2,
            libelle:'BANANE',
            prix:2000,
            photo:'img.jpg'
          },
            {
            id:3,
            libelle:'poids',
            prix:2000,
            photo:'img.jpg'
          },
            {
            id:4,
            libelle:'mais',
            prix:2000,
            photo:'img.jpg'
          },
           {
            id:5,
            libelle:'livre',
            prix:2000,
            photo:'img.jpg'
          },
           {
            id:6,
            libelle:'gateau',
            prix:2000,
            photo:'img.jpg'
          }, {
            id:7,
            libelle:'meuble',
            prix:2000,
            photo:'img.jpg'
          },
           {
            id:8,
            libelle:'troue',
            prix:2000,
            photo:'img.jpg'
          },
           {
            id:9,
            libelle:'champion',
            prix:2000,
            photo:'img.jpg'
          }, {
            id:10,
            libelle:'beignet',
            prix:2000,
            photo:'img.jpg'
          },
           {
            id:11,
            libelle:'troue',
            prix:2000,
            photo:'img.jpg'
          }, {
            id:12,
            libelle:'truelle',
            prix:2000,
            photo:'img.jpg'
          },
        ],
        currentPage:1,
        // maxVisibleButtons:3
      }
    },
     methods:{
       addCart(product){
         
         let item = this.cart.find(value =>value.id === product.id);
         if(item) {
           item.quantity++;
         } else {
          this.cart.push({...product,quantity:1});
          localStorage.setItem('mycart',JSON.stringify(this.cart))
         }
        
        },
        removeItemsCart(product){
       this.cart.splice(product,1);
        localStorage.setItem('mycart',JSON.stringify(this.cart))
        },

        removeFromCart(product){
          let item = this.cart.find(value=>value.id === product.id)
          if(item){
            if(item.quantity > 1) {
              item.quantity--;
              localStorage.setItem('mycart',JSON.stringify(this.cart))
            }else{
              this.cart = this.cart.filter(value=>value.id !== product.id)
            }
          }
        },

        increaseFromCart(product){
          let item = this.cart.find(value=>value.id === product.id)
          if(item){
            item.quantity++;
            localStorage.setItem('mycart',JSON.stringify(this.cart))
          }
        },
        onPageChange(page){
       return this.currentPage = page ;
        }
       

      //methode pour que sauvegarder lorsque la page se recharge

       
  //        getCart(){
  //      axios.get('http://192.168.1.2:8000/api/produits')
  //           .then(resp =>{
  //               console.log(resp.data.data)
  //               this.products = resp.data.data
  //               });
  //  }
    
   },
    created(){
     this.cart = JSON.parse(localStorage.getItem('mycart') || '[]');
   },
   computed:{
        pageCount(){
            let ligne=this.listData.length,
                size = this.perPage;
            return Math.ceil(ligne/size);
        },
   }
 
 
}
</script>
