---
path: api/Pablo
heading: "Pablo(selectors, [context])"
category: api_pablo
---


Returns a collection of elements that match the specified CSS selectors, or comma-separated list of selectors.

By default, this searches the global `document`, but an optional context element or elements can be passed.

    // A single element, specified by id
    Pablo('#foo');

    // Multiple elements, specified by class
    Pablo('.bar');

    // Multiple selectors
    Pablo('circle, line, #foo, .bar');

    // Complex selectors
    Pablo('#thing g.foo > circle[data-foo=bar]:first-child')


Both SVG and HTML elements can be targeted. Pablo uses the browser’s native selector engine ([`Element.querySelectorAll`][qsa]), so can accept any selector that the browser understands.

If a `context` is given, then only elements that are descendents of the context will be returned. The `context` can be an element, DOM list, array or collection.

    Pablo('.hexagon', myShapes);

This is equivalent to `Pablo(myShapes).find('.hexagon')` - see the [`find()`][find] method.


[qsa]: https://developer.mozilla.org/docs/DOM/Element.querySelectorAll
[find]: /api/find/