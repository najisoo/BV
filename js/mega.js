window.addEventListener('DOMContentLoaded', function () {

    $('.se01_icon01').click(function () {
        $('#mega_menu').addClass('on')
    })
    $('.menu_se01_icon01').click(function () {
        $('#mega_menu').removeClass('on')
        $('#mega_menu .menu_text_box > div').removeClass('on')
    })


    $('#mega_menu .under_box > div:nth-child(2)').click(function () {
        $('#mega_menu .menu_bag').addClass('on')
    })

    $('#mega_menu .menu_bag .arrow').click(function () {
        $('#mega_menu .menu_bag').removeClass('on')
        $('#mega_menu .menu_text_list01').addClass('on')
    })


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


    });


    /*  slide,click event section */


    $('#mega_menu .menu_text_box .menu_text_list01').click(function () {
        $('#mega_menu .menu_text_box .menu_text_list01').toggleClass('on')
        $('#mega_menu .menu_text_box > div .top_box .plus').toggleClass('on')
    })

    $('.under_box > div').mouseenter(function () {
        $('#mega_menu .menu_se01_text_group div').removeClass('on')
        $('#mega_menu .menu_se01_img_group div').removeClass('on')

        let v = $('.under_box > div').index(this)

        $('#mega_menu .menu_se01_text_group div').eq(v).addClass('on')
        $('#mega_menu .menu_se01_img_group div').eq(v).addClass('on')

    })




















































































































































})


