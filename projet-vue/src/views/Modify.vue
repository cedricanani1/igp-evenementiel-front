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
            <img src="/assets/images/page-title1.jpg" alt="About">
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
                <form @submit.prevent.stop="createAccount">
                    <h2></h2>
                    <div class="form-group">
                        <input v-model="userCompte.nom" type="text" class="form-control" placeholder="Nom"  >
                    </div>
                    <div class="form-group">
                        <input v-model="userCompte.prenoms" type="text" class="form-control" placeholder="Prenom" >
                    </div>
                    <div class="form-group">
                        <input v-model="userCompte.email" type="email" class="form-control" placeholder="votre meilleur addresse email" >
                    </div>
                    <div class="form-group">
                        <input v-model="userCompte.phone" type="tel" id="phone"  class="form-control" placeholder="phone" >
                    </div>
                    <div class="form-group">
                        <input v-model="userCompte.password" type="password" class="form-control" placeholder="Mot de passe" >
                    </div>
                      <div class="form-group">
                        <input v-model="userCompte.password_confirmation" type="password" class="form-control" placeholder="confirmation mot de passe" >
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
            },
          user:JSON.parse(localStorage.getItem("user")),
          
        //    isSuccess:false,
        }
    },
    methods:{
        
  
        modifierData(){
            if(this.userCompte.password === this.userCompte.password_confirmation){
                    this.userCompte.nom = this.user.nom
                   this.userCompte.prenoms = this.user.prenoms
                   this.userCompte.phone = this.user.phone
                this.userCompte.email = this.user.email
                 this.userCompte.password = this.user.password
                 this.password_confirmation=this.user.password_confirmation
                 localStorage.setItem('user',JSON.stringify(this.user))
                   axios.post('http://192.168.1.11:8004/api/auth/modify-account', this.userCompte)
                         .then( rep  => {
                                Swal.fire({
                          position: 'center',
                          icon: 'success',
                           title: 'Modification réussie',
                          showConfirmButton: false,
                          timer: 2000,
                       })
                             console.log(rep)
                             window.location.href='/'
                          } )
                          .catch(err => {
                                    Swal.fire({
                           position: 'center',
                              icon: 'error',
                              title: 'Echec de modification. Veuillez ressayer',
                         showConfirmButton: false,
                             timer: 1500,
                       })
                          })

            }

          
               
         },

         
     },
    mounted(){
        this.userCompte.nom = this.user.nom
        this.userCompte.prenoms = this.user.prenoms
        this.userCompte.phone = this.user.phone
        this.userCompte.email = this.user.email
        this.userCompte.password = this.user.password
        this.password_confirmation=this.user.password_confirmation
    }
}
</script>