const { I } = inject();

module.exports = {
  fields: {
    addToCartButton: 'button[name="add-to-cart-sauce-labs-backpack"]',
    cartBadge: '.shopping_cart_badge',
    checkoutButton: 'button[name="checkout"]'
  },
  addToCart() {
    I.click(this.fields.addToCartButton);
  },
  openCart() {
    I.click(this.fields.cartBadge);
  },
  proceedToCheckout() {
    I.click(this.fields.checkoutButton);
  }
}
