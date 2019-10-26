 $(function(){
            var $level1 = $('.level1')
            $level1.click(function(){
                $(this).next().slideDown()
                // 隐藏：这个人的父级的兄弟的儿子ul
                $(this).parent().siblings().children('ul').slideUp()
            })
        })