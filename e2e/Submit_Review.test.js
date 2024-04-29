/* eslint-disable new-cap */
Feature('Review');

Scenario('adding reviews and ensuring reviews are sent', async ({I}) => {
  I.amOnPage('/');

  I.seeElement('.post__item-title a');
  I.click(locate('.post__item-title a').first());

  I.seeElement('.review');
  const name = 'Rizki';
  const review = 'Mantapnyo';

  I.fillField('input#name-input', name);
  I.seeInField('input#name-input', name);
  I.fillField('input#review-input', review);
  I.seeInField('input#review-input', review);

  I.click('.review__form-btn');
  I.click('.swal-button--confirm');

  I.see(name, '.review__detail-name');
  I.see(review, '.review__detail-description');
});
