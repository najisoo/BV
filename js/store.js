window.addEventListener('DOMContentLoaded', function () {
    $('#section01 .se01_text01').addClass('on')
    $('#section01 .se01_img04').addClass('on')
    $('#section01 .se01_img06').addClass('on')
    $('#section01 .se01_img08').addClass('on')


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if (scrollTop >= 750) {
            $('#section02 .se02_img01').addClass('on')
            $('#section02 .se02_img06').addClass('on')
        }


        if (scrollTop >= 1400) {
            $('#section02 .se02_img10').addClass('on')
        }

        if (scrollTop >= 1950) {
            $('#section02 .se02_img14').addClass('on')
            $('#section02 .se02_img18').addClass('on')
        }


    });


    /*  slide,click event section */

    $('#section02 .se02_img01').mouseenter(function () {
        $('.se02_img01_00').addClass('on')
        $('.se02_img01_01').addClass('on')
        $('.se02_img01_dim').addClass('on')


    }).mouseleave(function () {
        $('.se02_img01_00').removeClass('on')
        $('.se02_img01_01').removeClass('on')
        $('.se02_img01_dim').removeClass('on')

    })
    $('#section02 .se02_img06').mouseenter(function () {

        $('.se02_img06_dim').addClass('on')
        $('.se02_img06_00').addClass('on')
        $('.se02_img06_01').addClass('on')


    }).mouseleave(function () {

        $('.se02_img06_dim').removeClass('on')
        $('.se02_img06_00').removeClass('on')
        $('.se02_img06_01').removeClass('on')

    })

    $('#section02 .se02_img10').mouseenter(function () {

        $('.se02_img10_dim').addClass('on')

        $('.se02_img10_00').addClass('on')
        $('.se02_img10_01').addClass('on')


    }).mouseleave(function () {

        $('.se02_img10_dim').removeClass('on')

        $('.se02_img10_00').removeClass('on')
        $('.se02_img10_01').removeClass('on')

    })

    $('#section02 .se02_img14').mouseenter(function () {

        $('.se02_img14_dim').addClass('on')

        $('.se02_img14_00').addClass('on')
        $('.se02_img14_01').addClass('on')


    }).mouseleave(function () {

        $('.se02_img14_dim').removeClass('on')

        $('.se02_img14_00').removeClass('on')
        $('.se02_img14_01').removeClass('on')

    })

    $('#section02 .se02_img18').mouseenter(function () {

        $('.se02_img18_dim').addClass('on')

        $('.se02_img18_00').addClass('on')
        $('.se02_img18_01').addClass('on')

    }).mouseleave(function () {

        $('.se02_img18_dim').removeClass('on')

        $('.se02_img18_00').removeClass('on')
        $('.se02_img18_01').removeClass('on')
    })



})


