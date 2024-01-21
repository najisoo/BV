window.addEventListener('DOMContentLoaded', function () {
    $('#section01 .se01_img10').addClass('on')
    $('#section01 .se01_img11').addClass('on')
    $('#section01 .se01_img12').addClass('on')
    $('#section01 .se01_color').addClass('on')
    $('#section01 .se01_img23').addClass('on')
    $('#section01 .se01_img24').addClass('on')
    $('#section01 .se01_img25').addClass('on')
    $('#section01 .se01_img26').addClass('on')
    $('#section01 .se01_img27').addClass('on')




    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if (scrollTop >= 1500) {
            $('#section02 .se02_img02').addClass('on')
            $('#section02 .se02_img03').addClass('on')
        }


        if (scrollTop >= 4800) {
            $('#section03 .se03_img23').addClass('on')
            $('#section03 .se03_img24').addClass('on')
            $('#section03 .se03_img25').addClass('on')
            $('#section03 .se03_img26').addClass('on')
            $('#section03 .se03_img27').addClass('on')

        }



        
        










    });



    /*  slide,click event section */

    $('.se03_detail_list_box > div').mouseenter(function () {
        $('.se03_img22 > div').removeClass('on')

        let v = $('.se03_detail_list_box > div').index(this)

        $('.se03_img22 > div').eq(v).addClass('on')

    }).mouseleave(function () {
        $('.se03_img22 > div').removeClass('on')
    })



    gsap.to('#section02 .se02_img09 .inner', {
        x: -6479,
        ease: "none",
        duration: 80,
        repeat: -1,
    });
























































})


