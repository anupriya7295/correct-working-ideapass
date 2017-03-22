var app = angular.module('formBuilder', ["ngRoute", "ui.bootstrap", "ui.select", "formio", "ngFormBuilder", "ngJsonExplorer"]);

app.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
  }
]);

app.run(["$rootScope", 'global_constant',
  function($rootScope, global_constant) {
    $rootScope.displays = [{
      name: 'form',
      title: 'Form'
    }, {
      name: 'wizard',
      title: 'Wizard'
    }];

    $rootScope.forms = {};

    // $rootScope.userGrid = new Usergrid.Client({
    //   orgName: global_constant.orgName,
    //   appName: global_constant.appName,
    //   URI: global_constant.URI,
    //   client_id: global_constant.client_id,
    //   client_secret: global_constant.client_secret,
    //   buildCurl: global_constant.buildCurl
    // });
  }
]);

app.factory('userGrid',function(global_constant){
  return {
    getUserGrid:function(){
      var userGrid = new  Usergrid.Client({
        orgName: global_constant.orgName,
        appName: global_constant.appName,
        URI: global_constant.URI,
        client_id: global_constant.client_id,
        client_secret: global_constant.client_secret,
        buildCurl: false
      });
      return userGrid;
    }
  }
});
