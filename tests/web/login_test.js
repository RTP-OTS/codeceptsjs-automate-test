Feature('Handle web UI');

Scenario('Handle web UI using CodeceptJS', ({ I }) => {
  // เปิดหน้าเว็บ
  I.amOnPage('https://www.saucedemo.com/');
  
  // เข้าสู่ระบบ
  I.fillField('Username', 'standard_user');
  I.fillField('Password', 'secret_sauce');
  I.click('Login');

  // หน้า inventory
  I.click('button[name="add-to-cart-sauce-labs-backpack"]');
  I.see('1', '.shopping_cart_badge');
  I.click('.shopping_cart_badge');

  // หน้า Cart
  I.click('button[name="checkout"]');

  // หน้า Your Information
  I.fillField('First Name', 'Gold');
  I.fillField('Last Name', 'D Roger');
  I.fillField('#postal-code', '99999');
  I.click('input[name="continue"]');

  // หน้า Checkout: Overview
  I.see('Sauce Labs Backpack', '.inventory_item_name');
  I.click('button[name="finish"]');

  // หน้า Checkout: Complete!
  I.see('Thank you for your order!', '.complete-header');
  I.click('button[name="back-to-products"]');
});
