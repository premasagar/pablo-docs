--- 
heading: addClass(name)
category: addClass
---

Adds the specified CSS class to all elements in the collection and returns the collection.

    var rect = Pablo.rect();

    rect.addClass('ringo');
    alert(rect.attr('class')); // 'ringo'