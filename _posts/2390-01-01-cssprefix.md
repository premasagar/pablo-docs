--- 
category: cssPrefix
heading: cssPrefix(property, value)
---

Performs the same action as `.css(property, value)`, but also sets the CSS property with each of the common browser vendor prefixes: `-moz-`, `-webkit-`, `-ms-`, `-o-` and `-khtml-`.

    var paper = Pablo(demoElement).svg({height:100}),
        square = paper.rect({
            width: 100,
            height: 100,
            fill: 'purple'
        })
        .cssPrefix('transition', 'opacity 0.5s'),
        opacity = 1;

    // Toggle opacity, set attribute & repeat
    function changeOpacity(){
        opacity = opacity ? 0 : 1;
        square.attr('opacity', opacity);
        window.setTimeout(changeOpacity, 500);
    }
    changeOpacity();

In this example, the last line is equivalent to:

    square.css({
        transition: 'opacity 0.5s',
        '-moz-transition': 'opacity 0.5s',
        '-webkit-transition': 'opacity 0.5s',
        '-ms-transition': 'opacity 0.5s',
        '-o-transition': 'opacity 0.5s',
        '-khtml-transition': 'opacity 0.5s'
    });