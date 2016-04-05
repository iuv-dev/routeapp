'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /menu/Home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/menu/Home");
  });


  describe('Home', function() {

    beforeEach(function() {
      browser.get('index.html#/menu/Home');
    });


    it('should render Home when user navigates to /menu/Home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for Home/);
    });

  });


  describe('About', function() {

    beforeEach(function() {
      browser.get('index.html#/menu/About');
    });


    it('should render About when user navigates to /menu/About', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for About/);
    });

  });
});
