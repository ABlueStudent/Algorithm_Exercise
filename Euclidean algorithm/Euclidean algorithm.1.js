var a = 36, b = 24, remain = a % b;
while(remain != 0) {
  a = b;
  b = remain;
  remain = a % b
}
console.log(b)