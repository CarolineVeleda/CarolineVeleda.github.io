var y = document.getElementsByTagName('output')[2]; 
var y1 = document.getElementsByTagName('output')[1];
var y2 = document.getElementsByTagName('output')[3];  
var out = document.getElementsByTagName('output')[0]; 

var x = document.getElementsByTagName('input')[0];

	x.onkeyup=function() {
	preco="Meia-Entrada = " + x.value/2;
	out.textContent = preco;
	precoi=x.value;
	precom=(x.value/2);
};

	
var table = document.querySelector('table');
contador=0;
v=0;
a=0;


table.addEventListener('click',function(cliquei){
	var celula = cliquei.target;
	var b=0;
	
  
  	if (celula.className=='yup'){
		celula.className='original';
		b=1;
		a--;
		
		conti2=(precom*a);
		meia=a+" meias-entradas : "+ conti2;
		y1.textContent=meia;


	}
	
  
  	if (celula.className=='pt'){
		celula.className='yup';
		a++;
		v--;
		conti=(precoi*v);
		inteira=v+" Entradas inteiras : " + conti;
		console.log(inteira);
		y.textContent=inteira;
	
		if (a>1){
			meia=a+" meias-entradas : "+ precom*a;
			y1.textContent=meia;

		}
		else{
			meia=a+" meia-entrada : "+ precom*a;
			y1.textContent=meia;

		}
    } 
	
   
	if (celula.className=='original' && b==0){
		celula.className='pt';
		v++;
		
		if 	(v>1){
			inteira=v+" Entradas inteiras : "+ precoi*v;
			y.textContent=inteira;

		}
		else{
			inteira=v+" Entrada inteira : "+ precoi*v;
			y.textContent=inteira;

		}
	
	
	
	}
	
	
	if (celula.className=='branco'){
		celula.className='branco';

	}
	
	
	
	total=(precom*a)+(precoi*v);
	y2.textContent=total;
  

  
  
  



});





