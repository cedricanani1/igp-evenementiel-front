<template>
  <!-- <PageLoader /> -->
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
     @filtrerProducts=filtrerProducts
     :search="search"
     


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
import PageLoader from '@/components/PageLoader.vue';

export default {
  components:{
    Header,Footer,PageLoader,
    },
   data(){
      return{
        cart:[],
        cartVue:false,
        products:[],
        currentPage:1,
      }
    },
     methods:{

       addCart(product){
         let item = this.cart.find( value =>value.id === product.id);
         if(item) {
           return item.quantity++;
         } else {
          //  console.log(product)
          this.cart.push({
            product_id:product.id,
            to: product.to,
            from: product.from,
            details:product.details,
            participant: product.participant,
            objects: product.objects,
            location:product.location,
            quantity:1,
            photo:'https://igp-event-backend.lce-ci.com/public/'+ product.photo[0].path,
            libelle:product.libelle,
            price:product.price,
            days:((((Date.parse(product.to)-Date.parse(product.from))/1000)/60)/60)/24,
          });
         }
         localStorage.setItem('mycart',JSON.stringify(this.cart))
         console.log("cart",localStorage.getItem('mycart'));
          // let diffDate=Date.parse(product.to) - Date.parse(product.from);
          // let jours = (((diffDate/1000)/60)/60)/24;
          // console.log("J",jours);

        },
        removeItemsCart(product){
          this.cart.splice(product,1)
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
        getProducts(){
             axios.get('https://igp-event-backend.lce-ci.com/api/products')
                  .then(resp =>{
                console.log(resp.data.data)
                this.products = resp.data.data
                })
            return this.products;
          },

      // function pour filtrer dans le tableau products
      filtrerProducts(catName){
        this.products = this.getProducts()
      if(catName !== 'All'){
        this.products = this.products.filter((item)=>{
          return item.type.libelle === catName;
        })
      }

      },
       // function pour filtrer dans le tableau products

  // function pour recherche par libelle un produit dans le tableau products

    search(libelle){
      //  this.mesProducts()
      this.products = this.products.filter((product)=>{
        return product.libelle.toLowerCase().includes(libelle.toLowerCase())
      })
    },

    // function pour recherche par libelle un produit dans le tableau products

    // mesProducts(){
    //   this.products=this.getProducts()
    // },



    
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
   },

   mounted(){
     this.getProducts();
    //  localStorage.removeItem('mycart');
    //  console.log("cart",localStorage.getItem('mycart'));
   }
 
 
}
</script>
