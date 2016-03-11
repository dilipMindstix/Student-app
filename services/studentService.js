app.service('studentService', function($http) {
    var service = this;
    var students = {};
    service.getStudent = function(successfun) {
        $http.get("json/studentData.json")
            .then(function(response) {
                students = response.data;
                successfun(students);
            });
    }
});