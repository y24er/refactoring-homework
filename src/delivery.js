function deliveryDate(anOrder, isRush) {
  if (isRush) {
    let deliveryTime;
    if (isDeliveryStateIsMAOrCT(anOrder)) {
      deliveryTime = 1;
      return plusDay(anOrder, deliveryTime, 1);
    }
    if (isDeliveryStateIsNYOrNH(anOrder)) {
      deliveryTime = 2;
    }
    else {
      deliveryTime = 3;
    }
    return plusDay(anOrder, deliveryTime, 1);
  }
  else {
    let deliveryTime;
    if (isDeliveryStateIsMAOrCTorNY(anOrder)) {
      deliveryTime = 2;
      return plusDay(anOrder, deliveryTime, 2);
    }
    if (isDeliveryStateIsMEOrNH(anOrder)) {
      deliveryTime = 3;
    }
    else {
      deliveryTime = 4;
    }
    return plusDay(anOrder, deliveryTime, 2);
  }
}
module.exports = {
  deliveryDate
}

function isDeliveryStateIsMEOrNH(anOrder) {
  return [
    'ME',
    'NH',
  ].includes(anOrder.deliveryState);
}

function isDeliveryStateIsMAOrCTorNY(anOrder) {
  return [
    'MA',
    'CT',
    'NY',
  ].includes(anOrder.deliveryState);
}

function plusDay(anOrder, deliveryTime, plusNum) {
  return anOrder.placedOn.plusDays(plusNum + deliveryTime);
}

function isDeliveryStateIsNYOrNH(anOrder) {
  return [
    'NY',
    'NH',
  ].includes(anOrder.deliveryState);
}

function isDeliveryStateIsMAOrCT(anOrder) {
  return [
    'MA',
    'CT',
  ].includes(anOrder.deliveryState);
}
