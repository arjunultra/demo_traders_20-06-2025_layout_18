<header class="fire-header-section">
    <!-- Top Contact Bar -->
    <section class="fire-header-topbar">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-md-4 col-lg-4 fire-header-contact">
                    <i class="bi bi-geo-alt"></i>
                    <span>Demo Traders, Demo Street, Demo Colony, Sivakasi - 626123</span>
                </div>
                <div class="col-12 col-md-4 col-lg-4 fire-header-contact">
                    <i class="bi bi-telephone"></i>
                    <span>HOTLINE: +91 99999 99999</span>
                </div>
                <div class="col-12 col-md-4 col-lg-4 fire-header-contact">
                    <i class="bi bi-people"></i>
                    <span>WHOLESALE INQUIRIES</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Navigation with Star Effects -->
    <nav class="fire-header-nav navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand fire-header-brand" href="index.php">
                <div class="fire-header-logo-wrapper">
                    <img src="images/logo.png" alt="Demo Traders" class="fire-header-logo">
                    <div class="fire-header-logo-sparkle"></div>
                </div>
            </a>

            <button class="navbar-toggler fire-header-toggler" type="button" data-toggle="collapse"
                data-target="#fireHeaderNav">
                <i class="bi bi-list text-white border border-white p-2"></i>
            </button>

            <div class="collapse navbar-collapse" id="fireHeaderNav">
                <ul class="navbar-nav mx-auto fire-header-nav-list">
                    <li class="nav-item fire-header-nav-item">
                        <a class="nav-link <?php if ($page == 'home')
                            echo 'active'; ?>" href="index.php">
                            <span>Home</span>
                            <div class="fire-header-nav-sparkle"></div>
                        </a>
                    </li>
                    <li class="nav-item fire-header-nav-item">
                        <a class="nav-link <?php if ($page == 'about')
                            echo 'active'; ?>" href="about.php">
                            <span>About</span>
                            <div class="fire-header-nav-sparkle"></div>
                        </a>
                    </li>
                    <li class="nav-item fire-header-nav-item">
                        <a class="nav-link <?php if ($page == 'products')
                            echo 'active'; ?>" href="products.php">
                            <span>Products</span>
                            <div class="fire-header-nav-sparkle"></div>
                        </a>
                    </li>
                    <li class="nav-item fire-header-nav-item">
                        <a class="nav-link <?php if ($page == 'safetytips')
                            echo 'active'; ?>" href="safetytips.php">
                            <span>Safety Tips</span>
                            <div class="fire-header-nav-sparkle"></div>
                        </a>
                    </li>
                    <li class="nav-item fire-header-nav-item">
                        <a class="nav-link <?php if ($page == 'contact')
                            echo 'active'; ?>" href="contact.php">
                            <span>Contact</span>
                            <div class="fire-header-nav-sparkle"></div>
                        </a>
                    </li>
                    <li class="nav-item fire-header-nav-item ml-auto">
                        <a class="btn btn-lg btn-danger">Download Pricelist</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>