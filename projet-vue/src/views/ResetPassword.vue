<template> 
    <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Réinitialiser le mot de passe</h2>
                        <ul>
                            <li>
                                <router-link to="/">Accueil</router-link>
                            </li>
                            <li>
                                <span>Réinitialiser le mot de passe</span>
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
                <form @submit.prevent="resetMyPassword">
                    <h2>Réinitialiser le mot de passe</h2>

                    <div class="form-group">
    
                    <label for="password">Mot de passe</label>
                        <input type="password" class="form-control" id="password" required v-model="password">
                        <!-- <i class="bi bi-eye"></i> -->
                    </div>
                     <span class="text-danger fw-bold" v-show="msgError">* Le mot de passe doit comporter au moins 6 caractères </span>
                    <div class="form-group">
                    <label for="confirmation">Confirmation mot de passe</label>
                        <input type="password" id="confirmation" class="form-control" required v-model="password_confirmation">
                        <!-- <i class="bi bi-eye"></i> -->
                    </div>
                    <button type="submit" class="btn common-btn">
                        Envoyer
                        <img src="/assets/images/shape1.png" alt="Shape">
                        <img src="/assets/images/shape2.png" alt="Shape">
                    </button>
                    <div>
                    <router-link to="/login" class="fw-bold text-danger">Mot de passe oublié</router-link>
                    </div>
                      
                      <!-- <router-link to="/reset" class="float-end">Mot de passe Oublier?</router-link> -->
                    
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import store from "../store"
import axios from "axios"
export default {
    name:'ResetPassword',
    data(){
        return {
          password:"",
          password_confirmation:"",
          msgError:false,
        }
    },
    methods: {
        resetMyPassword(){
            if(this.password == this.password_confirmation){

                if(this.password.length > 5 && this.password_confirmation.length > 5){

                     axios.post('https://igp-auth.lce-ci.com/api/auth/recoveryPassword/'+this.$route.params.email+'/'+this.$route.params.token,{
             password:this.password,
             password_confirmation:this.password_confirmation
            })
            .then(res =>{
                if(res){
                    Swal.fire({
                       position: 'center',
                       icon: 'success',
                       title: 'Mot de passe changer avec success',
                       showConfirmButton: false,
                       timer: 1500
                })
                this.$router.push('/login')
                }
                // console.log(res.data);
                
            })

                }else{
                      this.msgError=true;
                }
               
            }else{
                   Swal.fire({
                       position: 'center',
                       icon: 'error',
                       title: 'Mot de passe incorrect',
                       showConfirmButton: false,
                       timer: 1500
                })
                this.$router.push('/login')
            }
            

        },
        verificationToken(){      
           axios.get('https://igp-auth.lce-ci.com/api/auth/verifToken/'+this.$route.params.email+'/'+this.$route.params.token)
             .then(res => {
                 if(res.data.state === false){
                // console.log("VERIF",res.data.message);
                Swal.fire({
                       position: 'center',
                       icon: 'error',
                       title: 'lien expiré',
                       showConfirmButton: false,
                       timer: 5000,
                 })
                 }
                
             })
       }
        
    },
    mounted(){
        this.verificationToken();
    }
}
</script>
<style scoped>

</style>