app.controller('studentController', function($scope, $http,studentService,courseService) 
{
  /*Reading students data */
	$scope.sortType     = 'name'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchRoll   = '';     // set the default search/filter term  
	$scope.students=[]; //all students
	$scope.courses={}; // all courses
	
	$scope.showDiv=[];
	studentService.getStudent(function(students) 
	{
		$scope.students=students;
		
		for(var i=0;i<$scope.students.length;i++)
		{
			$scope.showDiv[i]=false;
		}
	})

	courseService.getCources(function(courseData){
		$scope.courses=courseData;
	})

	$scope.resortWhenclick=function(type){
		$scope.sortReverse=!$scope.sortReverse;
		$scope.sortType=type;
	}	

	$scope.removeStudent=function(student){
		for(var i=0;i<$scope.students.length;i++)
	    {
	      if($scope.students[i] == student)
	      {
	         $scope.students.splice(i,1);     
	      }
	    }    
	}

	$scope.name="";
	$scope.course="";
	$scope.roll="";

	$scope.addStudent=function(name,course,roll)
	{
		var temp={};
		temp.name=name;
		temp.course=course;
		temp.roll=roll;

		this.students.push(temp);

		$scope.name="";
		$scope.course="";
		$scope.roll="";
	}
});
