var n=6;
var body = document.getElementById('box');
var floorY = 0;
var floorZ = 0;
for (var x=0; x<n; x++)
{
	for (var y=0; y<n; y++)
	{
		floorY=(x*-40)+100;
		var div = document.createElement("div");
		div.style.transform="rotateY(90deg) "+
			"translateZ("+((y*-40)+100)+"px) " +
			"translateX(100px)" + "translateY("+floorY+"px)";
		div.innerHTML="01010011<wbr>10001010<wbr>10111001<wbr>01000101<wbr>11010010<wbr>"+
			"10111001<wbr>10110010<wbr>10111001<wbr>01000001<wbr>".repeat(12);
		body.appendChild(div);
	}
	for (var z=0; z<n; z++)
	{
		var div = document.createElement("div");
		floorZ=((x*-40)+100);
		div.style.transform= "translateZ("+(z*-40)+"px)" + "translateY("+floorZ+"px)";
		div.innerHTML="01010011<wbr>10001010<wbr>10111001<wbr>01000101<wbr>11010010<wbr>"+
			"10110001<wbr>10110010<wbr>10111001<wbr>01000001<wbr>".repeat(12);
		body.appendChild(div);
	}
	for (var j=0; j<n; j++)
	{
		floorY=(x*-40)+200;
		var div = document.createElement("div");
		div.style.transform="rotateZ(90deg) "+
			"translateZ("+((j*-40)+0)+"px) " +
			"translateX(-100px)" + "translateY("+floorY+"px)";
		div.innerHTML="01010011<wbr>10001010<wbr>10111001<wbr>01000101<wbr>11010010<wbr>"+
			"10111001<wbr>10110010<wbr>10111001<wbr>01000001<wbr>".repeat(12);
		body.appendChild(div);
	}
}
