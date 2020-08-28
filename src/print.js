function printOwing(invoice) {
  let outstanding = calCulateOutstanding(invoice);
  invoice.dueDate = recordDueDate(invoice);
  return printDetails(invoice, outstanding);
}
module.exports = {
  printOwing
}

function printDetails(invoice, outstanding) {
  let result='';
  result+=`***********************\n`+
  `**** Customer Owes ****\n`+
  `***********************\n`+
  `name: ${invoice.customer}\n`+
  `amount: ${outstanding}\n`+
  `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
  return result;
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
