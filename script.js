var nav  = document.querySelector("nav")
var h1s = document.querySelectorAll(".menu h1")
var flag = false;
document.querySelector(".navright")
.addEventListener("click",function(e){
    if(flag===false){
        gsap.to(".menu",{
            top : "0",
            ease : "expo.out",
            opacity : 1,
            duration : 1,
        })
        // h1s.forEach((e)=>{
        //     gsap.from(e,{
        //         stagger : 0.2,
        //         delay : 1,
        //         y : 100,
        //         opacity : 0.5,
        //     })
        //     console.log(e);
        // })
        flag = true;
        document.querySelector(".navright").innerHTML = '<i class="ri-twitter-x-fill"></i>';
        document.querySelector("nav").style.color = "#B6AB8C";
    }
    else{
        gsap.to(".menu",{
           top : "-100%",
        //    opacity : 0,
           ease : "circ.in",
           duration : 1,
        })
        flag = false;
        document.querySelector(".navright").innerHTML = '<div class="dots"></div><h3>menu</h3>';
        document.querySelector("nav").style.color = "#948675";
    }
})
// if(document.querySelector("body").getBoundingClientRect().width < 375){
gsap.to("nav",{
    color : "#B6AB8C",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page1",
        start : "top top",
        end : "50% top",
        scrub : 1,
        // markers : true,
    },
})
gsap.to(".page1>img",{
    width : "3vw",
    opacity : "0",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page1",
        start : "top top",
        end : "50% top",
        scrub : 1,
        // markers : true,
    },
})
gsap.from(".page1 .imgcircle",{
    width : "205vw",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page1",
        start:"top top",
        pin : true,
        scrub : 1,
        // markers : true,
    },
})
gsap.from(".page1 .lefttext",{
    opacity : "0",
    y : 80,
    scrollTrigger:{
        scroller : "body",
        trigger : ".page1 .lefttext",
        start : "70% top",
        end  : "100% top",
        scrub : 1,
        // markers : true,
    }
})
gsap.from(".page1 .righttext p,.page1 .righttext h3,.page1 .righttext .dots",{
    opacity : "0",
    y : 50,
    scrollTrigger:{
        scroller : "body",
        trigger : ".page1 .lefttext",
        start : "90% top",
        end  : "120% top",
        scrub : 1,
        // markers : true,
    }
})
gsap.from(".page1 .righttext img",{
    opacity : "0",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page1 .lefttext",
        start : "90% top",
        end : "120% top",
        scrub : 1,
        // markers : true,
    }
})

