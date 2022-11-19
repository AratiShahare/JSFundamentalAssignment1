/* 1. write a loop which prompts for a number greater than 100. if the visitor enters another no. ask them
      to input again.
      the loop must ask  for a no. until either the visitor enters a no. greater than
      100 or cancel the input/enters an empty line.
      
      here we can assume that the visitor only inputs no. there's no need to implement a special handling
      for a non-numeric input in this task.
 */

      let num= prompt("enter a no greater than 100")
       while(num<=100){
        num=prompt("enter again")
       }
       alert("ok");