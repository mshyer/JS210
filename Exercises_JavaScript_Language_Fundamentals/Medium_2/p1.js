function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1-discount) * (1 + serviceCharge) * (1 + tax);
}

//the limitation is that the user has no way to ommit an earlier argument without
//affecting the later arguments. For example, if discount is ommitted and sevicecharge is added,
//service charge will actually be assigned to discount and then tax to serviceCharge, and tax will be
//Ommitted!
//
// The limitation they wanted me to say is that because 0 is a falsy value,
// Inputs of 0 will be treated incorrectly as if they were omitted. 
console.log(processOrder(100));
