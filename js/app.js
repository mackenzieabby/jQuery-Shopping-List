$(document).ready(function() {
// Global Variables //
var checkMark = '<img src="images/cross_off_green.png" alt="Cross Off" class="cross_off" id="cross_off">';
var xMark = '<img src="images/delete.png" alt="Delete" class="delete" id="delete">';
var editText = '<span></span>';
var checkOff = '<img src="images/cross_off_red.png" alt="Checked Off" class="cross_off_red" id="cross_off_red"';


// On key up of input = ENTER post the item //
function getItem() {
	$('input').keyup(function (event) {
		if (event.keyCode == 13) {
			postItem();
			$(':input, .input');
			.val('')
			 $(':input','.input').val('')
		}; 
	});
}

getItem(); // Calling GetItem //

// Creates Post //
function postItem() {
	var value = $('input').val();
	var work = $('<div class="regular_list">' + xMark + editText + checkMark + checkOff + '</div>');
	work.appendTo('.list_area');
	work.find('span').css('color', '#0073E8').text(value);
}

// Reset //
$(document).on('click', 'button', function (event) {
	event.preventDefault();
	$('.list_area').empty();
});
 
 // Delete Item //
 $(document).on('click',' #delete', function (event) {
 	event.preventDefault();
 	$(this).closest('.regular_list').fadeOut(300);
 });

 // Crossed Off List //
$(document).on('click', '.cross_off', function(event) {
	event.preventDefault();
	$(this).hide();
	$(this).siblings('.cross_off_red').show();
	$(this).siblings('span').css('text-decoration', 'line-through');
});
    // Still To Do List //
$(document).on('click', '.cross_off_red', function(event) {
	event.preventDefault();
	$(this).hide();
	$(this).siblings('.cross_off').show();
	$(this).siblings('span').css('text-decoration', 'none');
});  

}); // End of document ready //

