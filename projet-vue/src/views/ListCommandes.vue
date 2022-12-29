<template>
    
    <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Liste des commandes</h2>
                        <ul>
                            <li>
                                <router-link to="/">Accueil</router-link>
                            </li>
                            <li>
                                <span>Listes des commandes</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="title-img">
            <img src="/assets/images/page-title1.jpg" alt="About">
            <img src="/assets/images/shape16.png" alt="Shape">
            <img src="/assets/images/shape17.png" alt="Shape">
            <img src="/assets/images/shape18.png" alt="Shape">
        </div>
    </div>
    <h1 v-if="!listCommandes.length" class="text-center p-5">Pas encore de commandes!</h1>
<div class="card w-50 mx-auto mt-3" v-for="(command,index) in  paginatedData" :key="index">
  <div class="card-body">
    <span class="card-title d-block">commande n<sup>o</sup><b>{{command.order_number}}</b> </span>
    <span class="card-text d-block">Article <i>{{command.id}}</i></span>
      <span class="card-text d-block">Status : <b>{{(command.payment_status === 'unpaid') ? 'non payeé': 'payeé'}}</b></span>
    <span class="d-block">commander le : <b>{{new Date(command.created_at).toLocaleDateString("fr")}}</b> </span>
    <router-link :to="{name:'detailcommande', params:{id:command.id}}" class="btn btn-primary float-end">VOIR PLUS</router-link>
    
  </div>
</div>
      <div>
                <ul class="pagination justify-content-center mt-3" v-if="this.listCommandes.length > 5 || currentPage > 1">
                       <li  >
                      <button class="border-1 fs-5 mx-2"  @click="onClickFirstPage" :disabled="isInFirstPage" >
                     Précedent
                    </button>
                    </li>
                         
               
                 <li  >
                 <button class="border-1 fs-5 mx-2"   @click="onClickNextPage" :disabled="isInLastPage">
                 Suivant
                 </button>
                 </li>
                 </ul>
            </div>

             <div class="vld-parent">
                        <loading :active.sync="isLoading" 
                        :can-cancel="true" 
                        :is-full-page="FullPage" ></loading>
        </div>
    
</template>

<script>
import axios from 'axios'
// import '../components/axios.js'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// import store from 'store'
export default {
   name:'ListCommandes',
   components:{
       Loading,
   },
   data(){
       return{
           listCommandes:[],
           total:"",
           perPage:3,
        //    totalPages:"",
           maxVisibleButtons:3,
           currentPage:1,
           isLoading: false,
           fullPage: true,
        //    totalPages:"Math.ceil(this.total/1)",
       }
   },
   methods:{
       getDetailsCommandes(){ 
        this.isLoading =true;
        axios.get("https://logistique-backend.igp-ci.com/api/orders-client")
             .then(rep=>{
                //  console.log("ListCommand:",rep.data)
                 this.listCommandes = rep.data
                 this.total = rep.data.length
                //  console.log("TOTAL",this.total);
                  this.isLoading =false;
             })
       },
       onPageChange(page){
           return this.currentPage = page;
       },
       onClickFirstPage(){
            if(this.currentPage>1)this.currentPage--;
        },
         onClickPreviousPage(){
             this.onPageChange(this.currentPage-1)
        },
         onClickPage(page){
               this.onPageChange(page)
        },
         onClickNextPage(){
             if((this.currentPage*this.perPage)<this.listCommandes.length) this.currentPage++;
        },
         onClickLastPage(){
              this.onPageChange(this.totalPages)
        },
         isPageActive(page){
           return this.currentPage = page;
        },
   },
   computed: {
        startPage(){
            if(this.currentPage === 1)return 1
            if(this.currentPage === this.totalPages) return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons-1)
             return  this.currentPage - 1;
        },
        endPage(){
            return Math.min(this.startPage + this.maxVisibleButtons-1 , this.totalPages)
        },
        pages(){
            let range =[];
            for (let i = this.startPage; i <= this.endPage ; i++) {
                range.push({ 
                  number:i, 
                  isDisabled: i === this.currentPage
                });
            }
            return range;
        },
        isInFirstPage(){

            return this.currentPage === 1;
        },
        isInLastPage(){
            return this.currentPage === Math.ceil(this.listCommandes.length/5)
        },
        // totalPages(){
        //     return Math.ceil(this.getDetailsCommandes().length/3);
        // }, 
        paginatedData(){
            let start = (this.currentPage * this.perPage) - this.perPage;
            let end = start + this.perPage;
         return this.listCommandes.slice(start,end);
        }
   },
//    created(){
//        this.totalPages;
       
//    },
   mounted(){
       this.getDetailsCommandes()
   }
}
</script>

<style scoped>
.box{
    width:300px;
    height:auto;
    margin:1em auto;
    background-color:rgb(235, 233, 233);
    text-align:center;
    padding:1em;
}



</style>