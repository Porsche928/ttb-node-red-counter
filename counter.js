/**
    Copyright © 2016 Maxime Journaux
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. 
    See http://www.wtfpl.net for more details.
 **/
 
module.exports = function(RED) {
    "use strict";

    function Counter(n) {
        RED.nodes.createNode(this, n);
        var node = this;

        node.inc = Number(n.inc);
        node.counter = 0;

        node.on("input", function(msg) {
            if(typeof msg.reset != "undefined")
                node.counter = 0;
            else
                node.counter = node.counter + node.inc;
            msg.payload = node.counter;
            node.send(msg);
        });
    }
    RED.nodes.registerType("counter", Counter);
}