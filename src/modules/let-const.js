console.info('let-const.js');

{
    console.log("Scope A",a); //hoisting effected
    // console.log(b) // ReferenceError: b is not defined

    {
        var a = 100;
        let b = 200;
        const c = 300;
        {
            console.log("Scope B",a,b);
            //c = 400; // TypeError: invalid assignment to const `c'
            {
                console.log("Scope C",b ,c);
            }
        }
    }
}