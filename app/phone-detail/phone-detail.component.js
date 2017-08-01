'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;

/*在phoneDetail控制器中，我们创建了一个mainImageUrl模型属性，
并且设置默认值为第一个手机图片的URL。而setImage()是事件处理程序，用于改变mainImageUrl。*/

       /* self.setImage=function setImage(imageUrl){
          self.mainImageUrl=imageUrl;
        }*/

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
          self.phone = response.data;
          self.setImage(self.phone.images[0]);
        });
      }
    ]
  });
