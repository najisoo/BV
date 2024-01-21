window.addEventListener('DOMContentLoaded', function () {
    $('#section01 .se01_img11').addClass('on')
    $('#section01 .se01_img05').addClass('on')
    $('#section01 .se01_img06').addClass('on')
    $('#section01 .se01_img07').addClass('on')
    $('#section01 .se01_img08').addClass('on')
    $('#section01 .se01_img09').addClass('on')
    $('#section01 .se01_img10').addClass('on')


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if (scrollTop >= 30) {


        }
        if (scrollTop >= 1000) {
            $('#section02 .se02_img01').addClass('on')
            $('#section02 .se02_img09').addClass('on')
            $('#section02 .se02_img13').addClass('on')
            $('#section02 .se02_img14').addClass('on')

        }
        if (scrollTop >= 1700) {
            $('#section02 .se02_img15').addClass('on')
            $('#section02 .se02_img19').addClass('on')


        }
        if (scrollTop >= 3200) {
            $('#section03 .se03_img01').addClass('on')
            $('#section03 .se03_img05').addClass('on')
            $('#section03 .se03_img06').addClass('on')


        }
        if (scrollTop >= 4000) {
            $('#section03 .se03_img08').addClass('on')


        }
        if (scrollTop >= 5300) {
            $('#section04 .se04_img03').addClass('on')
            $('#section04 .se04_img07').addClass('on')
            $('#section04 .se04_img11').addClass('on')


        }
        if (scrollTop >= 5800) {
            $('#section04 .se04_img15').addClass('on')
            $('#section04 .se04_img19').addClass('on')
            $('#section04 .se04_img23').addClass('on')


        }
        if (scrollTop >= 6300) {
            $('#section04 .se04_img27').addClass('on')
            $('#section04 .se04_img31').addClass('on')
            $('#section04 .se04_img35').addClass('on')


        }
    });


    /*  slide,click event section */

    gsap.to('#section01 .se01_img .se01_text .inner', {
        x: -3040,
        ease: "none",
        duration: 50,
        repeat: -1,
    });

    gsap.to('#section01 .se01_img .se01_img01 .inner', {
        x: 2789,
        ease: "none",
        duration: 50,
        repeat: -1,
    });


    let sc02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02,
        trigger: "#section02",//기준
        start: "170px top", //기준 브라우저
        end: "bottom bottom", //기준 브라우저
        scrub: 1,
    });
    //('선택자',{구동},듀레이션(0~1))
    /*   sc02.to(".se02_img05 img",{X:0},0.1);*/


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


})

let sc01_img12 = gsap.timeline();
ScrollTrigger.create({
    animation: sc01_img12,
    trigger: "#section01",//기준
    start: "top top", //기준 브라우저
    end: "bottom bottom", //기준 브라우저
    scrub: 1,
});
//('선택자',{구동},듀레이션(0~1))
sc01_img12.to(".se01_img12",{transform:'scale(1.15)'},0);

