<template>
    <div>
        <div class="page-header-wrap bg-img bg-1">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="page-header-content">
                            <div class="page-header-content-inner">
                                <h1>Contact</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-content-wrapper sm-top">
            <div class="contact-page-content">
                <div class="contact-info-wrapper">
                    <div class="container">
                        <div class="row mtn-30">
                            <div class="col-sm-6 col-lg-6">
                                <div class="contact-info-item">
                                    <div class="con-info-icon">
                                        <i class="ion-ios-location-outline"></i>
                                    </div>
                                    <div class="con-info-txt">
                                        <h4>Lokasi Kami</h4>
                                        <p>Jl. contoh nama jalan, kota, provinsi</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-6">
                                <div class="contact-info-item">
                                    <div class="con-info-icon">
                                        <i class="ion-iphone"></i>
                                    </div>
                                    <div class="con-info-txt">
                                        <h4>Hubungi Kami</h4>
                                        <p>0813-8243-9171</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contact-form-wrapper sm-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="contact-form-content">
                                    <h2>Kontak Kami</h2>

                                    <div class="contact-form-wrap">
                                        <form action="#" method="post" id="contact-form">
                                            <div class="contact-form-inner">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="input-item">
                                                            <label class="sr-only" for="name">Nama</label>
                                                            <input type="text" name="nama" id="nama" placeholder="Name" required />
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="input-item">
                                                            <label class="sr-only" for="email">Email</label>
                                                            <input type="email" name="email" id="email" placeholder="Email" required />
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="input-item">
                                                            <label class="sr-only" for="subject">Subjek</label>
                                                            <input type="text" name="subjek" id="subjek" placeholder="Subjek" required />
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="input-item">
                                                            <label class="sr-only" for="message">Pesan</label>
                                                            <textarea name="pesan" id="pesan" cols="30" rows="8" placeholder="Tulis Pesan" required></textarea>
                                                        </div>
                                                    </div>

                                                    <div class="col-12" style="margin-bottom:20px;">
                                                        <div class="input-item">
                                                            <button class="btn btn-brand">Send a Message</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>
    .bg-1 {
        background-image : url('/uploads/building_shape.jpg');
    }
</style>