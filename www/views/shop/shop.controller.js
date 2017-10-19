(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'王睿',
        ab:'',
        name1:'王睿',
        phone:'15880133659',
        phone1:'15880133659',
        createTime:'2017-10-4 15:30:00',
        email:'1556126736@qq.com',
        hylx:'111'
      });
    });
  }])
})();
