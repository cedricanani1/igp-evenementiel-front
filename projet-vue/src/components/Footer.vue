<template>

      <footer class="footer-area pt-100 pb-70">
      <hr>
        <div class="footer-shape">
            <img src="/assets/images/footer-right-shape.png" alt="Shape">
            <img src="/assets/images/shape5.png" alt="Shape">
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-6 col-lg-4">
                    <div class="footer-item">
                        <div class="footer-logo">
                            <a class="logo" href="index.html">
                             <h1>IGP</h1>
                            </a>
                            <ul>
                                <li>
                                    <i class="flaticon-pin"></i>
                                    <span class="d-block my-1">Riviera BONOUMIN  <br> LAURIER 6 VILLA N 151-Cocody </span>
                                </li>
                                <li>
                                    <i class="flaticon-phone-call"></i>
                                    <a href="tel:2722499504">Tel : (+225) 27 22 49 95 04</a>
                                </li>
                                <li>
                                   <a class="d-block" href="mailto:info@igp.ci">mail : info@igp.ci</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="footer-item">
                        <div class="footer-services">
                            <h3>Services à la clientèle</h3>
                            <ul>
                                <li>
                                    <router-link to="/">Nous Contacter</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="footer-item">
                        <div class="footer-links">
                            <h3>Liens Importants</h3>
                            <div class="row">
                                <div class="col-6 col-sm-8 col-lg-8">
                                    <ul>
                                        <li>
                                            <router-link to="/about">A propos de Nous</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/">Commander</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/">Produits</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/">Se Connecter</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6 col-sm-4 col-lg-4">
                                    <ul>
                                        <li>
                                            <router-link to="/produits">Cameras</router-link>
                                        </li>
                                        <li>
                                           <router-link to="/produits">Laptops</router-link>
                                        </li>
                                        <li>
                                           <router-link to="/produits">Headphones</router-link>
                                        </li>
                                        <li>
                                           <router-link to="/produits">Smartwatch</router-link>
                                        </li>
                                        <li>
                                           <router-link to="/produits">Microphones</router-link>
                                        </li>
                                        <li>
                                           <router-link to="/produits">Computers</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-sm-6 col-lg-6">
                    <div class="payment-cards">
                        <ul>
                            <li>
                                <a href="#" target="_blank">
                                    <img src="/assets/images/payment1.png" alt="Payment">
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <img src="/assets/images/payment2.png" alt="Payment">
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <img src="/assets/images/payment3.png" alt="Payment">
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <img src="/assets/images/payment4.png" alt="Payment">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-6">
                    <div class="social-links">
                        <ul>
                            <li>
                                <a href="#" target="_blank">
                                    <i class='bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class='bx bxl-twitter'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class='bx bxl-linkedin'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class='bx bxl-skype'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class='bx bxl-youtube'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="copyright-area">
        <div class="container">
            <div class="copyright-item">
                <p>Copyright ©2021 Design & Developper par <a href="https:/hibootstrap.com/"
                        target="_blank">LCE(locomotive)</a></p>
            </div>
        </div>
    </div>
     <a href="#">
     <div class="go-top">
        <i class='bx bxs-up-arrow-circle'></i>
        <i class='bx bxs-up-arrow-circle'></i>
    </div>
    </a>
    
</template>


<script>
export default {
   name:'Footer',
}
</script>