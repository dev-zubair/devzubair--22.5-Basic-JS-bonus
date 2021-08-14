/* ---------------------------------------------------------
Factorial
6 এর Factorial হল 
6! = 6*5*4*3*2*1
/*-----------------------------------------------------------
Factorial - Multiply কর Incremental অনুসারে । 
--------------------------------------------------------- */

let factorialIncremental = 1;       // গুনের ক্ষেত্রে ডিফল্ট মান ১ দিতে হয় ।
for (let i = 1; i <=6; i++){
    factorialIncremental = factorialIncremental * i;
}
console.log(factorialIncremental);

/* ---------------------------------------------------------
Factorial - Multiply কর Decremental অনুসারে । 
--------------------------------------------------------- */

let factorialDecremental = 1;
for (let i = 6; i >= 1; i--){
    factorialDecremental = factorialDecremental * i;
}
console.log(factorialDecremental);


/* ---------------------------------------------------------
Function দিয়ে কিভাবে - Factorial - Multiply কর Decremental অনুসারে । 
--------------------------------------------------------- */

function factorialFun(i){
    if (i == 1){
    return 1;
}
    return i * factorialFun(i - 1);
}
console.log(factorialFun(6));