function bmiCalculator( weight ,height){
    // bmi= weight (kg) / sqr height
    var bmi = Math.floor( weight/ Math.pow(height,2) );
    return bmi;
}

var out=bmiCalculator(70,1.9);
console.log("user requested bmi is:" + out );