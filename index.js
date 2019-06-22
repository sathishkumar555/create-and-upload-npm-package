var Calculator = function(){};

Calculator.prototype.additions = function(a,b){
    return a+b;
} 

Calculator.prototype.addThreeNumbers = function(a,b ,c){
    return a+b+c;
}

Calculator.prototype.subtract = function(a,b){
    return a-b;
}

Calculator.prototype.multiplication = function(a,b){
    return a*b;
}

Calculator.prototype.division = function(a,b){
    return a/b;
}

module.exports = new Calculator();

