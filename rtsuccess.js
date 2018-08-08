function toggleFunc() {
			      var menuItem = document.querySelectorAll(".navbar-menu");
				  menuItem.forEach(function(arg) {
						arg.classList.toggle("navbar-menu--show");
				  })
			 }
			 document.querySelector(".navbar-toggle").addEventListener("click", toggleFunc);
		</script>
