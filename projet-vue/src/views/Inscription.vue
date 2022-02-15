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
            <!-- <div class="alert alert-danger" v-if="isSuccess">
              Mot de passe incorrect
             </div> -->
                <form @submit.prevent.stop="createAccount">
                    <h2>Inscription</h2>
                    <div class="form-group">
                        <input v-model="nom" type="text" class="form-control" placeholder="Nom"  >
                    </div>
                    <div class="form-group">
                        <input v-model="prenoms" type="text" class="form-control" placeholder="Prénoms" >
                    </div>
                    <div class="form-group">
                        <input v-model="email" type="email" class="form-control" placeholder="Entrez votre adresse e-mail" >
                    </div>
                    <div class="form-group">
                        <input v-model="phone" type="tel" id="phone"  class="form-control" placeholder="Téléphone" >
                    </div>
                    <div class="form-group">
                        <input v-model="ville" type="text" id="ville"  class="form-control" placeholder="Ville" >
                    </div>
                    <span class="text-danger fw-bold">* Le mot de passe doit comporter au moins 6 caractères </span>
                    <div class="form-group input_pass mt-2">
                        <input v-model="password" type="password" id="pass" class="form-control" placeholder="Mot de passe" >
                        <i class="bi bi-eye" v-show="eye" @click="showPass"></i>
                        <i class="bi bi-eye-slash" v-show="eyes" @click="showPass"></i>
                    </div>
                      <div class="form-group input_pass">
                        <input v-model="password_confirmation" type="password" id="cpass" class="form-control" placeholder="Confirmation mot de passe" >
                        <i class="bi bi-eye" v-show="confirneye" @click="showConfirmationPass"></i>
                        <i class="bi bi-eye-slash" v-show="confirneyes" @click="showConfirmationPass"></i>
                    </div>
                    <button type="submit" class="btn common-btn">
                        Inscription
                        <img src="/assets/images/shape1.png" alt="Shape">
                        <img src="/assets/images/shape2.png" alt="Shape">
                    </button>
                    <h5 >Déja un Compte? <router-link to="/login" class="connect">Se connecter</router-link></h5>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
// import VueSweetalert2 from 'vue-sweetalert2'
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
            ville:"",
           password_confirmation:"",
           isSuccess:false,
           eye:false,
           eyes:true,
           confirneye:false,
           confirneyes:true,
        }
    },
    methods:{
          showConfirmationPass(){
          let pass = document.getElementById("cpass");
          if(pass.type == "password"){
              this.confirneyes = !this.confirneyes;
                this.confirneye= !this.confirneye;
              pass.type ="text"
          }else{
              pass.type="password"
               this.confirneyes = !this.confirneyes;
                this.confirneye= !this.confirneye;
          }
               
       },
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
        createAccount(){

if(this.email !== "" && this.password !=="" && this.password_confirmation !=="" && this.prenoms !=="" && this.nom !=="" && this.phone !=="" && this.ville !==""){
    

    if(this.password !== this.password_confirmation){
    //   this.isSuccess = true
     Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Mot de passe incorrect',
                  showConfirmButton: false,
                  timer: 1500,
                  })
    } else{
      axios.post('https://igp-auth.lce-ci.com/api/auth/signup',{
                nom:this.nom,
               prenoms:this.prenoms,
               email:this.email,
              phone:this.phone,
              ville:this.ville,
               password:this.password,
               password_confirmation:this.password_confirmation,
               url:'http://192.168.1.5:8081/',
               module:"Evenementiel"
           })
            .then(
             reponse =>{
                //  console.log("EMAIL",(reponse.data.message.email).toString());
                
                //  if(localStorage.getItem('mycart')){
                //       Swal.fire({
                //   position: 'center',
                //   icon: 'success',
                //   title: 'verifier votre boite mail',
                //   showConfirmButton: false,
                //   timer: 1500,
                //   })
                //    console.log(reponse)
                //    this.$router.push('/commander')
                //     //  window.location.href='/commander'
                //  }
                //  if(reponse){
                //      Swal.fire({
                //   position: 'center',
                //   icon: 'success',
                //   title: 'verifier vos mail pour activer le compte',
                //   showConfirmButton: false,
                //   timer: 1500,
                //   })
                // console.log(reponse)
                // this.$router.push('/login');
                //  }
                //  if((reponse.data.message.email).toString() === 'The email has already been taken.'){
                //      Swal.fire({

                //       position: 'center',
                //       icon: 'error',
                //       title: 'Email existe deja',
                //       showConfirmButton: false,
                //       timer: 1500,
                //                   })
                //    this.$router.push('/register');

                //  }else{
                      Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Veuillez verifiez votre boite mail!',
                  showConfirmButton: true,
                  timer: 3000,
                  })
                  this.$router.push('/login');
                //  }
                 
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
         
     },
}
</script>

<style scoped>
 .input_pass{
   position:relative;
 }
 .bi-eye,.bi-eye-slash{
 position:absolute;
 right:0;
 top:0;
 font-size: 2em;
 }
.connect{
 color: #435d96 !important;
 border: none !important;
}
span.text-danger{
    font-size: .8em;
}
</style>