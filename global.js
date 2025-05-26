var myGlobal = 10;

function fun1() {
     

}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }

    if (typeof oopsGlobal != "underfined") {
        output += "oopsGlobal: " + oopsGlobal;
    }

    console.log(output);
}

fun1();
fun2();