
    window.onload = function () {
        var OriginTitile = document.title;
        var titleTime;
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                $('[rel="shortcut icon"]').attr('href', "fail.ico");
                document.title = '(●—●)喔哟，崩溃啦！';
                clearTimeout(titleTime);
            } else {
                $('[rel="shortcut icon"]').attr('href', "favicon.ico");
                document.title = '(/≧▽≦/)咦！又好了！' + OriginTitile;
                titleTime = setTimeout(function () {
                    document.title = OriginTitile;
                }, 2000);
            }
        });
    }

