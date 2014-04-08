$(document).ready(function(){
	$('input#battletagName').val('kdmaam'); $('input#battletagCode').val('1546');
	
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
	$('input').removeClass('invalidInput');
}

function validateInput(){
	var foundError = false;
	var msg = '';
	
	var battletagName = $('input#battletagName').val();
	var battletagCode = $('input#battletagCode').val();
	
	if(!battletagName || battletagName===''){
		msg = msg + "- Please provide a battletag Name.<br>";
		$('input#battletagName').addClass('invalidInput');
	}
	if(!battletagCode || battletagCode===''){
		msg = msg + "- Please provide a battletag Code.<br>";
		$('input#battletagName').addClass('invalidInput');
	}else if(isNaN(parseInt(battletagCode))){
		msg = msg + "- The battletag Code must be a number.<br>";
		$('input#battletagName').addClass('invalidInput');
	}
	
	if(msg!==''){
		foundError = true;
		$('section#display').append('<p class="alert">' + msg + '</p>');
	}
	
	return !foundError;
}

function loadProfile(){
	var battletagName = $('input#battletagName').val();
	var battletagCode = $('input#battletagCode').val();
	
	var URL_BASE = "http://us.battle.net/api/d3/profile/";
	
	var url = URL_BASE + battletagName + '-' + battletagCode + '?jsoncallback=?';
	
  	$.getJSON( url, {
    	format: "json"
  	})
    .done(function( data ) {
      console.log(data);
    });
}