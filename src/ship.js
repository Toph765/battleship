const Ship = (n) => {
  const ship = [];
  let shipObj = {};

  for (let i = 0; i < n; i++) {
    ship.push(0);
  }

  shipObj["ship"] = ship;
  shipObj["length"] = ship.length;
  shipObj["hitCount"] = 0;
  shipObj["sunk"] = false;

  const getShip = () => shipObj;

  const hit = () => {
    shipObj.hitCount += 1;
    if (shipObj.hitCount === shipObj.length) shipObj.sunk = true;
  };

  const isSunk = () => {
    return shipObj.sunk === true ? true : false;
  };

  return {
    getShip,
    hit,
    isSunk,
  };
};

export { Ship };
