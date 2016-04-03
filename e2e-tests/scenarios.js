'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /Home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/Home");
  });


  describe('Home', function() {

    beforeEach(function() {
      browser.get('index.html#/Home');
    });


    it('should render Home when user navigates to /Home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for Home/);
    });

  });


  describe('About', function() {

    beforeEach(function() {
      browser.get('index.html#/About');
    });


    it('should render About when user navigates to /About', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for About/);
    });

  });
});
