console.info('arrow-function.js');

function funcName(params) {
    return params + 2;
}
funcName(2);


var funcName = (params) => params + 2
console.log( funcName(2) );

console.log( arguments );

var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
        console.log(this.i, this);
    }
}

obj.b();
obj.c();

