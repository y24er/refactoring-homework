function printOwing(invoice) {
  
  // calculate outstanding
  let outstanding = calCulateOutstanding(invoice);
  
  // record due date
  invoice.dueDate = recordDueDate(invoice);
  
  // print details
  printDetails(invoice, outstanding);
}
module.exports = {
  printOwing
}

function printDetails(invoice, outstanding) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function calCulateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}
