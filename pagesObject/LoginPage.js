const { I } = inject();

module.exports = {
  url: 'https://www.saucedemo.com/',
  fields: {
    username: 'input[name="user-name"]',
    password: 'input[name="password"]',
    loginButton: 'input[name="login-button"]'
  },
  login(username, password) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.fields.loginButton);
  }
}
