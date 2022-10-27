export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return 'true'
    } else if(myNum < 5 && myNum >= 0) {
        return 'false'
    }else if (myNum > 5){
        return 'big'
    }else (myNum);{
        return 'negative'
        
    }
}
console.log(myFunction(5));
console.log(myFunction(3));
console.log(myFunction(6));
console.log(myFunction(-2));
