var arr = [];
var count;
for(count = 1; count <= 100; count++){
        if(count % 3 === 0){
            if(count % 5 ===0){
                arr.push("FizzBuzz");
            }else{
                arr.push("Fizz");
            }
        }else if(count % 5 === 0){
            arr.push("Buzz");
        }
        else {
            arr.push(count);
        }       
    
}
  for(var a = 0; a < arr.length; a++){
      console.log((a+1) + " " + arr[a] + " ");
  }
// console.log(arr);
