$(document).ready(function(){

    $('div.m-tb1').hide();
    $('div.m-tb2').hide();
    $('div.m-tb3').hide();
    $('button#bt1').click(function () {
        $('div.m-tb1').show();
        $('div.m-tb2').hide();
        $('div.m-tb3').hide();
        $('button#bt1').css("background", "rgb(144, 144, 144)")
        $('button#bt2').css("background", "rgb(200, 200, 200)")
        $('button#bt3').css("background", "rgb(200, 200, 200)")
        $('div#bigImg').hide();
    });
    $('button#bt2').click(function () {
        $('div.m-tb1').hide();
        $('div.m-tb2').show();
        $('div.m-tb3').hide();
        $('button#bt2').css("background", "rgb(144, 144, 144)")
        $('button#bt3').css("background", "rgb(200, 200, 200)")
        $('button#bt1').css("background", "rgb(200, 200, 200)")
        $('div#bigImg').hide();
    });
    $('button#bt3').click(function () {
        $('div.m-tb1').hide();
        $('div.m-tb2').hide();
        $('div.m-tb3').show();
        $('button#bt3').css("background", "rgb(144, 144, 144)")
        $('button#bt2').css("background", "rgb(200, 200, 200)")
        $('button#bt1').css("background", "rgb(200, 200, 200)")
        $('div#bigImg').hide();
    });

    /**
     * tb1
     */
    $("div#bigImg").hide();
    $("div.m-img").click(function(){
        let path=$(this).css("background-image");
        $("div#bigImg").show().attr("style", "background-image:"+path);
        // $("img.max-img").fadeIn('slow');
    });


    /**
     * tb2
     */
    let n = $('ul.m-list').children().length;
    $('button.u-add').click(function () {

        $('ul.m-list').append(function () {
            return'<li>'+
                '<input type="text">'+
                '<button class="delete">Delete</button>'+
                '</li>'
        });
        n++;
    });

    $('ul.m-list').on('click','.delete',function () {
        $(this).parent().remove();
    })
});