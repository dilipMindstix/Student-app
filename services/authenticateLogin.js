app.service('authenticateLogin', function($http) 
{
    this.getUser= function(id) 
    {
        return $http.get('/person/' + id).then(
            function(response) {
                return response.data;
            },
            function(error) {
                if (error.status && error.status === 404) {
                    return error.data;
                } else {
                    return "Unexpected request";
                }
            }
        );
    }
});