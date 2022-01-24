 function fizzbuzz() {
    var userNumber = document.getElementById("userNum").value;
    var echo =document.getElementById("value-echo");
    var result = document.getElementById("result");

//-- check user entered number --//
    if (isNaN(userNumber) || userNumber.length == 0) {
        echo.innerHTML = "<p>Please enter a number</p>"
    } else
    echo.innerHTML = "<h3>You entered: " + userNumber + "</h3>";

//-- clear results before showing new results --//
    result.innerHTML ='';

//-- FizzBuzz code to write results into #result --//

    for (var i = 1; i <= userNumber; i ++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            result.innerHTML += "<h4 class='fbz'>Fizz-Buzz</h4>";
        } else if (i % 3 == 0) {
            result.innerHTML += "<h4 class='fz'>Fizz</h4>";
        } else if (i % 5 == 0) {
            result.innerHTML += "<h4 class='bz'>Buzz</h4>";
        } else
          result.innerHTML += "<h4>" + i + "</h4>";
    } ;       

 };