const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return an error if "fullName" is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if argument is not a string', () => {
    expect(formatFullname(undefined, 20)).to.equal('Error');
    expect(formatFullname(12, 20)).to.equal('Error');
    expect(formatFullname({}, 20)).to.equal('Error');
    expect(formatFullname([], 20)).to.equal('Error');
    expect(formatFullname(function() {}, 20)).to.equal('Error');
  });

	it('should return error if fullName has incorrect format', () => {
		expect(formatFullname('John Doe Test')).to.equal('Error');
		expect(formatFullname('John')).to.equal('Error');
	});

  it('should return an correct format of fullName', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('jOhN dOe')).to.equal('John Doe');
		expect(formatFullname('JOHN DOE')).to.equal('John Doe');
  });

});