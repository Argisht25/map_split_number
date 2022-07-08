
//split.map (number)(25793)// false // (224422) /true
function solution(n) {
    debugger
    let a = ("" + n).split("").map(Number)
    let l = a.length
    let s = (l / 2) - 1
    let fh = 0
    let sh = 0
 
    for (f = 0; f <= s; f++) {
       fh = fh + a[f]
    }
    for (e = s + 1; e < l; e++) {
       sh = sh + a[e]
    }
    if (sh === fh) {
       return true
    } else {
       return false
    }
 }