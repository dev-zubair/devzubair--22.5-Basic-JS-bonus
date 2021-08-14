// Fibonacci start from Index 3
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

const fibo = [0, 1];
for (let i = 2; i <=6; i++){
    fibo[i] = fibo [i - 1] + fibo [i - 2];
}
console.log(fibo);

//Recursive system দিয়ে কিভাবে এলিমেনটের ইনডেক্স বের করা যায়।। এখানে দেখানো হয়েছে ১০তম পদটি কত ।
/* 
১ । রিকারশন এমন একটি জিনিস যেটি ফাংশনের এর ভিতর থেকে ফাংশনকে কল করতেছে । ফাংশনকে কল করলে () দিয়ে কল করতে হবে । [] দিয়ে কল করলে হবে না ।
২ । For loop ও while loop মত রিকারসিভের মধ্যেও stopping Condition দিতে হবে ।   
*/

function fibo1(i){
    if (i == 0){
        return 0;
    }
    if(i == 1){
        return 1;
    }
    return fibo1(i - 1) + fibo1 (i - 2);
}
console.log(fibo1(10));