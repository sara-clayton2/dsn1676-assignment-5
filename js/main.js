var $form = $('.form');
var $todo = $('.todo');
var $added = $('.added');
var $button = $('.addbutton');


$form.on('submit', function (e) 
{
	e.preventDefault();	
	//create the list item
	var $li = $('<li>');
	
	//create a button for each list item
	var $button = $('<button>');
	$button.html('X');
	$button.addClass ('check');
	//add the button event
	$button.on('click', function () { 
	$li.remove();	
	});	

	//add textbox value
	var $todoH2 = $('<h2>').html($todo.val());
	//add the button
	$todoH2.append($button);
	
	//targeted the H2 so when clicked it strikesththrough
	$todoH2.on('click', function () { 
	$todoH2.addClass ('strikethrough')();	
	});	

	
	//add it to the list item
	$li.append($todoH2);	
	
	
	//add list item to list
	$added.append($li);	
}
);


