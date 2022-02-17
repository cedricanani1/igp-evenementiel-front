<template>
      <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Compte</h2>
                        <ul>
                            <li>
                                <router-link to="/">Accueil</router-link>
                            </li>
                            <li>
                                <span>Compte</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="title-img">
            <img src="/assets/images/products43.png" alt="About">
            <img src="/assets/images/shape16.png" alt="Shape">
            <img src="/assets/images/shape17.png" alt="Shape">
            <img src="/assets/images/shape18.png" alt="Shape">
        </div>
    </div>


    <div class="user-area ptb-100">
        <div class="container">
        
            <div class="user-item">
            <div class="alert alert-danger" v-if="isSuccess">
              Mot de passe incorrect
             </div>
                <form @submit.prevent.stop="modifierData">
                    <h2></h2>
                    <div class="form-group">
                        <input v-model="userCompte.nom" type="text" class="form-control" placeholder="Nom"  >
                    </div>
                    <div class="form-group">
                        <input v-model="userCompte.prenoms" type="text" class="form-control" placeholder="Prenom" >
                    </div>
                    <div class="form-group">
                        <input v-model="userCompte.email" type="email" class="form-control" placeholder="Entrez votre adresse e-mail" >
                    </div>
                    <div class="form-group">
                        <input v-model="userCompte.phone" type="tel" id="phone"  class="form-control" placeholder="phone" >
                    </div>
                    <div class="form-group">
                        <input v-model="userCompte.password" type="password" class="form-control" placeholder="Mot de passe" required >
                    </div>
                      <div class="form-group">
                        <input v-model="userCompte.password_confirmation" type="password" class="form-control" placeholder="confirmation mot de passe" required>
                    </div>
                     <div class="form-group">
                        <input v-model="userCompte.newPassword" type="password" class="form-control" placeholder="nouveau mot de passe" required>
                    </div>
                    <button type="submit" class="btn common-btn">
                        Modifier votre compte
                        <img src="/assets/images/shape1.png" alt="Shape">
                        <img src="/assets/images/shape2.png" alt="Shape">
                    </button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import axios from "axios"
import store from "../store";
export default {
    name:'Modify',
    data(){
        return{
            // text:"",
            // error:false,
            // show:"",
            userCompte:{
             nom:"",
             prenoms:"",
             phone:"",
             email:"",
             password:"",
             password_confirmation:"",
             newPassword:"",
            },
          user:store.state.user,
          token:localStorage.getItem("token"),
          
        //    isSuccess:false,
        }
    },
    methods:{
        
  
        modifierData(){
            
            if(this.userCompte.password === this.userCompte.password_confirmation){
                const config = {
                    headers:{
                        'Authorization':'Bearer '+ localStorage.getItem('token'),
                    },
                };
                 this.user.nom = this.userCompte.nom 
                    this.user.prenoms = this.userCompte.prenoms
                    this.user.phone =  this.userCompte.phone
                 this.user.email = this.userCompte.email 
                 localStorage.setItem("user",JSON.stringify(this.user))
                   axios.post('https://igp-auth.lce-ci.com/api/auth/modify-account',this.userCompte,config)
                         .then( rep  => {
                            //  console.log(rep)
                             if(rep.data.status){
                                  Swal.fire({
                                        position: 'center',
                                            icon: 'success',
                                            title: 'modification effectuée',
                                        showConfirmButton: false,
                                            timer: 1500,
                                    })
                                    // this.$router.push('/modify')
                                window.location.href= '/modify'

                             }else{
                                 Swal.fire({
                                        position: 'center',
                                            icon: 'error',
                                            title: 'Modification Echouée',
                                        showConfirmButton: false,
                                            timer: 1500,
                                    })
                             }
                          } );

                
            } else {
                   Swal.fire({
                           position: 'center',
                              icon: 'error',
                              title: 'Mot de passe incorrect',
                         showConfirmButton: false,
                             timer: 1500,
                       })
            }    
         },

         
     },
    mounted(){
        this.userCompte.nom = this.user.nom
        this.userCompte.prenoms = this.user.prenoms
        this.userCompte.phone = this.user.phone
        this.userCompte.email = this.user.email
        // localStorage.getItem('token')
        // console.log(localStorage.getItem('token'))
        // console.log(this.user);
        //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
      
    }
}
</script>