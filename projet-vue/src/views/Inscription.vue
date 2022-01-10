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
            <img src="assets/images/page-title1.jpg" alt="About">
            <img src="assets/images/shape16.png" alt="Shape">
            <img src="assets/images/shape17.png" alt="Shape">
            <img src="assets/images/shape18.png" alt="Shape">
        </div>
    </div>


    <div class="user-area ptb-100">
        <div class="container">
            <div class="user-item">
                <form @submit="verf">
                    <h2>Inscription</h2>
                    <div class="form-group">
                        <div v-if="error">
                               <span>veuillez renseignez ce champ</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Nom" required v-model="text">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Pseudo" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="votre meilleur addresse email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Mot de passe" required>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Confirmation Mot de passe" required>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" required>
                            <label class="form-check-label" for="flexCheckDefault4">
                                j accepte toutes les conditions <a href="terms-conditions.html">Terms & Conditions</a>
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="btn common-btn">
                        Inscription
                        <img src="assets/images/shape1.png" alt="Shape">
                        <img src="assets/images/shape2.png" alt="Shape">
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
export default {
    name:'Inscrisption',
    data(){
        return{
            text:"",
            error:false,
            show:"",
        }
    },
    methods:{
       
         
     }
}
</script>