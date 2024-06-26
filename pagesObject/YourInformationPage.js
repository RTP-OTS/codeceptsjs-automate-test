const { I } = inject();

module.exports = {
  fields: {
    firstName: 'input[name="firstName"]',
    lastName: 'input[name="lastName"]',
    postalCode: '#postal-code',
    continueButton: 'input[name="continue"]'
  },
  fillInformation(firstName, lastName, postalCode) {
    I.fillField(this.fields.firstName, firstName);
    I.fillField(this.fields.lastName, lastName);
    I.fillField(this.fields.postalCode, postalCode);
    I.click(this.fields.continueButton);
  }
}
