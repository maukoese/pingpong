var ping = function ( unumber ) {
	if ( unumber%3 == 0 && unumber%5 !== 0 ) {
		return "ping";
	} else if( unumber%3 !== 0 && unumber%5 == 0 ){
		return "pong";
	} else if( unumber%3 == 0 && unumber%5 == 0 ){
		return "pingpong";
	} else {
		return unumber;
	}
}

var pong = function ( next ) {
	var penty = [];
	var res = [];
	for (var i = 1; i <= next; i++) {
	    penty.push(i)
	}

	var nexts = penty.map( function ( unumber ) {
		if ( unumber%3 == 0 && unumber%5 !== 0 ) {
			return "ping";
		} else if( unumber%3 !== 0 && unumber%5 == 0 ){
			return "pong";
		} else if( unumber%3 == 0 && unumber%5 == 0 ){
			return "pingpong";
		} else {
			return unumber;
		}
	} );
	return nexts;
}