
  var newlist=[];
  let counter=-1;
  let index=0;;
    for (let i = 2; i < 1000; i++) {

          counter=-1
      for (let j = 2; j < i; j++) {
          if (i % j === 0) {  
               counter++;
               break;}
              }
              if(counter<0){
             newlist[index]=i;
            index++;}
    
} 
console.log("Ödev 4 ")
  console.log("1000 e kadar Asal Sayılar (",...newlist,")"); 
  
  console.log("--------------- ")
  
