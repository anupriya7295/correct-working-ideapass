app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/template/home.html"
    })
    .when("/forms", {
        templateUrl : "/template/form/forms.html",
        controller : "FormController"
    })
    .when("/builder", {
        templateUrl : "../template/form/builder.html",
        controller : "FormController"
    })
    .when("/preview", {
        templateUrl : "../template/form/preview.html",
        controller : "FormController"
    })
    .when("/blank", {
        templateUrl : "../template/blank.html"
    });
});
