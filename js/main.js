var $form = $('.form');
var $todo = $('.todo');
var $added = $('.added');

$form.on('submit', function (e) {
e.preventDefault();	
var $li = $('<li>');
var $button = $('<button>');
		
	
var todoValue = $todo.val(); 	
var $todoH2 = $('<h2>').html($todo.val());

	
	
$li.append($todoH2);	
$added.append($li);	
$li.append($button);	

$button.addClass('button');

 	
});


