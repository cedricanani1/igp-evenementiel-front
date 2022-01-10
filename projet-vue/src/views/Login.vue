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
                <form>
                    <h2>CONNEXION</h2>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Votre meilleur addresse email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Mot de passe" required>
                    </div>
                    <button type="submit" class="btn common-btn">
                        Se connecter
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
                    <h5>Avez-vous déja un compte? <router-link to="/register">Inscription</router-link></h5>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name:'Login',
}
</script>