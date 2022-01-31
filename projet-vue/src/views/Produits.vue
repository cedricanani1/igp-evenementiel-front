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
        <div class="container-fluid pe-5">
            <div class="row">
                <div class="col-lg-2">
                    <div class="sorting-menu">
                        <ul>
                            <li class="filter" v-for="(categorie,index) in categories" :key="index">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-square"></i>
                                    <span @click="buttonFilter">{{categorie.libelle}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-lg-9">
          <div>
                
                <input type="text" id="search" class="w-100 mb-3 p-3" placeholder="RECHERCHE UN PRODUIT" v-model="searchString">
          </div>
                    <div id="Container" class="row">
                       <div class="col-sm-6 col-lg-4"
                      v-for="(items,index) in paginatedData" 
                      :key="index"
                      >
                            <div class="products-item">
                                <div class="top">
                          <router-link 
                            :to="{name:'SingleProduct', params:{id:items.id}}" v-if="items.photo.length >0">
                            <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
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
                    <div>
                <ul class="pagination float-end" v-if="listData.length > 5 || currentPage > 1">
                       <li>
                      <button @click="onClickFirstPage" :disabled="isInFirstPage"  >
                      prev 
                    </button>
                    </li>
         

                    <li>
                <button v-for="(page,index) in pages" :key="index" @click="onClickPage(page.number)" 
                :class="{active:isPageActive(page.number)}"
                > {{page.number}}  
                </button>
                 </li>
                

                 <li>
                 <button @click="onClickNextPage" :disabled="isInLastPage" >
                  next 
                 </button>
                 </li>
                 </ul>
                 <!-- <div class="col-sm-6 col-lg-4"
                      v-for="(items,index) in filterList" 
                      :key="index"
                      >
                      <div class="products-item">
                                <div class="top">
                          <router-link 
                            :to="{name:'SingleProduct', params:{id:items.id}}" v-if="items.photo.length >0">
                            <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
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
                 </div> -->
                 <!-- {{filterList}} -->
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
export default {
    name:"Produits",
    props:['cart','add','listData','maxVisibleButtons','totalPages','total','currentPage','pageChanged','paginatedData'],
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
        }
    },
    components:{
        Home,
    },
    methods:{
        onClickFirstPage(){
           this.$emit('pageChanged',1)
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
  buttonFilter(e){
        let cible = e.currentTarget.innerText;
        console.log("ELE",cible);
        return this.paginatedData.filter(item=>{
            return item.type.libelle === cible
        })

        },
},
computed:{
    // filteredData:{
    //     get(){
    //           let start = (this.currentPage * this.perPage) - this.perPage;
    //         let end = start + this.perPage;
    //      return this.listData.slice(start,end);
    //     },
    //     set(term){
    //      this.listData.filter(item=>{
    //          return item.libelle.toLowerCase().includes(term.toLowerCase())})
     

    //     }
    //     //  this.listData.filter(item=>item.libelle.toLowerCase().includes(this.search.toLowerCase()))
        
                  
    //     //             let start = (this.currentPage * this.perPage) - this.perPage;
    //     //     let end = start + this.perPage;
    //     //  return this.listData.slice(start,end);
    // },
  paginatedData(){
      if(this.searchString !== ""){
        return this.listData.filter(item =>{
                  return item.libelle.toLowerCase().includes(this.searchString.toLowerCase())
              })
      }
    //   else if(this.listData){
    //       this.buttonFilter()
    //   }
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
            axios.get('https://igp-event-backend.lce-ci.com/api/categories')
                 .then(resp =>{
                this.categories = resp.data
                })   
          },
        //   filterList(){
        //     return this.listData.filter(item =>{
        //           return item.libelle.toLowerCase().includes(this.searchString.toLowerCase())
        //       })
        //   },
},
watch:{
searchString(value){
    console.log(value);
  console.log(this.filterList);
},



},
created(){
    

},
mounted(){
 this.getCategories

  }
}
</script>