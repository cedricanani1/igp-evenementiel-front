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
      <div class="vld-parent">
                        <loading :active.sync="isLoading" 
                        :can-cancel="true" 
                        :is-full-page="FullPage" ></loading>
        </div>
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
    :perPage="3"
    :total=products.length
    :totalPages="Math.ceil(products.length/5)"
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  components:{
    Header,Footer,Loading,
    },
   data(){
      return{
        cart:[],
        cartVue:false,
        products:[],
        currentPage:1,
         isLoading: false,
         fullPage: true,
         categories:[],
      }
    },
     methods:{

       addCart(product){
  if( localStorage.token){
    
         let item = this.cart.find( value =>value.id === product.id);
         if(item) {
           return item.quantity++;
         } else if (product.to !== undefined && product.from !== undefined &&  product.details !== undefined && product.participant !== undefined && product.location !== undefined && product.objects !== undefined && product.quantity !== undefined) {
                  
                  if(product.to < product.from){
                     Swal.fire({
                    position: 'center',
                      icon: 'error',
                      text: 'La date donnée est incorrecte',
                    showConfirmButton: false,
                    timer: 1500
             })} else{
                    this.cart.push({
            product_id:product.id,
            to: product.to,
            from: product.from,
            details:product.details,
            participant: product.participant,
            objects: product.objects,
            location:product.location,
            quantity:product.quantity,
            photo:'https://igp-event-backend.lce-ci.com/public/'+ product.photo[0].path,
            libelle:product.libelle,
            price:product.price,
            days:((((Date.parse(product.to)-Date.parse(product.from))/1000)/60)/60)/24,
          });
          Swal.fire({
            position: 'center',
            icon: 'success',
             text: 'Produit ajouté au panier!',
             showConfirmButton: false,
             timer: 1000
          } )
          this.$router.push('/commander')

                  }
              
         } else {
            Swal.fire({
                    position: 'center',
                      icon: 'error',
                      text: 'Veuillez renseigner tous les champs!',
                    showConfirmButton: false,
                    timer: 1500
             })
           
         } 
         localStorage.setItem('mycart',JSON.stringify(this.cart))
         console.log("cart",localStorage.getItem('mycart'));

  }else{
     Swal.fire({
                    position: 'center',
                     title: 'Veuillez vous-connectez merci',
                    showConfirmButton: false,
                    timer: 1500
             })
             this.$router.push('/login')
  }
        },
        removeItemsCart(product){
          this.cart.splice(product,1)
        localStorage.setItem('mycart',JSON.stringify(this.cart))
        // window.location.reload(true)
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
          this.isLoading = true;
             axios.get('https://igp-event-backend.lce-ci.com/api/products')
                  .then(resp =>{
                this.products = resp.data.data
                this.categories= resp.data.data
                console.log("libelle",resp.data.data)
                this.isLoading =false;
                })
            return this.products;
          },
         

      // function pour filtrer dans le tableau products
      // filtrerProducts(catName){
      //   this.products = this.getProducts()
      // if(catName !== 'All'){
      //   this.products = this.products.filter((item)=>{
      //     return item.type.libelle === catName;
      //   })
      // }

      // },
       // function pour filtrer dans le tableau products    
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
         getCategories(){
            axios.get('https://igp-event-backend.lce-ci.com/api/categories')
                 .then(resp =>{
                this.categories = resp.data
                })   
                return this.categories;
          }
   },

   mounted(){
     this.getProducts();
    //  localStorage.removeItem('mycart');
    //  console.log("cart",localStorage.getItem('mycart'));
    this.getCategories;
   }
 
 
}
</script>
