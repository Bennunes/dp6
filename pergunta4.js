var x = [ 1, 6, 3 ]; 
organiza(x);

function organiza(params) {
  for (i=0; i<params.length; i++) {
    if(params[i]>params[i+1]){
		var aux = params[i+1]
		params[i+1] = params[i]
		params[i] = aux  
	}
	
  }
console.log(params)
}
