$(document).ready(function() {
    let inputCount = 1;

    $("#addInput").click(function() {
    	$("#inputs").append(`<input type="text" name="name$${inputCount}" placeholder="Name" required><br>`);
	inputCount += 1;
    });

    $("#dynamicForm").submit(function(e) {
	e.preventDefault();
	$.ajax({
	    url: "/",
	    type: "POST",
	    data: $(this).serialize(),
	    success: function(response) {
	        alert("Data saved!");
		$("#dynamicForm")[0].reset();
		$("#inputs").html('<input type="text" name="name0" placeholder="Name" required><br>');
		inputCount = 1;
	    },
	    error: function() {
	        alert("Error saving data");
	    }
	});
    });

});
