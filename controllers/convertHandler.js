function ConvertHandler() {

  this.getNum = function (input) {
    // Match the number part (can be whole, decimal, or fraction)
    const numRegex = /^([\d./]+)/;
    const numMatch = input.match(numRegex);

    if (!numMatch) return 1; // Default to 1 if no number provided

    const numStr = numMatch[0];

    // Check for double fractions
    if (numStr.split('/').length > 2) return 'invalid number';

    // Evaluate fractions
    if (numStr.includes('/')) {
      const [numerator, denominator] = numStr.split('/');
      if (isNaN(numerator) || isNaN(denominator)) return 'invalid number';
      return parseFloat(numerator) / parseFloat(denominator);
    }

    const result = parseFloat(numStr);
    return isNaN(result) ? 'invalid number' : result;
  };

  this.getUnit = function (input) {
    // Match the unit part (must be at end of string)
    const unitRegex = /[a-zA-Z]+$/;
    const unitMatch = input.match(unitRegex);

    if (!unitMatch) return 'invalid unit';

    const unit = unitMatch[0].toLowerCase();
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];

    // Special case for liters which can be L or l
    if (unit === 'l') return 'L';

    return validUnits.includes(unit) ? unit : 'invalid unit';
  };

  this.getReturnUnit = function (initUnit) {
    const unitMap = {
      'gal': 'L',
      'L': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs'
    };

    return unitMap[initUnit];
  };

  this.spellOutUnit = function (unit) {
    const unitSpellings = {
      'gal': 'gallons',
      'L': 'liters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms'
    };

    return unitSpellings[unit];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        result = null;
    }

    // Round to 5 decimal places
    return result ? parseFloat(result.toFixed(5)) : null;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;