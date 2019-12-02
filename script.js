$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: false,
    nav: false, 
    lazyLoad: true,
    smartSpeed: 500
  });
});


		var starter = document.getElementById('starters'),
    	dishes = document.getElementById('dishes'),
      desert = document.getElementById('desert'),
      drinks = document.getElementById('drinks'),
    	tab1 = document.querySelector('.tab1'),
    	tab2 = document.querySelector('.tab2'),
      tab3 = document.querySelector('.tab3'),
      tab4 = document.querySelector('.tab4'),
   		input = document.querySelectorAll('input');
		
		for (var i=0; i<input.length; i++) {
  			input[i].onchange = function() {
    			if (starters.checked) {
          		tab1.style.display = 'block';
      			  tab2.style.display = 'none';
              tab3.style.display = 'none';
              tab4.style.display = 'none';
   				} else if (dishes.checked) {
      				tab1.style.display = 'none';
      				tab2.style.display = 'block';
              tab3.style.display = 'none';
              tab4.style.display = 'none';
          } else if (desert.checked) {
              tab1.style.display = 'none';
              tab2.style.display = 'none';
              tab3.style.display = 'block';
              tab4.style.display = 'none';
          } else if (drinks.checked) {
              tab1.style.display = 'none';
              tab2.style.display = 'none';
              tab3.style.display = 'none';
              tab4.style.display = 'block';
    			};
  			};
		};

