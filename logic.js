const calc = () => {
    var a = document.getElementById('first-factor').value;
    var b = document.getElementById('second-factor').value;
    var c = document.getElementById('third-factor').value;
    var d = document.getElementById('fourth-factor').value;
    
    var price = document.getElementById('price').value;
    if(a == '' || c == '' || price == '') {
        alert('Missing values.');
    } else {
        if(b == '' & d == '' || price == '') {
            var result = c * price / a;
            if(Number.isNaN(result) == true) {
                alert('Values specified but incorrect data type.');
            } else {
                alert(result);
            };
        } else {
            var struct_1 = a * b;
            var struct_2 = c * d;

            var result = struct_2 * price / struct_1;
            if(Number.isNaN(result) == true) {
                alert('Values specified but incorrect data type.');
            } else {
                alert(result);
            };
        };
    };
};