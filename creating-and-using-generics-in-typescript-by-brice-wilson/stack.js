var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (newItem) {
        this.items.push(newItem);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    return Stack;
}());
var myNumberStack = new Stack();
myNumberStack.push(1);
myNumberStack.push(2);
myNumberStack.push(3);
console.log(myNumberStack.pop()); // 3
console.log(myNumberStack.peek()); // 2
console.log(myNumberStack.pop()); // 2
console.log(myNumberStack.pop()); // 1
