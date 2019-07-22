window.onload = function() {
    ( function conv250() {
        
        var canClick = true;
        var convCategory = document.getElementById('conv250-category');
        var convText = document.getElementById('conv250-text');
        var startWrap = document.getElementById('conv250-start');
        var againBtn = document.getElementById('conv-roll-btn');
        var startBtn = document.getElementById('conv-start-btn');
        
        function rollConvs() {
            return Math.floor(Math.random() * conversationArray.length);
        }
        
        function fadeOut(ele, ms) {
            var opacity = 1;
            var time = 10 / ms;
            var animate = setInterval( frame, 10 );
            function frame() {
                if ( opacity <= 0 ) {
                    clearInterval( frame );
                } else {
                    opacity = opacity - time;
                    ele.style.opacity = opacity;
                }
            }
        }
        
        function fadeIn(ele, ms) {
            var opacity = 0;
            var time = 10 / ms;
            var animate = setInterval( frame, 10 );
            function frame() {
                if ( opacity >= 1 ) {
                    clearInterval( frame );
                } else {
                    opacity = opacity + time;
                    ele.style.opacity = opacity;
                }
            }
        }
        
        function gradientIn(value) {
            var string = "";
            for ( var i = 0; i < value.length; i++ ) {
                (function(x){
                    var delay = x*70;
                    setTimeout( function() {
                        string = string + value[x];
                        convText.innerHTML = string;
                        if ( x === value.length-1 ) {
                            canClick = true;
                        }
                    }, delay)
                })(i);
            }
        }
        
        function again() {
            if ( canClick === true ) {
                canClick = false;
                var index = rollConvs();
                var value = conversationArray[index].value;
                console.log(index+' / '+conversationArray.length);
                convCategory.innerHTML = 'About '+conversationArray[index].category;
                gradientIn(value);
            }
        }
        
        function start() {
            if ( canClick === true ) {
                fadeOut(startWrap, 500);
                again();
                setTimeout( function(){ startWrap.style.display = 'none'; }, 500 );
            }
        }
        
        againBtn.addEventListener( 'click', again );
        startBtn.addEventListener( 'click', start );
        
        
    }());
};




