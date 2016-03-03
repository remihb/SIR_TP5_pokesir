/* jshint
laxcomma:true
, laxbreak:true
, unused : false
*/

'use strict';

window.onresize = function(){
    if ((window.innerHeight/window.innerWidth) > 0.62)
    {
        $('html').css('background-position', 'left bottom');
    }
    else {
        $('html').css('background-position', 'right bottom');
    }
};