gsap.from(".page2 .imgcircle",{
    width : "205vw",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page2",
        pin : true,
        scrub : 1,
        // markers : true,
    },
})
gsap.from(".page2 .lefttext",{
    opacity : "0",
    y : 80,
    scrollTrigger:{
        scroller : "body",
        trigger : ".page2 .lefttext",
        start : "70% top",
        end  : "100% top",
        scrub : 1,
        // markers : true,
    }
})
gsap.from(".page2 .righttext p,.page2 .righttext h3,.page2 .righttext .dots",{
    opacity : "0",
    y : 50,
    scrollTrigger:{
        scroller : "body",
        trigger : ".page2 .lefttext",
        start : "90% top",
        end  : "120% top",
        scrub : 1,
        // markers : true,
    }
})
gsap.from(".page2 .righttext img",{
    opacity : "0",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page2 .lefttext",
        start : "90% top",
        end : "120% top",
        scrub : 1,
        // markers : true,
    }
})
gsap.to("nav",{
    color : "#655B50",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page2",
        start : "top top",
        // end : "120% top",
        scrub : 1,
        // markers : true,
    },
})
gsap.from(".page3 .imgcircle",{
    width : "205vw",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page3",
        pin : true,
        scrub : 1,
        // markers : true,
    },
})
gsap.from(".page3 .lefttext",{
    opacity : "0",
    y : 80,
    scrollTrigger:{
        scroller : "body",
        trigger : ".page3 .lefttext",
        start : "70% top",
        end  : "100% top",
        scrub : 1,
        // markers : true,
    }
})
gsap.from(".page3 .righttext p,.page3 .righttext h3,.page3 .righttext .dots",{
    opacity : "0",
    y : 50,
    scrollTrigger:{
        scroller : "body",
        trigger : ".page3 .lefttext",
        start : "90% top",
        end  : "120% top",
        scrub : 1,
        // markers : true,
    }
})
gsap.from(".page3 .righttext img",{
    opacity : "0",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page3 .lefttext",
        start : "90% top",
        end : "120% top",
        scrub : 1,
        // markers : true,
    }
})
gsap.to("nav",{
    color : "#B6AB8C",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page3",
        start : "top top",
        scrub : 1,
        // markers : true,
    },
})
var tm = gsap.timeline({
    scrollTrigger:{
        scroller : "body",
        trigger : ".page4",
        start : "top top",
        end : "250% top",
        pin : true,
        scrub : 1,
        // markers : true,
    },
})
tm.to(".page4 svg",{
    scale : 86,
    duration : 6,
})
.from(".page4>img",{
    opacity : 0,
    duration : 2,
    width : "0vw",
},"b")
.from(".page4 .righttext",{
    y : 100,
    opacity : 0,
    duration : 2,
    delay : 1,
},"b")
gsap.to(".page4",{
    color : "#D5C8A3",
    scrollTrigger:{
        scroller : "body",
        trigger : ".page4",
        start : "top top",
        end : "20% top",
        scrub : 1,
        // markers : true,
    },
})
var dots = document.querySelectorAll(".page6 svg .dot")
var tm = gsap.timeline({
    scrollTrigger:{
        scroller : "body",
        trigger : ".page6",
        pin : true,
        scrub : 1,
        // markers : true,
    },
})
tm.to(".innerpage",{
    top : "0%",
    duration : 2,
},"a")
.to(".page6 svg .r",{
    opacity : "0",
    delay : 0.5,
    duration : 0.8,
},"a")
.to(".page6 svg .i",{
    fill : "#655B50",
    duration : 1,
},"a")
dots.forEach(function(e){
    tm.to(e,{
        fill : "#655B50",
        delay : 0.5,
        duration :1,
    },"a")
})
tm.to("nav",{
    color : "#655B50",
})
gsap.to("nav",{
    color : "#D5C8A3",
    scrollTrigger:{
        scroller : "body",
        trigger : ".footer",
        start : "-50% top",
        end : "0% top",
        scrub : 1,
        // markers : true,
    },
})
// }
var clutter = " ";
var pagination = document.querySelector(".swiperpage .pagination")
var line = document.querySelectorAll(".pagination .line")
var arr = [
    {src : "https://content.additive-apps.tech/silena-com/media/49356b77-4b3f-4cbf-a427-92ee3e2448c3?ts=1692714320&af=1&t=800x800",
    h1 : "SOULFUL EASTER",
    h2 : "28.03.2024 - 01.04.2024 <br>PACKAGE PRICE 0,00€"},
    {src : "https://content.additive-apps.tech/silena-com/media/1ea6ebfe-45d9-44d9-b928-0e751a746e68?ts=1678103711&af=1&t=800x800",
    h1 : "BABYMOON @ SILENA",
    h2 : "01.05.2024 - 01.05.2025 <br>PACKAGE PRICE 200€"},
    {src : "https://content.additive-apps.tech/silena-com/media/8b009c7e-5a58-4452-9fe1-1260b069457d?ts=1692714291&af=1&t=800x800",
    h1 : "HONEYMOON - I'M YOUR YIN <br> AND YOU'RE MY YANG",
    h2 : "01.05.2024 - 01.05.2025 <br> PACKAGE PRICE 430€"},
    {src : "https://content.additive-apps.tech/silena-com/media/3aa03bf0-8bdf-423f-89b5-3fa891505aec?ts=1678103727&af=1&t=800x800",
    h1 : "HONEYMOON - RELAX AND SIT <br> BACK",
    h2 : "01.05.2024 - 01.05.2025 <br> PACKAGE PRICE 135€"},
    {src : "https://content.additive-apps.tech/silena-com/media/72cc80b4-5b62-40f7-b0c9-c1aea1031dc3?ts=1678103736&af=1&t=800x800",
    h1 : "YOGA BABY !",
    h2 : "01.05.2024 - 01.05.2025 <br>PACKAGE PRICE 192€"},
]

arr.forEach(function(e,i){
    clutter  += `
    <div class="line${i} line" id="${i}"></div>
    `
})
document.querySelector(".swiperpage .pagination").innerHTML = clutter;

pagination.addEventListener("click",function(dets){
    let id = arr[dets.target.id]
    setTimeout(() => {
        document.querySelector(".imgbox img").setAttribute("src",`${id.src}`)
        document.querySelector(".textbox h1").innerHTML = id.h1
        document.querySelector(".textbox h2").innerHTML = id.h2
    }, 600);
    gsap.to(".textbox",{
        opacity : 0,
        scale : 0.5
    })
    gsap.to(".textbox",{
        opacity : 1,
        scale : 1,
        delay : 1,
    })
})

