gsap.from('.row2 h1',{
    x:"80%",
    // duration:2,
    expo:"easeIn",
    scrollTrigger:{
        trigger:".row2",
        scroller:"body",
        markers:true,
        // start:"top 80%",
        scrub:true,
    }
})

gsap.from('.row2 .pic01',{
    x:"-50%",
    duration:5,
    scrollTrigger:{
        trigger:".row2",
        scroller:"body",
        scrub:true
    }
})

gsap.from('.row2 .row2Content .details',{
    x:"80%",
    start:"top 80%",
    duration:2,
    scrollTrigger:{
        trigger:".details",
        scroller:"body",
        scrub:true
    }
})