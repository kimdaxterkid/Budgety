// Budget Controller
var budgetController = (function () {

})();


//UI Controller
var UIController = (() => {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    return {
        getDOMstrings: () => {
            return DOMstrings
        },
        getInput: () => {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        }   
    };
})();


// Global App Controller
var mainController = (function(budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = () => {
        // 1. get filled input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. add item to the budget controller
        // 3. add the item to the ui controller
        // 4. calculate the budget
        // 5. display the budget on the UI
        
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', (event) => {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);