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


    <div class="user-area ptb-100 ">
        <div class="container">
            <div class="user-item overflow-hidden">
                <form @submit.prevent="handleSubmit" v-if="connex" class="animate__animated animate__bounceInLeft">
                    <h2>CONNEXION</h2>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Entrez votre adresse e-mail" required v-model="email">
                    </div>
                    <div class="form-group input_pass">
                        <input type="password" class="form-control" id="pass" placeholder="Mot de passe" required v-model="password">
                        <i class="bi bi-eye" v-show="eye" @click="showPass"></i>
                         <i class="bi bi-eye-slash" v-show="eyes" @click="showPass"></i>
                    </div>
                    <button type="submit" class="btn common-btn">
                        Se connecter
                        <img src="assets/images/shape1.png" alt="Shape">
                        <img src="assets/images/shape2.png" alt="Shape">
                    </button>

                    <a>Avez-vous déja un compte? <router-link to="/register" class="fw-bold inscription">Inscription</router-link></a> <br>
                      <a href="#" @click.prevent="seeForm" class="fw-bold text-danger">Mot de passe oublié</a>
                      
                      <!-- <router-link to="/reset" class="float-end">Mot de passe Oublier?</router-link> -->
                    
                </form>
                <form v-if="reset"  @submit.prevent="passwordReset">
               <div v-if="showMsg" class="animate__animated animate__bounceInRight">
                <h2>Mot de passe oublier</h2>
                <div class="form-group">
                        <input type="email" class="form-control" placeholder="Entrez votre adresse e-mail" required v-model="email">
                    </div>
                     <button type="submit" class="btn common-btn">
                        Envoyer
                        <img src="assets/images/shape1.png" alt="Shape">
                        <img src="assets/images/shape2.png" alt="Shape">
                    </button>
                    <p>Déja un Compte? <a href="#" @click.prevent="seeForm" class="fw-bold inscription">Se connecter</a></p>
               </div>
               <div v-else class="animate__animated animate__bounceInLeft">
               <h1>Vérification de mot passe</h1>
               <hr>
                <p class="h5">
                Vérifiez si vous avez reçu un e-mail à l adresse suivante : {{this.email}}
                </p>
               </div>

                </form>
            </div>
        </div>
    </div>
     <div class="vld-parent">
                        <loading :active.sync="isLoading" 
                        :can-cancel="true" 
                        :is-full-page="FullPage" ></loading>
        </div>
</template>

<script>
import axios from 'axios'
import store from "../store";
export default {
   name:'Login',
   data(){
       return{
           email:'',
           password:'',
           reset:false,
           connex:true,
           eye:false,
           eyes:true,
           showMsg:true,
           isLoading: false,
             fullPage: true,
             user:store.state.user,
       }
   },
   methods:{
        //    getActivateAccount(){
        //  axios.get('https://igp-auth.lce-ci.com/api/auth/activateAccount/'+ this.$route.params.email+'/'+this.$route.params.token)
        //       .then(resp =>{
        //           console.log("ACTIVATE",resp);
        //           if(resp.data.state === true){
        //                 if(this.user.email_verified_at !== null){
        //               Swal.fire({
        //                       position: 'top-end',
        //                     icon: 'success',
        //                      title: 'Le compte à été activée',
        //                    showConfirmButton: false,
        //                    timer: 2000
        //                        })
        //                 }else{
        //                     Swal.fire({
        //                       position: 'top-end',
        //                     icon: 'success',
        //                      title: 'Le compte n\' pas à été activée',
        //                    showConfirmButton: false,
        //                    timer: 2000
        //                        })
        //                 }
                     
                      
        //                 //  this.$router.push('/login')
        //           }
        //         //    this.$router.push('/login')
        //       })
    // },
      showPass(){
          let pass = document.getElementById("pass");
          if(pass.type == "password"){
              this.eyes = !this.eyes;
                this.eye = !this.eye;
              pass.type ="text"
          }else{
              pass.type="password"
              this.eye = !this.eye;
              this.eyes = !this.eyes;
          }
               
       },
       handleSubmit(){
        axios.post('https://igp-auth.lce-ci.com/api/auth/login',{
              email:this.email,
              password:this.password,
          })
          .then(reponse => {
              
                  if(reponse.data.access_token){
                         localStorage.setItem('user', JSON.stringify(reponse.data.user))
                         localStorage.setItem('token',reponse.data.access_token);
                             Swal.fire({
                              position: 'center',
                             icon: 'success',
                              title: 'connexion réussie',
                              showConfirmButton: false,
                              timer: 1500,
                                });
                        // console.log("ROUTE",this.$route.query.redirect);
                    window.location.href=this.$route.query.redirect || '/'
                   
                  }else{
                      Swal.fire({
                              position: 'center',
                             icon: 'error',
                            //   title: 'code',
                              showConfirmButton: false,
                              timer: 1500,
                                });
                  }
          })
          .catch(error => {
              if(error){
                        Swal.fire({
                    position: 'center',
                    icon: 'error',
                     title: 'l\'adresse email ou mot de passe est incorrecte!',
                    showConfirmButton: false,
                    timer: 1500,})
                                         }
          })
       },
      seeForm(){
            this.reset = !this.reset
            this.connex = !this.connex

       },
       passwordReset(){
        //    console.log("URL",this.url);
        //     console.log("EMAIL",this.email);
           axios.post('https://igp-auth.lce-ci.com/api/auth/sendPasswordResetEmail',{
               email:this.email,
               url:location.protocol+"//"+location.host+"/",
           })
           .then(res => {
            //    console.log("URL",this.url);
            
            //    console.log("EMAILREPONSE",res.data);
                // Swal.fire({
                //        position: 'center',
                //        icon: 'success',
                //        title: 'verifier vos mail',
                //        showConfirmButton: false,
                //        timer: 1500
                // })
            if(res.data){
                 this.showMsg = false;
            }
           })
           .catch(error => {
            //    console.log(error);
            if (error) {
                 Swal.fire({
                       position: 'center',
                       icon: 'error',
                       title: 'L\' adresse e-mail n\'existe pas',
                       showConfirmButton: false,
                       timer: 1500
                })
            }
              

           })
       },
       
   },
   created(){
        //  this.getActivateAccount();
        //  console.log("USER",this.user);
   }
  
}
</script>

<style scoped>
.inscription{

 color: #435d96 !important;
 }
 .input_pass{
   position:relative;
 }
 .bi-eye,.bi-eye-slash{
 position:absolute;
 right:0;
 top:0;
 font-size: 2em;
 }
</style>