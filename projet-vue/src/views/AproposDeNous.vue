<template>
 <!-- <PageLoader /> -->
 <!-- <div class="page-loader" v-if="!isLoaded">
<div class="cube"></div>
<div class="cube"></div>
<div class="cube"></div>
<div class="cube"></div>
</div> -->
     <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>A propos de Nous</h2>
                        <ul>
                            <li>
                                <router-link to="/">Accueil</router-link>
                            </li>
                            <li>
                                <span>A propos Nous</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="title-img">
            <img class="w-25 img-fluid"  src="/assets/images/HTB19FgtbEKF3KVjSZFE760ExFXaW.png_350x350.jpg" alt="About">
            <img src="/assets/images/shape16.png" alt="Shape">
            <img src="/assets/images/shape17.png" alt="Shape">
            <img src="/assets/images/shape18.png" alt="Shape">
        </div>
    </div>


    <section class="about-area pt-100 pb-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-content">
                        <div class="top">
                            <h2>A propos de Nous</h2>
                            <p>IVOIRE GOODIES PERFORMANCES</p>
                            <p>Ivoire Goodies Performances (IGP) est une entreprise spécialisée dans le Marketing Opérationnel, la Régie Publicitaire, Affichage Publicitaire Indoor & Outdoor, le Placement de Personnel Temporaire, la Confection de Gadgets d’entreprise et l’Evénementiel. IGP, c’est plus de 100 projets réalisés sur tout le territoire. Notre groupe est en pleine expansion avec à ce jour, 4 agences sur le territoire ivoirien. En effet, dans l’optique de se rapprocher de nos partenaires… Nous sommes présents à ABIDJAN, BOUAKE, KORHOGO & DIVO.</p>
                        </div>
                        <div class="middle">
                            <ul>
                                <li>
                                    <img src="/assets/images/about-icon1.png" alt="Icon">
                                    <h3>25 ans d experience</h3>
                                </li>
                                <li>
                                    <img src="/assets/images/about-icon2.png" alt="Icon">
                                    <h3>Marque de confiance dans la ville</h3>
                                </li>
                                <li>
                                    <img src="/assets/images/about-icon4.png" alt="Icon">
                                    <h3>Meilleur qualité</h3>
                                </li>
                            </ul>
                            <p>CHEZ IVOIRE GOODIES PERFORMANCES, VOUS ETES PLUS QU’UN CLIENT… UN VERITABLE PARTENAIRE</p>
                            <!-- <a class="common-btn" href="shop.html">
                                Commander Maintenant
                                <img src="/assets/images/shape1.png" alt="Shape">
                                <img src="/assets/images/shape2.png" alt="Shape">
                            </a> -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-img">
                        <img src="/assets/images/1191980.jpg" alt="About">
                        <img src="/assets/images/88553620-table-setting-with-plates-knife-fork-and-spoon-restaurant-interior.webp" alt="About">
                        <img src="/assets/images/photoIcone-1.jpg" alt="About">
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div class="buy-area">
        <div class="buy-shape">
            <img src="/assets/images/shape3.png" alt="Shape">
        </div>
        <div class="container-fluid p-0">
            <div class="row m-0 align-items-center">
                <div class="col-lg-6 p-0">
                    <div class="buy-img">
                        <img src="/assets/images/auna-pw-2222-pack-d-enceintes-sono-passives-mkii.jpg" alt="Buy">
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="buy-content ptb-100">
                        <h2>Reserver chez nous</h2>
                        <!-- <p>Canapé double en frêne confortable et doux</p> -->
                        <ul>
                            <li>160000 Fcfa</li>
                            <li>
                                <del>200000 Fcfa</del>
                            </li>
                        </ul>
                       <router-link class="common-btn" to="/produits">
                                    Commander Maintenant
                                    <img src="/assets/images/shape1.png" alt="Shape">
                                    <img src="/assets/images/shape2.png" alt="Shape">
                                </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="support-area pt-100 pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-6 col-lg-4">
                    <div class="support-item">
                      <i class="bi bi-truck"></i>
                        <h3>Livraison gratuite le lendemain</h3>
                        <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                        <img src="/assets/images/support-shape1.png" alt="Shape">
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="support-item">
                        <i class="bi bi-telephone-inbound"></i>
                        <h3>Assistance en ligne 24h/24 et 7j/7</h3>
                        <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                        <img src="/assets/images/support-shape1.png" alt="Shape">
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="support-item">
                       <i class="bi bi-gift"></i> 
                        <h3>Délivrons vos produits en toute sécurite</h3>
                        <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                        <img src="/assets/images/support-shape1.png" alt="Shape">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:'AproposDeNous',
    data(){
       return{
           

       }
   },
   mounted(){
   
   }
}
</script>
<style scoped>

.page-loader{
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top:0;
left:0;
width:100vw;
height:100vh;
background-color:rgba(0, 0, 0, 0.582); 
z-index:999;
    
 }
 .cube{
 width:40px;
 height:40px;
 margin-right:10px;
 background-color:rgb(46, 46, 141);

    
 }
 .cube:first-child{
       animation:left 1s infinite;
     }
.cube:last-child{
       animation:right 1s infinite .5s;
     }
 @keyframes left {
     40%{
     transform:translateX(-60px);
    }
      50%{
      transform:translateX(0);
     }
     
 }

  @keyframes right {
     40%{
         transform:translateX(60px);
         }
     50%{
    transform:translateX(0);
    }
     
 }



</style>