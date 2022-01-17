<template>
    
    <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Se Connecter</h2>
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


    <div class="user-area ptb-100">
        <div class="container">
            <div class="user-item">
                <form @submit.prevent="handleSubmit">
                    <h2>Mot de passe oublié</h2>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Votre meilleur addresse email" v-model="email">
                    </div>
                    <button type="submit" class="btn common-btn">
                        Modifier
                        <img src="assets/images/shape1.png" alt="Shape">
                        <img src="assets/images/shape2.png" alt="Shape">
                    </button>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   name:'ListCommandes',
   data(){
       return{
           
       }
   },
   methods:{
 
   },
}
</script>