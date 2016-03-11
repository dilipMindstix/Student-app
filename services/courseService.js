app.service('courseService', function($http) {
    var service = this;
    var courses = {};
    service.getCources = function(successfun) {
        $http.get("json/allCourses.json")
            .then(function(response) {
                courses = response.data;
                successfun(courses);
            });
    }
});