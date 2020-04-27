var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("The lenght and breadth of rectange is l = " + l + " and b = " + b);

    rect(l,b, (err,rectangle) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
}

solveRect(3,4);
solveRect(2,1);
solveRect(0,5);
solveRect(-3,-5);