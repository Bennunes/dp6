var v = [5, 6, 3, 7, 1 , 2, 23]
ordena(v);

function ordena(v){
	var aux = 0;
	for(var i = 0; i <= v.length; i++){
		for(var a = 0; a <= v.length; a++){
			if(v[i]<v[a]){
				aux = v[i]
				v[i] = v[a]
				v[a] = aux
			}
		}
	}
	console.log(v)
}
