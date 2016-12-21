$(document).ready(function() {
	function hasValue(elem) {
	    return $(elem).filter(function() {
	    	return $(this).val(); 
	 	}).length > 0;
	}

	$("#addTodo").keyup(function(e) {
		if (e.which === 13) {
			if (hasValue(this)) {
				console.log("Pressed enter");
				var newTodo = '<li><span>';
				newTodo += '<i class="fa fa-trash-o">';
				newTodo += '</i></span>';
				newTodo += $(this).val();
				newTodo += '</li>';
				$("ul").append(newTodo);
				$(this).val('');
			} else {
				alert("Please enter a todo!");
			}
		} 
	});

	$(".fa-plus").on("click", function(){
		$("#addTodo").fadeToggle(300);
	});

	$("ul").on("click", "li", function() {
		$(this).toggleClass("completed");
	});

	$("ul").on("click", "span", function() {
		$(this).parent().remove();
	})

});

