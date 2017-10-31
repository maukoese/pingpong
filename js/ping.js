var lexxy = [];
var ping = function ( unumber ) {
	if ( unumber%3 == 0 && unumber%5 !== 0 ) {
		return "ping!";
	} else if( unumber%3 !== 0 && unumber%5 == 0 ){
		return "pong";
	} else if( unumber%3 == 0 && unumber%5 == 0 ){
		return "pingpong";
	} else{
		return unumber;
	}
}

var pong = function ( next ) {
	var arrayLength = lexxy.length;
	for (var i = 0; i < arrayLength; i++) {
	    return ping( lexxy[i] );
	}
}