$(document).ready(function(){
	$('input#accName').val('kdmaam'); $('input#accId').val('1546');
	
	$('button#go').click(function(){		
		resetDisplay();
    	if(validateInput()){
    		$('section#display').append('<p>Loading...</p>');
    		loadProfile();
    	}
  	});
});

function resetDisplay(){
	$('section#display').empty();
}

function validateInput(){
	var foundError = false;
	var msg = '';
	
	var accName = $('input#accName').val();
	var accId = $('input#accId').val();
	
	if(!accName || accName===''){
		msg = msg + "- Please provide a profile name.<br>"
	}
	if(!accId || accId===''){
		msg = msg + "- Please provide a profile id.<br>"
	}else if(isNaN(parseInt(accId))){
		msg = msg + "- The profile id must be a number.<br>"
	}
	
	if(msg!==''){
		foundError = true;
		$('section#display').append('<p class="alert">' + msg + '</p>');
	}
	
	return !foundError;
}

function loadProfile(){
	var accName = $('input#accName').val();
	var accId = $('input#accId').val();
	
	
}