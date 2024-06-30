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

});
