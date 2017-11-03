var app = angular.module('myApp', []);


app.controller('myCtrl', ['$scope',
  function($scope) {
    var vm = this;

    vm.data = [
{

      name: 'Video Camera  ',
        description: 'That is a video camera which instead of making pictures, it captures continuous moments in life for a period of time.',
        number: 2,
        itemtime: '20171113T00:00:00',
        imagebig: 'tech/videocamera.png',
        thingy: 1

}, 
               
{

      name: 'Camera  ',
        description: 'This is a camera that is good for taking pictures because pictures are beautiful things and art is life.',
        number: 4,
        unavailable: 'The item is unavailable.',
        itemtime: '20171113T00:00:00',
        imagebig: 'tech/camera.png',
        thingy: 2

}, 
    
{

      name: 'iPad ',
        description: 'iPads are kind of small versions of laptops. Though they do less, they are easier to transport, lighter and work somewhat in between of a laptop and a smartphone.',
        number: 0,
        itemtime: '20171113T00:00:00',
        imagebig: 'tech/ipad.png',
        thingy: 3

}, 
        
{

      name: 'Camerastand ',
        description: 'A stand for stability of your videos and photos.',
        number: 5,
        itemtime: '20171113T00:00:00',
        imagebig: 'tech/camerastand.png',
        thingy: 4

}, 
               
{
      name: 'DrawPad  ',
        description: 'Very old versions of digital drawing pads but they still work and do what they were supposed to. You can create very pretty illustrations once you get the hang of it.',
        number: 1,
        itemtime: '20171116T00:00:00',
        imagebig: 'tech/drawpad.png',
        thingy: 5
},
{
      name: 'Gopro  ',
        description: 'Go Pro is your Go To action camera',
        number: 2,
        itemtime: '20171116T00:00:00',
        imagebig: 'tech/gopro.png',
        thingy: 6
    }

];
      
  }
]);

