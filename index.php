<?php $page = "home"; ?>
<!DOCTYPE html>
<html lang="en">

<head itemscope itemtype="http://www.schema.org/website">
	<title>Premium Quality Fireworks</title>
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
	<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.0/font/bootstrap-icons.min.css"> -->
	<link rel="stylesheet" href="css/style.css">
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/marquee.js"></script>
	<script>
		$('.marquee-left').marquee({
			duration: 16000,
			gap: 150,
			delayBeforeStart: 0,
			direction: 'left',
			duplicated: false,
			pauseOnHover: true
		});
	</script>

</head>

<body itemscope itemtype="http://schema.org/WebPage">
	<?php include_once "header.php"; ?>
	<!--index carousel -->
	<!-- Swiper container -->
	<div class="swiper-container my-swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="images/slide-1.webp" alt="Image 1">
			</div>
			<div class="swiper-slide">
				<img src="images/slide-2.webp" alt="Image 2">
			</div>
		</div>
	</div>



	<?php include_once "footer.php"; ?>




	<script src="js/odometer.min.js"></script>
	<script src="js/swiper-bundle.min.js"></script>
	<script src="js/wow.js"></script>
	<script>
		new WOW().init();
	</script>
	<script src="js/script.js"></script>
	<script src="js/marquee.js"></script>
	<script>
		$('.marquee-left').marquee({
			duration: 16000,
			gap: 150,
			delayBeforeStart: 0,
			direction: 'left',
			duplicated: false,
			pauseOnHover: true
		});
	</script>
</body>

</html>