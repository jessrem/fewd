$(".readmore").click(expand);


	function expand(e){
		e.preventDefault();
		$(".hide").slideToggle();
		$(".readmore").hide();
	}

$(".readless").click(condense);



	function condense(e){
		e.preventDefault();
		$(".hide").slideToggle();
		$(".readmore").show();
	}

