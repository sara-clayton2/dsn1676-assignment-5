var $form = $('.form');
var $todo = $('.todo');
var $added = $('.added');
var $button = $('.addbutton');
//var $remove = $('.remove');



$form.on('submit', function (e) 
{
	e.preventDefault();	
	var $li = $('<li>');
	var $button = $('<button>');
	
	$button.on('click', function () { 
	$li.remove();	
	});	
	
	
	var todoValue = $todo.val(); 	
	var $todoH2 = $('<h2>').html($todo.val());
	$todoH2.append($button);
				   
				   
	//$todoH2.append($remove);


	$li.append($todoH2);	
	
	$added.append($li);	

	


}
);


