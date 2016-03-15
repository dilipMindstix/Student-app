app.factory('paginationService', function paginationService($http) 
{
    var service = {
      getPage: getPage
    };

    return service;

    function getPage(page) 
    {
      return $http.get('/page/' + (page+1)).then(function(response) 
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