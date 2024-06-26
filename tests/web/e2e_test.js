Feature('Handle web UI');

const loginPage = require('../../pagesObject/LoginPage');
const inventoryPage = require('../../pagesObject/InventoryPage');
const yourInformationPage = require('../../pagesObject/YourInformationPage');
const checkoutOverviewPage = require('../../pagesObject/CheckoutOverviewPage');
const checkoutCompletePage = require('../../pagesObject/CheckoutCompletePage');

Scenario('Handle web UI using CodeceptJS with PageObjects', ({ I }) => {
  // เปิดหน้าเว็บและเข้าสู่ระบบ
  I.amOnPage(loginPage.url);
  loginPage.login('standard_user', 'secret_sauce');

  // หน้า inventory
  inventoryPage.addToCart();
  I.see('1', inventoryPage.fields.cartBadge);
  inventoryPage.openCart();

  // หน้า Cart
  inventoryPage.proceedToCheckout();

  // หน้า Your Information
  yourInformationPage.fillInformation('Gold', 'D Roger', '99999');

  // หน้า Checkout: Overview
  checkoutOverviewPage.verifyItem('Sauce Labs Backpack');
  checkoutOverviewPage.finishCheckout();

  // หน้า Checkout: Complete!
  checkoutCompletePage.verifyThankYouMessage();
  checkoutCompletePage.backToProducts();
});
