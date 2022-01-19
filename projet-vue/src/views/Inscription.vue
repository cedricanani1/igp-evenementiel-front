<template>
      <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Inscription</h2>
                        <ul>
                            <li>
                                <router-link to="/">Accueil</router-link>
                            </li>
                            <li>
                                <span>inscription</span>
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
                    <h2>Inscription</h2>
                    <div class="form-group">
                        <input v-model="nom" type="text" class="form-control" placeholder="Nom"  >
                    </div>
                    <div class="form-group">
                        <input v-model="prenoms" type="text" class="form-control" placeholder="Prenom" >
                    </div>
                    <div class="form-group">
                        <input v-model="email" type="email" class="form-control" placeholder="votre meilleur addresse email" >
                    </div>
                    <div class="form-group">
                        <input v-model="phone" type="tel" id="phone"  class="form-control" placeholder="phone" >
                    </div>
                    <div class="form-group">
                        <input v-model="password" type="password" class="form-control" placeholder="Mot de passe" >
                    </div>
                      <div class="form-group">
                        <input v-model="password_confirmation" type="password" class="form-control" placeholder="confirmation mot de passe" >
                    </div>
                    <button type="submit" class="btn common-btn">
                        Inscription
                        <img src="/assets/images/shape1.png" alt="Shape">
                        <img src="/assets/images/shape2.png" alt="Shape">
                    </button>
                    <h4>Or</h4>
                    <ul>
                        <li>
                            <a href="#">
                                <i class='bx bxl-facebook'></i>
                                se connecter avec Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxl-google'></i>
                                se connecter avec Google
                            </a>
                        </li>
                    </ul>
                    <h5>Déja un Compte? <router-link to="/login">Se connecter</router-link></h5>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import VueSweetalert2 from 'vue-sweetalert2'
import axios from "axios"
export default {
    name:'Inscrisption',
    data(){
        return{
            text:"",
            error:false,
            show:"",
            nom:"",
            prenoms:"",
            phone:"",
            email:"",
            password:"",
           password_confirmation:"",
           isSuccess:false,
        }
    },
    methods:{
        createAccount(){
if(this.email !== "" && this.password !=="" && this.password_confirmation !=="" && this.prenoms !=="" && this.nom !=="" && this.phone !==""){
     this.isSuccess = false

    if(this.password !==  this.password_confirmation){
      this.isSuccess = true
    } else{
      axios.post('https://igp-auth.lce-ci.com/api/auth/signup',{
                nom:this.nom,
               prenoms:this.prenoms,
               email:this.email,
              phone:this.phone,
               password:this.password,
               password_confirmation:this.password_confirmation
           })
            .then(
             reponse =>{
                 Swal.fire({
            position: 'center',
               icon: 'success',
               title: 'votre inscription a été validée',
              showConfirmButton: false,
              timer: 2000,
                  })
                console.log(reponse)
             this.$router.push('/login');
            })
    }

  

} else{
    Swal.fire({

              position: 'center',
               icon: 'error',
               title: 'Remplissez tous les champs du formulaire',
              showConfirmButton: false,
              timer: 1500,
     })
}
       
    
       },
         
     }
}
</script>