Array.prototype.s0rt = function() {
    if (this.length < 2) {
        return this.slice(0)
    }
    else {
        var l = [],
            r = [],
            mid = [this[0]]
        for (var i = 1; i < this.length; i++) {
            if (this[i] < mid[0]) {
                l.push(this[i])
            }
            else {
                r.push(this[i])
            }
        }
        return l.s0rt().concat(mid.concat(r.s0rt()))
    }
}
var arr = ["c", "a", 1, 2, 5, 4].s0rt();
console.log(arr)
