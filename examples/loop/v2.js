'use strict';

var svg = Pablo('#stage').svg({width:1920, height:1024}),
    rect = svg.rect({width:100, height:100, x:0, y:0}),
    animation;


/////


animation = rect.tween([{
        attr: 'x',
        delta: 100,
        per: 1000,
        dur: 6000
    },
    {
        attr: 'y',
        delta: 38,
        per: 1000,
        dur: 6000
    }], false);

rect.on('click', function(){
    rect.toggleAnimation(animation);
});

// Add event listeners
Pablo.animation.on('add', function(obj, callback){console.log('add');});
Pablo.animation.on('remove', function(obj, callback){console.log('remove');});
Pablo.animation.on('start', function(){console.log('start');});
Pablo.animation.on('loop', function(obj, deltaT, timestamp){console.log('loop', deltaT, timestamp);});
Pablo.animation.on('stop', function(){console.log('stop');});