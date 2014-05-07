function CustomersController() {
    this.sortBy = 'name';
    this.reverse = false;

    this.customers = [{name:'John', city:'New York', joined:'2014-01-02'},{name:'Tom', city:'Austin', orderTotal:12},{name:'Jackie', city:'Los Angeles', orderTotal:14.39},{name:'John', city:'Seattle', orderTotal:44.444432}]
    this.doSort = function(propName) {
        this.sortBy = propName;
        this.reverse = !this.reverse;
    };
}