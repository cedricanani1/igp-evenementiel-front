<template>
  <ul>
    <li>
  <button >
   prev 
  </button>
  </li>
  <li>
  <button >
   {{pageNumber}}  
  </button>
  </li>
   <li>
  <button >
   next 
  </button>
  </li>
  </ul>
    <!-- <ul>
     <li>
      <button @click="onClickFirstPage" :disabled="isInFirstPage">
       <i class="fas fa-chevron-left"></i>
      </button>
     </li>

      <li v-for="(page,index) in pages" :key="index">
      <button @click="onClickPage(page.number)" :disabled="isInFirstPage" :class="{active:isPageActive(page.number)}">
       <i class="fas fa-chevron-left"></i>
      </button>
     </li>

      <li>
      <button @click="onClickNextPage" :disabled="isInLastPage">
       <i class="fas fa-chevron-right"></i>
      </button>
     </li>
      <li>
      <button @click="onClickLastPage" :disabled="isInLastPage">
       <i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i>
      </button>
     </li>
    
    </ul> -->
 

</template>

<script>
export default {
    name:"Pagination",
    data(){
        return {
            pageNumber:1
        }
    },
    props:{
        listData:{
            type:Array,
            required:true
        },
        //c est meme chose que perPage
        size:{
            type:Number,
            required:false,
            default:10,
        },
        maxVisibleButtons:{
            type:Number,
            required:false,
            default:3
        },
        totalPages:{
            type:Number,
            required:true
        },
        total:{
            type:Number,
            required:true
        },
        perPage:{
            type:Number,
            required:true
        },
        pageActuelle:{
            type:Number,
            required:true
        },
        pagination:{
            type:String,
            required:true
        }

    },
    methods:{
        nextPage(){
            this.pageNumber++;
        },
        prevPage(){
            this.pageNumber--;
        },
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
        //    this.currentPage === page;
        // },
    },

    computed:{
        pageCount(){
            let ligne=this.listData.length,
                size = this.size;
            return Math.ceil(ligne/size);
        },
        paginatedData(){
            const start = this.pageNumber * this.perpage,
                  end = start + this.size;
         return this.listData.slice(start,end);
        },
        startPage(){
            if(this.currentPage === 1){
                return 1;
            }
            if(this.currentPage === this.totalPages){
                this.totalPages-this.maxVisibleButtons + (this.maxVisibleButtons-1);
                this.currentPage - 1;
            }
        },
        endPage(){
            return Math.min(this.startPage + this.maxVisibleButtons-1 , this.totalPages)
        },
        pages(){
            let range =[]
            for (let i = this.startPage; i <= this.endPage ; i++) {
                range.push({
                    number:i,
                    isDisabled: i === this.currentPage
                })
            }
        },
        isInFirstPage(){
            return this.currentPage === 1
        },
        isInLastPage(){
            return this.currentPage === this.totalPages
        },
    }

}
</script>
<style scoped>
ul{
    width:50%;
    margin: auto;
    text-align: center;
    list-style: none;
}
</style>