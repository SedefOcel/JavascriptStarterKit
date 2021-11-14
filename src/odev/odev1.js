
function SayilariGetir(...Sayilar){  
var newlist=[];
let counter=-1;
  for (let i = 0; i < Sayilar.length; i++) {

    for (let j = 2; j < Sayilar[i]; j++){
   
  if (Sayilar[i] % j === 0) {       
    counter=-1;
    break;   
  }
  
  else {counter++; break;} 
} 
if(counter>=0){
newlist[counter]=Sayilar[i];}
}
console.log("Ödev 1 ")
console.log("Asal Sayılar (",...newlist,")")
console.log("--------------- ")
}

SayilariGetir(99,105,82,64,56,7,17);