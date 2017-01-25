(function (){
    'use strict';
    
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
    
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController ($scope)
    {
        $scope.name = "";
        $scope.ans = null;
        
        $scope.action = function () {
            
            $scope.name .replace(/\s/g, '')  
            $scope.str = $scope.name.trim().split(",");
            console.log($scope.str.length);  
            
            if ($scope.name.length == 0) {
                $scope.ans = "Please enter data first";
            } else if($scope.str.length <= 3) {
               $scope.ans = "Enjoy!"; 
            } else if ($scope.str.length > 3) {
               $scope.ans = "Too Much!"; 
            } 
        };
    }
})();