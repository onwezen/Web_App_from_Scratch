//Add event listener
var handler = {
    init: function(){
      this.soundcloudHandler();
      this.swipeHandler();
    },
    soundcloudHandler: function () {
        $('#soundcloud-submit').removeEventListener('click', soundcloud.getSoundcloudUser);

        $('#soundcloud-submit').addEventListener('click', soundcloud.getSoundcloudUser);
    },
    swipeHandler: function(){
//        var main = $('#main-container');
//        var hammer = new Hammer(main);
//        hammer.on('swipe', function (ev) {
//            window.location('#swipe')
//        });
//        hammer.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL});
        $('body').addEventListener('touchend', function () {
            show($('#swipe-section'));
            //soundcloud.getSoundcloudUser();
        });
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', motionHandling.deviceMotionHandler, false);
        }
    },
}
var motionHandling = {
    deviceMotionHandler: function (eventData) {
        var gravity, xyz = "[X, Y, Z]";

        // Grab the acceleration including gravity from the results
        var acceleration = eventData.accelerationIncludingGravity;
        info = xyz.replace("X", acceleration.x);
        info = info.replace("Y", acceleration.y);
        info = info.replace("Z", acceleration.z);
        document.getElementById("gravity").innerHTML = gravity;
    },
}

