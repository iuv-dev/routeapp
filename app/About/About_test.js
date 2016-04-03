'use strict';

describe('myApp.About module', function() {

  beforeEach(module('myApp.view2'));

  describe('About controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('AboutCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});