// 最大公因數＝calculation(整數a,整數b)
var calculation = function(a,b){
    if(b==0){
        return "b can't be 0"
    }else if(a==0){
        return 0
    }else{
        if(a%b==0){
            return b
        }else{
            return calculation(b,a%b)
        }
    }
}
console.log(calculation(1519,1333))
// it will output 31 :D