var budgetController = (function () {
    var x = 100;
    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();


var UIController = (function() {
    // Some Code 
})();

var mainController = (function(budgetCtrl, UICtrl) {
    var z = budgetCtrl.publicTest(5);
    return {
        anotherPublicTest: function() {
            console.log(z);
        }
    }
})(budgetController, UIController); 