/* eslint-disable new-cap */
const assert = require('assert');
Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('Must be able to like and dislike', async ({I}) => {
  I.see('No Favorite Restaurant', '#caption');

  I.amOnPage('/');

  I.seeElement('.post__item-title a');
  const firstRestaurant = locate('.post__item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.click('.swal-button--confirm');

  I.amOnPage('/#/favorite');
  I.seeElement('.post__item');
  const likedRestaurantTitle = await I.grabTextFrom('.post__item-title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');
  I.click('.swal-button--confirm');

  I.amOnPage('/#/favorite');
  I.see('No Favorite Restaurant', '#caption');
});
