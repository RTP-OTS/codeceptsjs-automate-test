const { I } = inject();
const assert = require('chai').assert;

Feature('User Management');

let userid;

Scenario('Get User', async ({ I }) => {
  const response = await I.sendGetRequest('/users?page=2');
  console.log(response.data);
  I.seeResponseCodeIsSuccessful(200);
});

// Scenario('Create User', async () => {
//   const response = await I.sendPostRequest('/users', {
//     name: "Toon",
//     job: "QA Automated"
//   });
//   console.log(response.data);
//   I.seeResponseCodeIs(201);
//   userid = response.data.id;
// });

// Scenario('Update User and verify message after this', async () => {
//   I.say(`User ID to update: ${userid}`);
//   const response = await I.sendPutRequest(`/users/${userid}`, {
//     name: 'Tester',
//     job: 'QA Automated'
//   });
//   I.seeResponseCodeIs(200);
//   assert.equal(response.data.name, 'Tester');
//   assert.equal(response.data.job, 'QA Automated');
// });

// Scenario('Delete user after update', async () => {
//   const response = await I.sendDeleteRequest(`/users/${userid}`);
//   I.seeResponseCodeIs(204);
// });
