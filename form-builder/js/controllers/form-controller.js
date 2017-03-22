app.controller('FormController', ['$scope', '$rootScope', '$routeParams', 'userGrid',
  function($scope, $rootScope, $routeParams, userGrid) {
    $scope.forms = [];
    var usergrid = userGrid.getUserGrid();
    
    $scope.getForms = function() {
      usergrid.request({
        method: 'GET',
        endpoint: 'forms',
      }, function(err, data) {
        if (data) {
          $scope.forms = data.entities;
          $scope.$apply();
        } else {
          console.log("Something went Wrong please try again!!!!");
        }
      });
    };

    $scope.getForm = function() {
      if (!$routeParams.id) {
        $rootScope.form = {};
        return;
      }
      usergrid.request({
        method: 'GET',
        endpoint: 'forms/' + $routeParams.id
      }, function(err, data) {
        if (data) {
          $rootScope.form = data.entities[0];
          $rootScope.renderForm = true;
          $rootScope.$on('formUpdate', function(event, form) {
            angular.merge($rootScope.form, form);
            $rootScope.renderForm = false;
            setTimeout(function() {
              $rootScope.renderForm = true;
            }, 10);
          });
          $rootScope.form.components = _.cloneDeep($rootScope.form.components);
        } else {
          console.log("Something went Wrong please try again!!!!");
        }
      });
    };

    $scope.saveForm = function() {
      var formId = $routeParams.id ? $routeParams.id : "";
      usergrid.request({
        method: formId ? "PUT" : "POST",
        endpoint: 'forms/' + formId,
        body: {
          components: $rootScope.form.components,
          name: $rootScope.form.name
        }
      }, function(err, data) {
        if (data) {
          console.log("Sucessfully Updated");
        } else {
          console.log("Something went Wrong please try again!!!!");
        }
      });
    }
  }
]);
