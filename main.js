function SelectedColor(value){
		
		console.log(value);	
	if(value==1){
document.getElementById('colorCar').style.fill= " #212F3D"; 
document.querySelector('.item_select_nam').textContent="NEGRO METALIZADO";
	}else if(value==2){
document.getElementById('colorCar').style.fill= "#21618C"; 
document.querySelector('.item_select_nam').textContent="AZUL MEDITERRÁNEO";
	}else if(value==3){
document.getElementById('colorCar').style.fill= "#943126"; 
document.querySelector('.item_select_nam').textContent="ROJO CHILI";
	}else if(value==4){
document.getElementById('colorCar').style.fill= "#434b4d"; 
document.querySelector('.item_select_nam').textContent="GRIS ACERO";
	}else if(value==5){
document.getElementById('colorCar').style.fill= "#8a9597";
document.querySelector('.item_select_nam').textContent="PLATA SABLE";
} 


}

