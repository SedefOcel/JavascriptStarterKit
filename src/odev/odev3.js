let sum=0;
let newlist=[];
let index=0;
for(let i=1;i<1000;i++){
  sum=0;
  for(let j=1;j<i;j++){
   if (i % j === 0) 
   {  sum = sum + j; }
  }  
   if (sum === i) 
    { newlist[index]=i;
     index++;   }
}
console.log("Ödev 3 ")
console.log("mükemmel sayi",...newlist);
console.log("--------------- ")