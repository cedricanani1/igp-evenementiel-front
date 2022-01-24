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
                    <form id="contactForm">
                        <div class="row">
                            <div class="col-6 col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="name" id="name" class="form-control" placeholder="Name"
                                        required data-error="Please enter your name">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-6 col-lg-6">
                                <div class="form-group">
                                    <input type="email" name="email" id="email" class="form-control" placeholder="Email"
                                        required data-error="Please enter your email">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-6 col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="phone_number" id="phone_number" placeholder="Phone"
                                        required data-error="Please enter your number" class="form-control">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-6 col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="msg_subject" id="msg_subject" class="form-control"
                                        placeholder="Subject" required data-error="Please enter your subject">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <textarea name="message" class="form-control" id="message" cols="30" rows="8"
                                        placeholder="Write message" required data-error="Write your message"></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
                                        <label class="form-check-label" for="flexCheckDefault3">
                                            I accept all <a href="terms-conditions.html">Terms & Conditions</a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="text-center">
                                    <button type="submit" class="btn common-btn">
                                        Send Message
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
                        <ul class="info">
                            <li>
                                <i class="flaticon-pin"></i>
                                <a href="#">2750 Quadra Street, Victoria, Canada</a>
                                <a href="#">345-659 Birmingham Street, England</a>
                            </li>
                            <li>
                                <i class="flaticon-phone-call"></i>
                                <a href="tel:+9908314326">+990-831-4326</a>
                                <a href="tel:+5465486325">+546-548-6325</a>
                            </li>
                            <li>
                                <i class="flaticon-email"></i>
                                <a
                                    href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#a2cac7cececde2c7c1cdd28cc1cdcf"><span
                                        class="__cf_email__"
                                        data-cfemail="09616c656566496c6a6679276a6664">[email&#160;protected]</span></a>
                                <a
                                    href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#fe97909891be9b9d918ed09d9193"><span
                                        class="__cf_email__"
                                        data-cfemail="660f08000926030509164805090b">[email&#160;protected]</span></a>
                            </li>
                        </ul>
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
        </div>
    </div>
</template>
<script>
export default {
   name:"Contacts",
}
</script>