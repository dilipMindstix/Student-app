app.service('authenticateLogin', function($http) {
    var service = this;
    var loginData = {};
    service.isExist = function(uid, pass, successfun) {
        var exist = false;
        var index = undefined;
        //return exist or not i.e, true or false;
        $http.get("json/loginDetail.json")
            .then(function(response) {
                loginData = response.data;
                for (var i = 0; i < loginData.length; i++) {
                    if ((loginData[i].uid == uid) && (loginData[i].password == pass)) {
                        exist = true
                        index = i;
                    }
                };
                successfun(exist, index);
            });

    }
});