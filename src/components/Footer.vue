<template>
    <footer class="footer-area">
        <div class="footer-widget-area">
            <div class="container container-wide">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="widget-item">
                            <div class="about-widget">
                                <h4>do you have any questions?</h4>
                                <h4>do not wait, <span>let's talk</span></h4>
                                <div class="row pt-3">
                                    <div class="col-sm-12 col-lg-4">
                                        <i class="fa fa-phone"></i> 0813-8243-9171
                                    </div>
                                    <div class="col-sm-12 col-lg-5">
                                        <i class="fa fa-envelope"></i> example@example.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-lg-3">
                        <div class="widget-item">
                            <h4 class="widget-title">Head Office</h4>
                            <div class="widget-body">
                                <ul class="office">
                                    <li>Jakarta</li>
                                    <li>Bandung</li>
                                    <li>Kalimantan</li>
                                    <li>Semarang</li>
                                    <li>Surabaya</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-lg-3">
                        <div class="widget-item">
                            <h4 class="widget-title">Quick Links</h4>
                            <div class="widget-body">
                                <ul class="footer-menu">
                                    <li><router-link tag="a" to="/">Home</router-link></li>
                                    <li><router-link tag="a" to="/product">Product</router-link></li>
                                    <li><router-link tag="a" to="/about">About</router-link></li>
                                    <li><router-link tag="a" to="/faq">Faq</router-link></li>
                                    <li><router-link tag="a" to="/findus">Find Us</router-link></li>
                                    <li><router-link tag="a" to="/gallery">Gallery</router-link></li>
                                    <li><router-link tag="a" to="/contact">Contact</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="copyright-content">
                            <p>Copyright © 2019 <a href="https://ideapa.id">ideapa.id</a>  All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 text-center">
                        <img src="/uploads/logo.png" width="50%">
                    </div>
                    <div class="col-lg-4">
                        Social Media 
                        <ul class="social-media">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    a {
        color: white;
    }
    a:hover {
        color: #2fb23b !important;
    }

    .about-widget h4{
        text-transform: uppercase;
    }

    .about-widget h4 span {
        color: #2fb23b;
    }

    i.fa {
        color: #2fb23b;
    }

    .pt-3 {
        padding-top: 3%;
    }

    .office li {
        text-transform: uppercase;
        padding-top: 1%;
    }

    .footer-menu li a {
        text-decoration: underline;
    }

    .social-media {
        display: inline-flex;
    }

    .social-media li {
        margin-left: 80%;
        font-size: 20px;
    }

    .social-media li i.fa {
        color:white;
    }

    .social-media li i.fa:hover {
        color:#2fb23b;
    }
</style>