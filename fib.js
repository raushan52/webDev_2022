var arr = [];
arr[0] = 0;
arr[1] = 1;


function fibonacciGenerator (n) {
        
     
        
        for(var c = 2; c <=n; c++){
            arr[c] = arr[c-1]+arr[c-2];
        }
        
        
        return arr;
        
    
    }
    fibonacciGenerator(100);
    console.log(arr);