class Customer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    private announce() {
        return "Hello, my name is " + this.name;
    }
}

class SpecialCustomer extends Customer {
    // ...
}