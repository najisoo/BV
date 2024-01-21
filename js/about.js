window.addEventListener('DOMContentLoaded', function () {

    $('#section01 .se01_text01').addClass('on')
    $('#section01 .se01_text02').addClass('on')
    $('#section01 .se01_img01').addClass('on')

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if (scrollTop >= 860) {
            $('#section02 .se02_img01').addClass('on')
            $('#section02 .se02_img02').addClass('on')
            $('#section02 .se02_img04').addClass('on')
            $('#section02 .se02_img05').addClass('on')

        }

        if (scrollTop >= 2100) {
            $('#section03 .se03_img01').addClass('on')
            $('#section03 .se03_img02').addClass('on')
            $('#section03 .se03_img03').addClass('on')
            $('#section03 .se03_img04').addClass('on')
            $('#section03 .se03_img06').addClass('on')
        }


        if (scrollTop >= 4800) {
            $('#section05 .se05_img01').addClass('on')
            $('#section05 .se05_img02').addClass('on')
            $('#section05 .se05_img03').addClass('on')


        }

        if (scrollTop >= 6100) {
            $('#section06 .se06_img01').addClass('on')
            $('#section06 .se06_img02').addClass('on')
            $('#section06 .se06_img03').addClass('on')
            $('#section06 .se06_img04').addClass('on')
            $('#section06 .se06_img05').addClass('on')
            $('#section06 .se06_img06').addClass('on')
            $('#section06 .se06_img07').addClass('on')
            $('#section06 .se06_img08').addClass('on')
            $('#section06 .se06_img09').addClass('on')
            $('#section06 .se06_img09_2').addClass('on')
            $('#section06 .se06_img09_3').addClass('on')


        }











    });



    /*  slide,click event section */
    let sc02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02,
        trigger: "#section05",
        start: "-400px top",
        end: "bottom bottom",
        scrub: 1,
    });

    sc02.to(".se05_img04 img",{filter:'grayscale(0)',scale:1},0);




    $('#section04 .se04_text_box > div').click(function () {
        $('#section04 .se04_text_box > div').removeClass('on')
        $(this).addClass('on')
    })
































































})


