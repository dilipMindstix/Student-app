app.controller('studentController', function($scope, $http, $rootScope, studentService, courseService, paginationService) {
    /*Reading students data */
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false; // set the default sort order
    $scope.searchRoll = ''; // set the default search/filter term  
    $scope.students = []; //all students
    $scope.courses = {}; // all courses

    //variable for pagination
    $scope.totalRecord = undefined;
    $scope.recordFrom = 0;
    $rootScope.rpp = 5;


    $scope.showDiv = [];
    studentService.getStudent(function(students) {
        $scope.students = students;
        $scope.totalRecord = students.length;
        for (var i = 0; i < $scope.students.length; i++) {
            $scope.showDiv[i] = false;
        }
    })

    courseService.getCources(function(courseData) {
        $scope.courses = courseData;
    })

    $scope.resortWhenclick = function(type) {
        $scope.sortReverse = !$scope.sortReverse;
        $scope.sortType = type;
    }

    $scope.removeStudent = function(student) {
        for (var i = 0; i < $scope.students.length; i++) {
            if ($scope.students[i] == student) {
                $scope.students.splice(i, 1);
            }
        }
    }

    $scope.name = "";
    $scope.course = "";
    $scope.roll = "";

    $scope.addStudent = function(name, course, roll) {
        var temp = {};
        temp.name = name;
        temp.course = course;
        temp.roll = roll;

        this.students.push(temp);

        $scope.name = "";
        $scope.course = "";
        $scope.roll = "";
    }

    $scope.linkPerPage = function() {
        $scope.totalRecord = $scope.students.length;
        return (Math.floor($scope.totalRecord / $rootScope.rpp) + 1);
    }

    $scope.gotoPage = function(page) 
    {
        
        paginationService.getPage(page).then(function(data) 
        {   
            if (typeof data === "string") 
            {
                // in case page not found
                $scope.message = data;
            } 
            else 
            {
                //in case page found
                $scope.message = null;
               // $scope.recordFrom = ($rootScope.rpp * page);
            }
        })
        $scope.recordFrom = ($rootScope.rpp * page);
    }
    
    $scope.gotoNextPage = function() {
        if ($scope.recordFrom <= ($scope.totalRecord - $rootScope.rpp)) {
            $scope.recordFrom = ($scope.recordFrom + $rootScope.rpp);

        } else {

        }
    }
    $scope.gotoPrevPage = function() 
    {
        if ($scope.recordFrom >= ($rootScope.rpp)) 
        {
            $scope.recordFrom = ($scope.recordFrom - $rootScope.rpp);

        } 
        else 
        {

        }
    }

    $scope.setPaginationClass = function(page) 
    {
        var className = "class='active'";
        return className;
    }

});