var progress=0;
var interval;
var dataLength;
var oldData;
var newData;
var filtMult;
var addFilt;
var complexFilt;
var width;
var height;
addEventListener("message",function(message){
	if(typeof message.data == "object"){
		oldData=message.data;
		newData=new Uint8ClampedArray(oldData.length);
		return 0;
	}
	if(message.data.split("filtMult: ").length == 2){
		filtMult=JSON.parse(message.data.split("filtMult: ")[1]);
	}
	if(message.data.split("addFilt: ").length == 2){
		addFilt=JSON.parse(message.data.split("addFilt: ")[1]);
	}
	if(message.data.split("compFilt: ").length == 2){
		complexFilt=JSON.parse(message.data.split("compFilt: ")[1]);
	}
	if(message.data.split("width: ").length == 2){
		width=Number(message.data.split("width: ")[1]);
	}
	if(message.data.split("height: ").length == 2){
		height=Number(message.data.split("height: ")[1]);
	}
	if(message.data == "startaffine"){
	dataLength=oldData.length;
	for(var i=0;i<dataLength;i += 4){
	var red = oldData[i];
	var green = oldData[i+1];
	var blue = oldData[i+2];
	newData[i] = red*filtMult[0][0]+green*filtMult[0][1]+blue*filtMult[0][2]+addFilt[0];
	newData[i+1] = red*filtMult[1][0]+green*filtMult[1][1]+blue*filtMult[1][2]+addFilt[1];
	newData[i+2] = red*filtMult[2][0]+green*filtMult[2][1]+blue*filtMult[2][2]+addFilt[2];
	newData[i+3] = oldData[i+3];
	}
	postMessage(newData);
	}
	if(message.data == "startcomplex"){
	dataLength=oldData.length;
	var width4=4*width;
	for(var i=0;i<dataLength;i+=4){
	//var x = (i >> 2) % width;
	//var y = Math.ceil((i >> 2)/width);
	var r1 = oldData[i-width4-4];
	var g1 = oldData[i-width4-3];
	var b1 = oldData[i-width4-2];
	var r2 = oldData[i-width4];
	var g2 = oldData[i-width4+1];
	var b2 = oldData[i-width4+2];
	var r3 = oldData[i-width4+4];
	var g3 = oldData[i-width4+5];
	var b3 = oldData[i-width4+6];
	var r4 = oldData[i-4];
	var g4 = oldData[i-3];
	var b4 = oldData[i-2];
	var r5 = oldData[i];
	var g5 = oldData[i+1];
	var b5 = oldData[i+2];
	var r6 = oldData[i+4];
	var g6 = oldData[i+5];
	var b6 = oldData[i+5];
	var r7 = oldData[i+width4-4];
	var g7 = oldData[i+width4-3];
	var b7 = oldData[i+width4-2];
	var r8 = oldData[i+width4];
	var g8 = oldData[i+width4+1];
	var b8 = oldData[i+width4+2];
	var r9 = oldData[i+width4+4];
	var g9 = oldData[i+width4+5];
	var b9 = oldData[i+width4+6];
	newData[i] = r1*complexFilt[0][0]+g1*complexFilt[0][1]+b1*complexFilt[0][2]+r2*complexFilt[0][3]+g2*complexFilt[0][4]+b2*complexFilt[0][5]+r3*complexFilt[0][6]+g3*complexFilt[0][7]+b3*complexFilt[0][8]+r4*complexFilt[0][9]+g4*complexFilt[0][10]+b4*complexFilt[0][11]+r5*complexFilt[0][12]+g5*complexFilt[0][13]+b5*complexFilt[0][14]+r6*complexFilt[0][15]+g6*complexFilt[0][16]+b6*complexFilt[0][17]+r7*complexFilt[0][18]+g7*complexFilt[0][19]+b7*complexFilt[0][20]+r8*complexFilt[0][21]+g8*complexFilt[0][22]+b8*complexFilt[0][23]+r9*complexFilt[0][24]+g9*complexFilt[0][25]+b9*complexFilt[0][26]+complexFilt[0][27];
	newData[i+1] = r1*complexFilt[1][0]+g1*complexFilt[1][1]+b1*complexFilt[1][2]+r2*complexFilt[1][3]+g2*complexFilt[1][4]+b2*complexFilt[1][5]+r3*complexFilt[1][6]+g3*complexFilt[1][7]+b3*complexFilt[1][8]+r4*complexFilt[1][9]+g4*complexFilt[1][10]+b4*complexFilt[1][11]+r5*complexFilt[1][12]+g5*complexFilt[1][13]+b5*complexFilt[1][14]+r6*complexFilt[1][15]+g6*complexFilt[1][16]+b6*complexFilt[1][17]+r7*complexFilt[1][18]+g7*complexFilt[1][19]+b7*complexFilt[1][20]+r8*complexFilt[1][21]+g8*complexFilt[1][22]+b8*complexFilt[1][23]+r9*complexFilt[1][24]+g9*complexFilt[1][25]+b9*complexFilt[1][26]+complexFilt[1][27];
	newData[i+2] = r1*complexFilt[2][0]+g1*complexFilt[2][1]+b1*complexFilt[2][2]+r2*complexFilt[2][3]+g2*complexFilt[2][4]+b2*complexFilt[2][5]+r3*complexFilt[2][6]+g3*complexFilt[2][7]+b3*complexFilt[2][8]+r4*complexFilt[2][9]+g4*complexFilt[2][10]+b4*complexFilt[2][11]+r5*complexFilt[2][12]+g5*complexFilt[2][13]+b5*complexFilt[2][14]+r6*complexFilt[2][15]+g6*complexFilt[2][16]+b6*complexFilt[2][17]+r7*complexFilt[2][18]+g7*complexFilt[2][19]+b7*complexFilt[2][20]+r8*complexFilt[2][21]+g8*complexFilt[2][22]+b8*complexFilt[2][23]+r9*complexFilt[2][24]+g9*complexFilt[2][25]+b9*complexFilt[2][26]+complexFilt[2][27];
	newData[i+3] = oldData[i+3];
	}
	postMessage(newData);
	}
});