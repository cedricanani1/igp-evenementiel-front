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
     :informationProduct=informationProduct
     :to=to
     :from=from
     :location=location
     :objet=objet
     :participants=participants
     :details=details
     :phone=phone


    :listData=products
    :perPage="5"
    :total=products.length
    :totalPages="Math.ceil(products.length/4)"
    @pageChanged=onPageChange
    :currentPage=currentPage
    :maxVisibleButtons="3"
    :paginatedData=paginateData
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
        products:[],
        currentPage:1,
        informationProduct:[],
          //  to:"",
          //  from:"",
          //  location:"",
          //  objet:"",
          //  participants:"",
          //  details:"",
          //  phone:"",
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
        },
        
  //        getProducts(){
  //      axios.get('https://igp-event-backend.lce-ci.com/api/products')
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
         paginatedData(){
            let start = (this.currentPage * this.perPage) - this.perPage;
            let end = start + this.perPage;
         return this.listData.slice(start,end);
        },
         products(){
            return this.$store.getters.products
        }
   },

   mounted(){
    //  this.getProducts();
   }
 
 
}
</script>
