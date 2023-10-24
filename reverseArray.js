class Order {
  constructor(orderId, timeOfEntry) {
    this.orderId = orderId;
    this.timeOfEntry = timeOfEntry;
  }
}

class OrderManager {
  constructor() {
    this.orderMap = new Map();
  }

  addOrder(order) {
    this.orderMap.set(order.orderId, order);
  }

  search(startTime, endTime) {
    const result = [];
    for (const order of this.orderMap.values()) {
      if (order.timeOfEntry >= startTime && order.timeOfEntry <= endTime) {
        result.push(order);
      }
    }
    return result;
  }
}

const newSearch = new OrderManager();

console.log("asdfasdf");
console.log(newSearch.search("abc", 234));
