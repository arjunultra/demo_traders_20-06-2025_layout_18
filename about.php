<?php $page = "about"; ?>
<!DOCTYPE html>
<html lang="en">

<head itemscope itemtype="http://www.schema.org/website">
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta property="og:title" content="">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="">
    <meta property="og:url" content="https://.com">
    <meta property="og:image" content="https://.com/images/android-icon-192x192.png">
    <meta name="keywords" content="">
    <meta property="og:description" name="description" content="">
    <meta name="robots" content="all">
    <meta name="revisit-after" content="10 Days">
    <meta name="copyright" content="">
    <meta name="language" content="English">
    <meta name="distribution" content="Global">
    <meta name="web_author" content="srisoftwarez.com">
    <meta name="msapplication-TileImage" content="images/ms-icon-144x144.png">
    <link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96x96.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png">
    <link rel="icon" sizes="192x192" href="images/android-icon-192x192.png">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/hover-min.css">
    <link rel="stylesheet" href="css/hover-min.css">
    <link rel="stylesheet" href="css/odometer-theme.css">
    <link rel="stylesheet" href="css/swiper.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

</head>

<body itemscope itemtype="http://schema.org/WebPage">
    <?php include_once "header.php"; ?>
    <section class="about-banner wow fadeInRight" wow-delay="5s">
        <img class="img-fluid w-100" src="images/about-banner.webp" alt="demo traders about banner"
            title="Demo Traders">
    </section>
    <!-- about intro -->
    <!-- Our Story Section -->
    <section class="about-biography">
        <div class="container">
            <div class="row align-items-center">
                <!-- Text Content -->
                <div class="col-12 col-md-6 col-lg-6 wow fadeInLeft">
                    <h1 class="about-biography-title">Our Fireworks Journey</h1>
                    <p class="about-biography-text">Founded in 2005, Demo Traders began as a small family-run
                        fireworks stand in the heart of the Sivakasi. What started as a passion project quickly grew
                        into
                        one of the region's most trusted fireworks suppliers.</p>
                    <p class="about-biography-text">Our founder, John Doe, brought decades of pyrotechnic experience
                        from around the world to create a company that values both spectacular displays and absolute
                        safety.</p>
                    <p class="about-biography-text">Today, we serve both retail customers and wholesale clients across
                        the state, providing premium fireworks for all occasions while maintaining our commitment to
                        quality and safety.</p>
                    <button class="btn about-biography-btn">Learn More About Safety</button>
                </div>

                <!-- Image -->
                <div class="col-12 col-md-6 col-lg-6 wow fadeInRight">
                    <div class="about-biography-img-container">
                        <img src="images/about-hero.webp" alt="PyroSpectacular founders"
                            class="img-fluid about-biography-img rounded">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- second section -->
    <section class="about-mission">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8 text-center wow fadeIn">
                    <h2 class="about-mission-title">Our Guiding Principles</h2>
                    <p class="about-mission-subtitle">What drives us to light up your celebrations</p>
                </div>
            </div>

            <div class="row mt-5">
                <!-- Value 1 -->
                <div class="col-12 col-md-4 col-lg-4 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="about-mission-card hvr-float">
                        <div class="about-mission-icon">
                            <i class="bi bi-shield-check"></i>
                        </div>
                        <h3 class="about-mission-card-title">Safety First</h3>
                        <p class="about-mission-card-text">We prioritize safety in every product we sell and educate our
                            customers on proper handling.</p>
                    </div>
                </div>

                <!-- Value 2 -->
                <div class="col-12 col-md-4 col-lg-4 mb-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="about-mission-card hvr-float">
                        <div class="about-mission-icon">
                            <i class="bi bi-stars"></i>
                        </div>
                        <h3 class="about-mission-card-title">Quality Explosions</h3>
                        <p class="about-mission-card-text">Only premium fireworks that deliver consistent, spectacular
                            performances.</p>
                    </div>
                </div>

                <!-- Value 3 -->
                <div class="col-12 col-md-4 col-lg-4 mb-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="about-mission-card hvr-float">
                        <div class="about-mission-icon">
                            <i class="bi bi-people"></i>
                        </div>
                        <h3 class="about-mission-card-title">Community Focus</h3>
                        <p class="about-mission-card-text">Supporting local events and charities through donations and
                            sponsorships.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="brand-swiper py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-5 wow fadeIn">
                    <h2 class="brand-swiper-title display-4">Trusted Partners</h2>
                    <p class="brand-swiper-subtitle lead">The industry's finest choose our fireworks</p>
                </div>
            </div>

            <div class="row">
                <div class="col-12 position-relative">
                    <!-- Custom Swiper Container -->
                    <div class="brand-swiper-container swiper-container">
                        <div class="swiper-wrapper">
                            <!-- 12 Brand Slides with Enhanced Content -->
                            <?php for ($i = 1; $i <= 12; $i++): ?>
                                <div class="swiper-slide brand-slide">
                                    <div class="brand-slide-inner hvr-grow-shadow">
                                        <div class="brand-logo-container">
                                            <img src="images/brand-<?= $i ?>.webp" alt="Brand <?= $i ?>"
                                                class="brand-logo img-fluid hvr-grayscale-to-color">
                                        </div>
                                        <div class="brand-overlay d-flex align-items-center justify-content-center">
                                            <span class="brand-name">Brand-<?= $i ?></span>
                                        </div>
                                    </div>
                                </div>
                            <?php endfor; ?>
                        </div>

                        <!-- Custom Pagination -->
                        <div class="brand-swiper-pagination swiper-pagination"></div>
                    </div>

                    <!-- Custom Navigation -->
                    <div class="brand-swiper-nav">
                        <div class="brand-swiper-button-prev swiper-button-prev hvr-sweep-to-right">
                            <i class="bi bi-chevron-left"></i>
                        </div>
                        <div class="brand-swiper-button-next swiper-button-next hvr-sweep-to-left">
                            <i class="bi bi-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about-process">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-5">
                    <h3 class="about-process-subheading">Our Craft</h3>
                    <h2 class="about-process-title">The Art of Pyrotechnics</h2>
                </div>
            </div>

            <div class="row align-items-center">
                <!-- Left Column - Process Steps -->
                <div class="col-12 col-md-6 col-lg-6">
                    <div class="about-process-steps">
                        <!-- Step 1 -->
                        <div class="about-process-step wow fadeInLeft" data-wow-delay="0.1s">
                            <div class="about-process-step-number">01</div>
                            <div class="about-process-step-content">
                                <h3 class="about-process-step-title">Design</h3>
                                <p class="about-process-step-text">Creating custom patterns and color combinations</p>
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div class="about-process-step wow fadeInLeft" data-wow-delay="0.2s">
                            <div class="about-process-step-number">02</div>
                            <div class="about-process-step-content">
                                <h3 class="about-process-step-title">Engineering</h3>
                                <p class="about-process-step-text">Precision timing and structural integrity</p>
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div class="about-process-step wow fadeInLeft" data-wow-delay="0.3s">
                            <div class="about-process-step-number">03</div>
                            <div class="about-process-step-content">
                                <h3 class="about-process-step-title">Testing</h3>
                                <p class="about-process-step-text">Rigorous quality and safety checks</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Visual Showcase -->
                <div class="col-12 col-md-6 col-lg-6">
                    <div class="about-process-visual wow fadeInRight">
                        <div class="about-process-visual-container">
                            <div class="about-process-visual-item active" data-step="1">
                                <img src="images/process-design.webp" alt="Firework Design Process" class="img-fluid">
                            </div>
                            <div class="about-process-visual-item" data-step="2">
                                <img src="images/process-engineering.webp" alt="Firework Engineering"
                                    class="img-fluid w-100">
                            </div>
                            <div class="about-process-visual-item" data-step="3">
                                <img src="images/process-testing.webp" alt="Firework Testing" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about-cta">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8 text-center">

                    <!-- Decorative Firework Icon -->
                    <div class="about-cta-icon mb-4">
                        <i class="bi bi-stars"></i>
                    </div>

                    <!-- Heading -->
                    <h2 class="about-cta-title mb-3">Let's Create Something Explosive</h2>

                    <!-- Subtext -->
                    <p class="about-cta-text mb-4">
                        Contact our pyrotechnic experts for custom firework displays tailored to your event
                    </p>

                    <!-- Action Buttons -->
                    <div class="about-cta-buttons">
                        <a href="tel:+1234567890" class="btn about-cta-btn about-cta-btn-primary mr-3">
                            <i class="bi bi-telephone-fill mr-2"></i> Call Now
                        </a>
                        <a href="mailto:contact@yourfireworks.com" class="btn about-cta-btn about-cta-btn-secondary">
                            <i class="bi bi-envelope-fill mr-2"></i> Email Us
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <?php include_once "footer.php"; ?>

    <script src="js/odometer.min.js"></script>
    <script src="js/swiper-bundle.min.js"></script>
    <script src="js/wow.js"></script>
    <script>
        new WOW().init();
    </script>
    <script src="js/script.js"></script>
</body>

</html>