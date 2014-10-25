'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$routeParams', 'MENU', '$route',
        function($scope, $routeParams, MENU, $route) {
            $scope.navHeight = 45;
            $scope.bannerTop = 0;
            $scope.bannerBottom = 43;
            $scope.getSizes = function() {
                var myWidth = 0, myHeight = 0;
                if (typeof (window.innerWidth) === 'number') {
                    //Non-IE
                    myWidth = window.innerWidth;
                    myHeight = window.innerHeight;
                } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                    //IE 6+ in 'standards compliant mode'
                    myWidth = document.documentElement.clientWidth;
                    myHeight = document.documentElement.clientHeight;
                } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                    //IE 4 compatible
                    myWidth = document.body.clientWidth;
                    myHeight = document.body.clientHeight;
                }
                $scope.width = myWidth;
                $scope.height = myHeight;
            };
            $scope.getSizes();
            var clearHeight = $scope.height - $scope.navHeight - $scope.bannerTop - $scope.bannerBottom;
            $scope.iframeHeight = clearHeight+'px';
            
            var container = angular.element(document.querySelector('#iframeContainer'));
            container.css('height',$scope.iframeHeight + 'px');
            
            $scope.menu = MENU;
            $scope.selectedMenu = $scope.menu['serranostandil'];
            $scope.$on('$routeChangeSuccess', function (event, current, previous) {
                $scope.lugar = $routeParams.lugar;
                $scope.selectedMenu = $scope.menu[$scope.lugar];
                 // current is the current route
                 // previous is the previous route
             });
             
            $scope.reloadRoute = function() {
                $route.reload();
            };
        }
    ])
    .controller('DocumentosCtrl', ['$scope', '$routeParams', '$sce', 'DOCUMENTOS',
        function($scope, $routeParams, $sce, DOCUMENTOS) {
            $scope.lugar = $routeParams.lugar;
            $scope.tipo = $routeParams.tipo;
            $scope.documento = $routeParams.documento;
            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            };
            
            $scope.documentos = DOCUMENTOS;
            
            var docId = $scope.lugar+'_'+$scope.tipo+'_'+$scope.documento;
            $scope.googledoclink = $scope.documentos[docId];
            $scope.random = Math.random();
        }
    ]);
