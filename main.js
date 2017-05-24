function replace(str,key,value){
	for(let i=0;i<str.length;i++){
		if(str.substring(i,i+key.length) == key){
			return str.substring(0,i) + value + str.substring(i+key.length,str.length);
		}
	}
	return str;
}

window.onload = () => {
	const buttons = document.getElementsByTagName('button');
	for(let i=0;i<buttons.length;i++){
		buttons[i].onclick = () => {
			const text = replace(document.getElementById("text" + (i+1)).value,"watch?v=","embed/");
			document.getElementById("frame" + (i+1)).src = text;
		};
	}
};
