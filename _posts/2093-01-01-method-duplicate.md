--- 
heading: duplicate([repeats])
category: duplicate
---

Performs a *deep* clone on all the elements in the collection, inserts the new elements *after* the original elements in the DOM, and adds the new elements to the collection (i.e. it modifies the length of the original collection). `repeats` is an optional number of times to duplicate the elements (default `1`).

In this example, a square is duplicated five times:

    var paper = Pablo(demoElement).svg({height:40})
    square = paper.rect({width:40, height:40});
    
    square.duplicate(5)
        // Set x position for each element
        .attr('x', function(el, i){
            return i * 50;
        });