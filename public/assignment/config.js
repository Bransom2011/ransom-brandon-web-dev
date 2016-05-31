(function(){
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: 'LoginController',
                controllerAs:"model"
            })

            .when("/register", {
                templateUrl: "views/user/register.view.client.html"
            })
        


    }
})();
