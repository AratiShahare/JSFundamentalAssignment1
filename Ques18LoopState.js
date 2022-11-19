// 1. write a code which outputs prime numbers in the interval from 2 to n.
//     for n=10 the result will be 2,3,4,5,6,7

for(n=2;n<=10;n++)
{
   let count=0;
   for(j=2;j<n;j++){
    
    if(n%j==0){

    count++
    }

   }
   if(count==0){
    console.log(n)
   }
}