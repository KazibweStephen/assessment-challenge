const chai = require('chai');
const assert = chai.assert;

const convertNumberToWords = require('./numberToWords');

describe('Test for converting numbers to words', () => {
    it('checks if no number is provided', () => {
        assert.equal(convertNumberToWords(), 'Please enter a number!');
    });

    it('checks if it\'s characters', () => {
        assert.equal(convertNumberToWords('some string'), 'Please enter a number!');
    });

    it('checks if it\'s negative number', () => {
        assert.equal(convertNumberToWords(-1), 'Sorry, We don\'t do negative numbers.');
    });

    it('checks if number is too big', () => {
        assert.equal(convertNumberToWords(1000001), 'Wow, That\'s a big number.');
    });

    it('convert 0 to words', () => {
        assert.equal(convertNumberToWords(0), 'zero');
    });

    it('convert 7 to words', () => {
        assert.equal(convertNumberToWords(7), 'seven');
    });

    it('convert 13 to words', () => {
        assert.equal(convertNumberToWords(13), 'thirteen');
    });

    it('convert 754 to words', () => {
        assert.equal(convertNumberToWords(754), 'seven hundred fifty four');
    });

    it('convert 1364 to words', () => {
        assert.equal(convertNumberToWords(1364), 'one thousand, three hundred sixty four');
    });

    it('convert 99999 to words', ()=> {
        assert.equal(convertNumberToWords(99999), 'ninety nine thousand, nine hundred ninety nine');
    });

    it('convert 950950 to words', ()=> {
        assert.equal(convertNumberToWords(950950), 'nine hundred fifty thousand, nine hundred fifty');
    });

    it('convert 1000000 to words', () => {
        assert.equal(convertNumberToWords(1000000), 'one million.');
    });
});
