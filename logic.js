const calc = () => {    //Main Function referenced in the 'index.html' file
    //The 5 variables

    var a = document.getElementById('first-factor').value;
    var b = document.getElementById('second-factor').value;
    var c = document.getElementById('third-factor').value;
    var d = document.getElementById('fourth-factor').value;
    
    var price = document.getElementById('price').value;


    

    function roundToTwo(num) {    
        return +(Math.round(num + "e+2")  + "e-2");    //function to round up the number to 2 decimale
    };

    if(a == '' || c == '' || price == '') {    //Checks for missing values
        alert('Missing values.');   //Alerts that there are missing numbers
    } else {
        if(b == '' & d == '' || price == '') {
            var result = c * price / a;   //Simple 'Quatrieme Proportionelle' as we call it in French
            if(Number.isNaN(result) == true) {
                alert('Values specified but incorrect data type.');  //Alerts incorrect data presence
            } else {
                alert(roundToTwo(result));    //Pops up the result on the screen
            };
        } else {
            //2 structures to simplify c * d * price / a  * b
            
            var struct_1 = a * b;
            var struct_2 = c * d;

            var result = struct_2 * price / struct_1; //Final result
            if(Number.isNaN(result) == true) {    //Checks for invalid data type in the input fields
                alert('Values specified but incorrect data type.');   //Alerts incorrect data type presence
            } else {
                alert(roundToTwo(result));   //Pops up the result on the screen
            };
        };
    };
};

