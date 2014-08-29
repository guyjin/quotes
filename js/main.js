var quotes = {
	fetchQuote: function() {
		$.ajax({
			url: 'get.php',
			type: 'GET',
			dataType: 'html'
		})
		.done(function(data) {
			$('p').html(data);
		})
		.fail(function() {
			$('p').html("awww, server fall and go BOOM!");
		})
		.always(function() {
			setTimeout(function(){
				$('body').removeClass('fetching');
			}, 500);
		});
		
	}
}

$(window).load(function () {
	$('body').addClass('ready');

	$('#cell').on('click', function() {
		$('body').addClass('fetching');
		setTimeout(function() {
			quotes.fetchQuote();
		}, 750);
		
	});
});



