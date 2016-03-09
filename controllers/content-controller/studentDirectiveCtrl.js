app.controller("studentDirectiveCtrl",function($scope,$http,courseService){
	$scope.add="pune";

	$scope.aName="";
	$scope.aCourse="";
	$scope.aRoll="";

	  $scope.addData=function(name,course,roll)
	  {
	    var temp={};
	    temp.name=name;
	    temp.course=course;
	    temp.roll=roll;

	    this.records.push(temp);

	    $scope.aName="";
	    $scope.aCourse="";
	    $scope.aRoll="";
	  }
});