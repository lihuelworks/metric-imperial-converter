const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    // Test 1: convertHandler should correctly read a whole number input.
    test('convertHandler should correctly read a whole number input', function () {
        assert.equal(convertHandler.getNum('4gal'), 4);
    });

    // Test 2: convertHandler should correctly read a decimal number input.
    test('convertHandler should correctly read a decimal number input', function () {
        assert.equal(convertHandler.getNum('5.4lbs'), 5.4);
    });

    // Test 3: convertHandler should correctly read a fractional input.
    test('convertHandler should correctly read a fractional input', function () {
        assert.equal(convertHandler.getNum('1/2km'), 0.5);
    });

    // Test 4: convertHandler should correctly read a fractional input with a decimal.
    test('convertHandler should correctly read a fractional input with a decimal', function () {
        assert.equal(convertHandler.getNum('5.4/2mi'), 2.7);
    });

    // Test 5: convertHandler should correctly return an error on a double-fraction.
    test('convertHandler should correctly return an error on a double-fraction', function () {
        assert.equal(convertHandler.getNum('3/2/3kg'), 'invalid number');
    });

    // Test 6: convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function () {
        assert.equal(convertHandler.getNum('lbs'), 1);
    });

    // Test 7: convertHandler should correctly read each valid input unit.
    test('convertHandler should correctly read each valid input unit', function () {
        assert.equal(convertHandler.getUnit('4gal'), 'gal');
        assert.equal(convertHandler.getUnit('5.4lbs'), 'lbs');
        assert.equal(convertHandler.getUnit('1/2km'), 'km');
        assert.equal(convertHandler.getUnit('5.4/2mi'), 'mi');
        assert.equal(convertHandler.getUnit('3.5L'), 'L');
        assert.equal(convertHandler.getUnit('kg'), 'kg');
    });

    // Test 8: convertHandler should correctly return an error for an invalid input unit.
    test('convertHandler should correctly return an error for an invalid input unit', function () {
        assert.equal(convertHandler.getUnit('4gals'), 'invalid unit');
        assert.equal(convertHandler.getUnit('5.4pounds'), 'invalid unit');
        assert.equal(convertHandler.getUnit('1/2kms'), 'invalid unit');
    });

    // Test 9: convertHandler should return the correct return unit for each valid input unit.
    test('convertHandler should return the correct return unit for each valid input unit', function () {
        assert.equal(convertHandler.getReturnUnit('gal'), 'L');
        assert.equal(convertHandler.getReturnUnit('L'), 'gal');
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
        assert.equal(convertHandler.getReturnUnit('km'), 'mi');
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
    });

    // Test 10: convertHandler should correctly return the spelled-out string unit for each valid input unit.
    test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function () {
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
        assert.equal(convertHandler.spellOutUnit('L'), 'liters');
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
        assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
        assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
        assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
    });

    // Test 11: convertHandler should correctly convert gal to L.
    test('convertHandler should correctly convert gal to L', function () {
        assert.approximately(convertHandler.convert(4, 'gal'), 15.14164, 0.1);
    });

    // Test 12: convertHandler should correctly convert L to gal.
    test('convertHandler should correctly convert L to gal', function () {
        assert.approximately(convertHandler.convert(15.14164, 'L'), 4, 0.1);
    });

    // Test 13: convertHandler should correctly convert mi to km.
    test('convertHandler should correctly convert mi to km', function () {
        assert.approximately(convertHandler.convert(5, 'mi'), 8.0467, 0.1);
    });

    // Test 14: convertHandler should correctly convert km to mi.
    test('convertHandler should correctly convert km to mi', function () {
        assert.approximately(convertHandler.convert(8.0467, 'km'), 5, 0.1);
    });

    // Test 15: convertHandler should correctly convert lbs to kg.
    test('convertHandler should correctly convert lbs to kg', function () {
        assert.approximately(convertHandler.convert(10, 'lbs'), 4.53592, 0.1);
    });

    // Test 16: convertHandler should correctly convert kg to lbs.
    test('convertHandler should correctly convert kg to lbs', function () {
        assert.approximately(convertHandler.convert(4.53592, 'kg'), 10, 0.1);
    });
});