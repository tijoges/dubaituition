<footer class="page-footer ">
	<div class="footer-copyright ">
		<div class="container">
			<div class="copyr" style="text-align:center; padding:10px 0;">&copy; 2018 Copyright Dubai Tuitions
				<ul class="Contactsociallinksf ">
					<!--<a class="grey-text text-lighten-4 right " href="#! ">GES</a>-->

					<li><a href="https://www.facebook.com/Dubai-Tutions-317990688650437/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
					<li><a href="https://www.linkedin.com/company-beta/13376376/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
					<li><a href="https://plus.google.com/u/1/105290659765574673795" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
					<li><a href="https://www.instagram.com/dubai_tuitions/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
					<li><a href="https://twitter.com/Dubai_Tuitions" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>
<script src="assets/js/jQuery v3.2.1 .js" crossorigin="anonymous "></script>
<script src="assets/js/ajax.min.js"></script>
<script type="text/javascript" src="assets/js/index.js"></script>
<script type="text/javascript" src="assets/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src='https://www.google.com/recaptcha/api.js'></script>
<script type="text/javascript">
		$(document).ready(function() {
			$('.parallax').parallax();
		});


		function myMap() {
			var myCenter = new google.maps.LatLng(25.102995, 55.163344);
			var mapCanvas = document.getElementById("map ");
			var mapOptions = {
				center: myCenter,
				zoom: 15
			};
			var map = new google.maps.Map(mapCanvas, mapOptions);
			var marker = new google.maps.Marker({
				position: myCenter,
				title: "Hello World "
			});
			marker.setMap(map);
		}

	</script>