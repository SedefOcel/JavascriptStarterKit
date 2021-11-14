
function ArkadasSayiBul(sayi1,sayi2){
  
  let sum1=0;
  let sum2=0;
for (let i = 1; i < sayi1; i++)
{
    if (sayi1 % i === 0)
    {
      sum1 += i;
    }
}
for (let j = 1; j < sum2; j++)
{
    if (sayi2 % j === 0)
    {
      sum2 += j;
    }
}
if (sayi1 !== sum2 && sayi2 !== sum1)
{
    
    console.log("("+sayi1+"," + sayi2+") Sayıları arkadaş sayı değil");
}
else
{
  console.log("("+sayi1+"," + sayi2+") Sayıları Arkadaş sayı");
 
}
}
console.log("Ödev 2 ")

ArkadasSayiBul(184,84);
ArkadasSayiBul(220,284);
console.log("--------------- ")