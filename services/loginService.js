app.factory('DataService', function DataService($http) 
{
    var service = {
      getUsers: getUsers,
      getUser: getUser
    };

    return service;

    function getUsers()
    {
      return $http.get('/Login').then( function(response) 
      {
          return response.data;
      });
    }

    function getUser(id,password) 
    {
      return $http.get('/Login/' + id).then(function(response) 
      //return $http.get('/Login/' +"?uid = " + id +"&" +"password = " + password).then(function(response) 
      // return $http.get('/Login/', params:{"uid" : id, "password" : password}).then(function(response) 
      {
        return response.data;
      },
      function(error) 
      {
          if (error.status && error.status === 404) 
          {
            return error.data;
          }
          else 
          {
            return "Unexpected request";
          }
      });
    }  
  });
