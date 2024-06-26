const { I } = inject();

module.exports = {
  fields: {
    backToProductsButton: 'button[name="back-to-products"]'
  },
  verifyThankYouMessage() {
    I.see('Thank you for your order!', '.complete-header');
  },
  backToProducts() {
    I.click(this.fields.backToProductsButton);
  }
}
