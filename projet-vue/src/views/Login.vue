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
                    <h2>CONNEXION</h2>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Votre meilleur addresse email" required v-model="email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Mot de passe" required v-model="password">
                        <!-- <i class="bi bi-eye"></i> -->
                    </div>
                    <button type="submit" class="btn common-btn">
                        Se connecter
                        <img src="assets/images/shape1.png" alt="Shape">
                        <img src="assets/images/shape2.png" alt="Shape">
                    </button>

                    <a>Avez-vous déja un compte? <router-link to="/register">Inscription</router-link></a>
                      <!-- <router-link to="/reset" class="float-end">Mot de passe Oublier?</router-link> -->
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   name:'Login',
   data(){
       return{
           email:'',
           password:'',
       }
   },
   methods:{
       handleSubmit(){
          
        axios.post('https://igp-auth.lce-ci.com/api/auth/login',{
              email:this.email,
              password:this.password,
          })
          .then(reponse => {
            //   if(reponse.status === 200){
                   console.log(reponse.data.access_token)
                 console.log(reponse.status)
                    localStorage.setItem('token',reponse.data.access_token);
                       localStorage.setItem('user', JSON.stringify(reponse.data.user))
                    window.location.href = '/'
          this.$store.state.infoCommande
          })
          .catch(error => {
              if(error){
                        Swal.fire({
                    position: 'center',
                    icon: 'error',
                     title: 'l\'adresse email ou mot de passe est incorrecte!',
                    showConfirmButton: false,
                    timer: 1500})
                                         }
          })
       },
    //    seePassword(){
    //           let password = this.password;

    //    },
   },
   mounted(){
         console.log(localStorage.getItem('token'))
   }
  
}
</script>