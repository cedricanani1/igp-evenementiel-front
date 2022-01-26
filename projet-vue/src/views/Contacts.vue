<template>
    
    <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                              <router-link to="/">Accueil</router-link>
                            </li>
                            <li>
                                <span>Contact</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="title-img">
            <img src="/assets/images/page-title5.jpg" alt="About">
            <img src="/assets/images/shape16.png" alt="Shape">
            <img src="/assets/images/shape17.png" alt="Shape">
            <img src="/assets/images/shape18.png" alt="Shape">
        </div>
    </div>


    <div class="contact-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Restons en contact</h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-8">
                    <form id="contactForm" >
                        <div class="row">
                            <div class="col-6 col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="name" id="name" class="form-control" placeholder="Nom"
                                        required >
                                  
                                </div>
                            </div>
                            <div class="col-6 col-lg-6">
                                <div class="form-group">
                                    <input type="email" name="email" id="email" class="form-control" placeholder="Email"
                                        required >
                                  
                                </div>
                            </div>
                            <div class="col-6 col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="phone_number" id="phone_number" placeholder="Numéro de télephone"
                                        required  class="form-control">
                                  
                                </div>
                            </div>
                            <div class="col-6 col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="msg_subject" id="msg_subject" class="form-control"
                                        placeholder="Objet" required >
                                  
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <textarea name="message" class="form-control" id="message" cols="30" rows="8"
                                        placeholder="Message" required></textarea>
                                  
                                </div>
                            </div>
            
                            <div class="col-lg-12">
                                <div class="text-center">
                                    <button type="submit" class="btn common-btn">
                                        Envoyer
                                        <img src="/assets/images/shape1.png" alt="Shape">
                                        <img src="/assets/images/shape2.png" alt="Shape">
                                    </button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="contact-info">
                        <h3>Contact Information:</h3>
                       <ul class="list-info">
                                <li>
                                    <!-- <i class="flaticon-pin"></i> -->
                                    <span class="d-block my-1">Riviera BONOUMIN  <br> LAURIER 6 VILLA N 151-Cocody </span>
                                </li>
                                <li>
                                    <!-- <i class="flaticon-phone-call"></i> -->
                                    <a href="tel:2722499504"> <b>Tel : (+225) 27 22 49 95 04</b> </a>
                                </li>
                                <li>
                                   <a class="d-block" href="mailto:info@igp.ci">Email : info@igp.ci</a>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   name:"Contacts",
}
</script>
<style scoped>
.list-info{
  list-style-type: none;
 }
 .list-info li a{
 color:black;
 }
 .list-info li a:hover{
  color:orange;
 }
</style>