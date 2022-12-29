<template>
     <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Produits</h2>
                        <ul>
                            <li>
                                <router-link to="/">Accueil</router-link>
                            </li>
                            <li>
                                <span>produits</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="title-img">
            <img src="/assets/images/.jpg" alt="About">
            <img src="/assets/images/shape16.png" alt="Shape">
            <img src="/assets/images/shape17.png" alt="Shape">
            <img src="/assets/images/shape18.png" alt="Shape">
        </div>
    </div>

    <div class="products-area ptb-100">
        <div class="container-fluid ">
        <div class="text-center">
                <input type="text" id="search" class="w-50 mb-3 p-3" placeholder="RECHERCHE UN PRODUIT(ex:Sono)" v-model="searchString">
          </div>
          <div class="vld-parent">
                        <loading :active.sync="isLoading" 
                        :can-cancel="true" 
                        :is-full-page="FullPage" ></loading>
        </div>
            <div class="row justify-content-center">
                <div class="col-lg-2">
                    <div class="sorting-menu">
                        <ul class="listes mt-5">
                        <li class="liste-categorie">
                         <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-square"></i>
                               <span class="bouton-categorie" @click="full()">Tous</span>
                         </div>
                        </li>
                            <li class="liste-categorie" v-for="(categorie,index) in categories" :key="index">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-square"></i>
                                    <span class="bouton-categorie " @click="buttonFilter(categorie.id)">{{categorie.libelle}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-lg-9">
          
                    <div id="Container" class="row justify-content-center">
                       <div class="col-sm-6 col-lg-4"
                      v-for="(items,index) in paginatedData" 
                      :key="index"
                      >
                            <div class="products-item" >
                            <span class="float-end me-2 mt-1">{{items.start}}/5</span>
                            <i class="bi bi-star-fill start float-end me-2 mt-1" :class="color" v-if=" items.start !== 0"></i>
                            <i class="bi bi-star-fill start float-end me-2 mt-1" v-else></i>
                            
                                <div class="top">
                          <router-link 
                            :to="{name:'SingleProduct', params:{id:items.id}}" v-if="items.photo.length >0">
                            <img :src="'https://logistique-backend.igp-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                            </router-link>
                                    <div class="inner">
                                        <h3>
                                                    <router-link 
                            :to="{name:'SingleProduct', params:{id:items.id}}">{{items.libelle}}</router-link>
                                        </h3>
                                        <span> {{items.price}} Fcfa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div v-if="!listData.length">
                    <h3>désolé </h3>
                    <p>Aucun résultat trouvé</p>
                    </div>
                    <div>
                    <nav aria-label="Page navigation example">

                     <ul class="pagination justify-content-center " v-if="listData.length > 5 || currentPage > 1">
                        <li class="fs-5">
                      <button @click="onClickFirstPage" :disabled="isInFirstPage"  >
                      &laquo;
                    </button>
                    </li>
         

                   <li class="fs-5">
         <button  v-for="(page,index) in pages" :key="index" @click="onClickPage(page.number)" 
                :class="{active:isPageActive(page.number)}"
                > {{page.number}}  
                </button>
                 </li>
                 <li class="fs-5">
                 <button  @click="onClickNextPage" :disabled="isInLastPage" >
                  &raquo;
                 </button>
                 </li>
                 </ul>
                    
                    </nav>
               
            </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Home from "./Home.vue"
import axios from "axios"
import { Notyf } from 'notyf';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name:"Produits",
    props:['cart','add','maxVisibleButtons','totalPages','total','currentPage','pageChanged','paginatedData'],
    data(){
        return{
            // products:[],
              logoAdd:'bx bx-plus',
              logoHeart:'bx bx-heart',
              add:'Ajouter au panier',
              term:"",
              categories:[],
              perPage:6,
              searchString:"",
              color:"orange",
              filter:[],
              listData:[],
              isLoading: false,
             fullPage: true,

        }
    },
    components:{
        Home,Loading,
    },
    methods:{
        onClickFirstPage(){
           this.$emit('pageChanged',this.currentPage-1)
        },
         onClickPreviousPage(){
           this.$emit('pageChanged', this.currentPage-1)
        },
         onClickPage(page){
           this.$emit('pageChanged',page)
        },
         onClickNextPage(){
           this.$emit('pageChanged', this.currentPage + 1)
        },
         onClickLastPage(){
           this.$emit('pageChanged', this.totalPages)
        },
         isPageActive(page){
           return this.currentPage === page
        },
    //  onPageChange(page){
    //       this.currentPage = page;
    //     },
     buttonFilter(typeId){
        //  this.getProducts()
             let tab=[]
         this.filter.forEach(element => {
             if (element.categorie_id == typeId) {
                 tab.push(element)
             }
         });
         this.listData = tab
        
         
    },
    full(){
       this.getProducts()
    }, 
    getProducts(){
        this.isLoading =true;
        axios.get('https://logistique-backend.igp-ci.com/api/products')
            .then(resp =>{
        this.listData = resp.data.data
        this.filter = resp.data.data
         this.isLoading =false;
        // console.log("DATA1",this.listData)
        })
    },
},
computed:{
            
  paginatedData(){
      if(this.searchString !== ""){
        return this.listData.filter(item =>{
                  return item.libelle.toLowerCase().includes(this.searchString.toLowerCase())
              })
      }
      else{
         let start = (this.currentPage * this.perPage) - this.perPage;
            let end = start + this.perPage;
         return this.listData.slice(start,end);
      }

            
        },
        startPage(){
            if(this.currentPage === 1) return 1
            if(this.currentPage === this.totalPages)return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons-1)
             return  this.currentPage - 1;
        },
        endPage(){
            return Math.min(this.startPage + this.maxVisibleButtons-1 , this.totalPages)
        },
        pages(){
            let range =[]
            for (let i = this.startPage; i <= this.endPage ; i++) {
                range.push({ number:i, isDisabled: i === this.currentPage
                });
            }
            return range;
        },
        isInFirstPage(){
            return this.currentPage === 1
        },
        isInLastPage(){
            return this.currentPage === this.totalPages
        },
        getCategories(){
            axios.get('https://logistique-backend.igp-ci.com/api/categories')
                 .then(resp =>{
                this.categories = resp.data
                })   
          },
},
watch:{
searchString(value){
    // console.log(value);
    return value;
},



},
created(){
   
},
mounted(){
 this.getCategories
//  console.log("DATA",this.listData);
 this.getProducts();
 


  }
}
</script>

<style scoped>

.orange{
color: orange;
}

.liste-categorie{
position: relative;

}
.bouton-categorie{
 position: relative;
 top:0;
 left:0;
 width:100%;
 height:100%;
 padding:1em;
}
.products-thumb{
padding:0 !important;
}
#Container{
padding-top:5em;
}
#search{
border: 0;
outline: none;
box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.37);
}
.active{
background: rgb(0, 137, 201) !important;
color:white;
}
.fs-5 button{
    border: thin solid black !important;
}
@media screen and (max-width:581px) {
    #search{
        width:100% !important;
    }
    
}

@media screen and (max-width:295px) {
  ::placeholder{
        font-size:.8em;
    }
    
}

</style>