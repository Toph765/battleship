const Ship = (n, name) => {
  let shipObj = {};

  shipObj["name"] = name;
  shipObj["length"] = n;
  shipObj["hitCount"] = 0;
  shipObj["sunk"] = false;
  shipObj["orientation"] = "horizontal";
  shipObj["comp"] = [];
  shipObj["hitCoor"] = [];

  const getShip = () => shipObj;

  const hit = () => {
    shipObj.hitCount += 1;
    if (shipObj.hitCount === shipObj.length) shipObj.sunk = true;
  };

  const isSunk = () => {
    return shipObj.sunk === true ? true : false;
  };

  const resetShip = () => {
    shipObj.name = name;
    shipObj.length = n;
    shipObj.hitCount = 0;
    shipObj.sunk = false;
    shipObj.orientation = "horizontal";
    shipObj.comp = [];
    shipObj.hitCoor = [];

    return shipObj;
  };

  return {
    getShip,
    hit,
    isSunk,
    resetShip,
  };
};

export { Ship };
