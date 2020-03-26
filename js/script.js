$(document).ready(function () {
    var hash = {
        decorator: function (node, text) {
            if (text.match(/^[\#][\w]+/)) {
                node.setAttribute('class', 'hashStyle');
            } else {
                node.removeAttribute('class');
            }
            return node;
        }
    };

    $('.checkHash1').autotag(hash);
    $('.checkHash2').autotag(hash);

});