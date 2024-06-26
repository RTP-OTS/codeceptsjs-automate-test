const { I } = inject();

module.exports = {
  fields: {
    finishButton: 'button[name="finish"]'
  },
  verifyItem(itemName) {
    I.see(itemName, '.inventory_item_name');
  },
  finishCheckout() {
    I.click(this.fields.finishButton);
  }
}
