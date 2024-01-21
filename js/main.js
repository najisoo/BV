window.addEventListener('DOMContentLoaded', function () {

    $('.se01_icon01').click(function () {
        $('#mega_menu').addClass('on')
    })
    $('.menu_se01_icon01').click(function () {
        $('#mega_menu').removeClass('on')
        $('#mega_menu .menu_text_box > div').removeClass('on')
    })

    $('.se01_icon04').click(function () {
        $('#shopping_bag').addClass('on')
    })
    $('#shopping_bag .shopping_se01_icon01').click(function () {
        $('#shopping_bag').removeClass('on')
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


        if (scrollTop >= 790) {
            $('#section02 .se02_img01').addClass('on')
            $('#section02 .se02_img02').addClass('on')
            $('#section02 .se02_img03').addClass('on')
            $('#section02 .se02_img04').addClass('on')
        }


        if (scrollTop >= 1422) {
            // $('#section02 .se02_img04').addClass('on')
            $('#section02 .se02_img05').addClass('on')
            $('#section02 .se02_img06').addClass('on')
        }

        if (scrollTop >= 2200) {
            // $('#section02 .se02_img04').addClass('on')
            $('#section03 .se03_img01').addClass('on')
            $('#section03 .se03_img02').addClass('on')
            $('#section03 .se03_img03').addClass('on')
        }
    });


    /*  slide,click event section */

    // gsap.to('#section01 .se01_img .se01_text .inner', {
    //     x: -3040,
    //     ease: "none",
    //     duration: 50,
    //     repeat: -1,
    // });

    gsap.to('#section01 .se01_img .se01_img01 .inner', {
        x: 2789,
        ease: "none",
        duration: 90,
        repeat: -1,
    });


    $('#section01 .se01_img .inner').mouseenter(function () {
        $(this).addClass('on')
    }).mouseleave(function () {
        $(this).removeClass('on')
    })



    let sc02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02,
        trigger: "#section02",//기준
        start: "170px top", //기준 브라우저
        end: "bottom bottom", //기준 브라우저
        scrub: 1,
    });
    //('선택자',{구동},듀레이션(0~1))
    /*   sc02.to(".se02_img05 img",{x:0},0.1);*/


    // let sc02_text = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: sc02_text,
    //     trigger: "#section02",//기준
    //     start: "500px top", //기준 브라우저
    //     end: "bottom bottom", //기준 브라우저
    //     scrub: 1,
    // });
    // //('선택자',{구동},듀레이션(0~1))
    // sc02_text.to(".se02_img04",{x:0,opacity:0,scale:0},0);
    // sc02_text.to(".se02_img05 img",{y:0},0.1);


    let sc02_img01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02_img01,
        trigger: "#section02",//기준
        start: "-500px top", //기준 브라우저
        end: "bottom bottom", //기준 브라우저
        scrub: 1,
    });
                //('선택자',{구동},듀레이션(0~1))
    sc02_img01.to(".se02_img04",{x:0,y:0},0);
    // sc02_img01.to(".se02_img04",{x:0,y:0},0.1);
    // sc02_img01.to(".se02_img04",{x:0,y:0},0.2);





    $('.se03_img04').mouseenter(function () {
        $('.se03_img05').addClass('on')
    })


    $('#se04_group > div').mouseenter(function () {
        $('.se04_img_list').removeClass('on')
        $('#section04 .se04_arrow > div').removeClass('on')
        $('#section04 .se04_img_box > div').removeClass('on')
        $(this).addClass('on')

        let v = $('#se04_group > div').index(this)

        if(v===0){
            $('#section04 .se04_img08_1').addClass('on')
            $('#section04 .se04_arrow > div:nth-child(1)').addClass('on')
            $('#section04 .se04_img_box > div:nth-child(1)').addClass('on')

        }
        if(v===1){
            $('#section04 .se04_img08_2').addClass('on')
            $('#section04 .se04_arrow > div:nth-child(2)').addClass('on')
            $('#section04 .se04_img_box > div:nth-child(2)').addClass('on')

        }
        if(v===2){
            $('#section04 .se04_img08_3').addClass('on')
            $('#section04 .se04_arrow > div:nth-child(3)').addClass('on')
            $('#section04 .se04_img_box > div:nth-child(3)').addClass('on')

        }
        if(v===3){
            $('#section04 .se04_img08_4').addClass('on')
            $('#section04 .se04_arrow > div:nth-child(4)').addClass('on')
            $('#section04 .se04_img_box > div:nth-child(4)').addClass('on')

        }
        if(v===4){
            $('#section04 .se04_img08_5').addClass('on')
            $('#section04 .se04_arrow > div:nth-child(5)').addClass('on')
            $('#section04 .se04_img_box > div:nth-child(5)').addClass('on')

        }
        if(v===5){
            $('#section04 .se04_img08_6').addClass('on')
            $('#section04 .se04_arrow > div:nth-child(6)').addClass('on')
            $('#section04 .se04_img_box > div:nth-child(6)').addClass('on')

        }


    }).mouseleave(function () {
        $('.se04_img_list').removeClass('on')
        $('#section04 .se04_arrow > div').removeClass('on')
        $('#section04 .se04_img_box > div').removeClass('on')
        $(this).removeClass('on')
    })




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


    $('#section05 .se05_typogroup > div').mouseenter(function () {
        $('#section05 .se05_video > div').removeClass('on')

        let v = $('#section05 .se05_typogroup > div').index(this)

        $('#section05 .se05_video > div').eq(v).addClass('on')

    })




















































































































































})


