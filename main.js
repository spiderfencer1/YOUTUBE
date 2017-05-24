window.onload = () => {
	const buttons = document.getElementsByTagName('button');
	for(let i=0;i<buttons.length;i++){
		buttons[i].onclick = () => {
			const text = document.getElementById("text" + (i + 1)).value;
			let beginning = 0, end = 0;
			for(let i=0;i<text.length;i++){
				if(text.substring(i,i+4) == "src="){
					i+=5;
					beginning = i;
					while(text[i]!='"'){
						i++;
					}
					end = i;
				}
			}
			console.log(text.substring(beginning,end));
			document.getElementById("frame" + (i+1)).src = text.substring(beginning,end);
		};
	}
};
