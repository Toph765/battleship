const Ship = (n) => {
  let shipObj = {};

  shipObj["length"] = n;
  shipObj["hitCount"] = 0;
  shipObj["sunk"] = false;
  shipObj["orientation"] = "horizontal";
  shipObj["xCoor"] = null;
  shipObj["yCoor"] = null;
  shipObj["hitCoor"] = [];

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
