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
                                <span>se connecter</span>
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
<div class="card w-50 mx-auto mt-3" v-for="(command,index) in  paginatedData" :key="index">
  <div class="card-body">
    <span class="card-title d-block">commande n<sup>o</sup><b>{{command.order_number}}</b> </span>
    <span class="card-text d-block">Article <i>{{command.id}}</i></span>
      <span class="card-text d-block">Status : <b>{{command.payment_status}}</b></span>
    <span class="d-block">commander le : <b>{{new Date(command.created_at).toISOString().slice(0,10).split('-').reverse().join('/')}}</b> </span>
    <router-link :to="{name:'detailcommande', params:{id:command.id}}" class="btn btn-primary float-end">VOIR PLUS</router-link>
    
  </div>
</div>
      <div>
                <ul class="pagination" v-if="listCommandes.length > 5 || currentPage > 1">
                       <li>
                      <button @click="onClickFirstPage" :disabled="isInFirstPage" >
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
            </div>
    
</template>

<script>
import axios from 'axios'
import '../components/axios.js'
// import store from 'store'
export default {
   name:'ListCommandes',
   data(){
       return{
           listCommandes:[],
           total:"",
           perPage:3,
        //    totalPages:"",
           maxVisibleButtons:3,
           currentPage:1,
       }
   },
   methods:{
       getDetailsCommandes(){ 
        axios.get("api/orders-client")
             .then(rep=>{
                 console.log("ListCommand:",rep.data)
                 this.listCommandes = rep.data
                 this.total = rep.data.length
                //  this.totalPages = Math.ceil(this.total/this.perPage)
                 console.log("TOTAL",this.total);
             })
       },
       onClickFirstPage(){
         this.currentPage = 1;
         return this.currentPage;
        //    this.$emit('pageChanged',1)
        },
         onClickPreviousPage(){
             this.currentPage = this.currentPage-1;
             return this.currentPage;
        //    this.$emit('pageChanged', this.currentPage-1)
        },
         onClickPage(page){
             this.currentPage = page;
            return this.currentPage;
        //    this.$emit('pageChanged',page)
        },
         onClickNextPage(){
             this.currentPage = this.currentPage+1;
             return this.currentPage;
        //    this.$emit('pageChanged', this.currentPage + 1)
        },
         onClickLastPage(){
            this.currentPage = this.totalPages
             return this.currentPage;
        //    this.$emit('pageChanged', this.totalPages)
        },
         isPageActive(page){
           return this.currentPage = page;
        },
   },
   computed: {
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
            for (let i = this.startPage; i <= this.endPage ; i+= 1) {
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
        totalPages(){
            return Math.ceil(this.total/this.perPage);
        }, 
        paginatedData(){
            let start = (this.currentPage - 1) * this.perPage;
            let end = start + this.perPage;
         return this.listCommandes.slice(start,end);
        }
   },
   mounted(){
       this.getDetailsCommandes()
       console.log("TOTAPAGES", this.totalPages);
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