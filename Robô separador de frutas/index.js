let esteira1 = ["Uva", "Maça", "Banana", "Pera", "Maça", "Maracuja", "Açai"];
	const frutaAColetar = ("Maça");
	
	let quantidade = 0;
    let item

    for (const item of esteira1) {
        if (frutaAColetar === item) {
     		quantidade += 1;
   		}
 	}

 	console.log(quantidade);
  