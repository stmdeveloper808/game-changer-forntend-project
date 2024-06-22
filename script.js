
var a = document.querySelector("#a")
var phone =  document.querySelector("#phone")
phone.addEventListener("mouseenter",function(){
    gsap.from(a,{
        scale:2,
        opacity:2,
    })
})
var cursr = document.querySelector("#crusr")
var h = document.querySelector("#main")
h.addEventListener("mousemove",function(dets){
   gsap.to(cursr,{
    y:dets.y,
    x:dets.x,
    scale:2,
   })
})

phone.addEventListener("mousemove",function(){
    gsap.to(cursr,{
        scale:4,
        opacity:2,
        
    })
})

phone.addEventListener("mouselenter",function(){
    gsap.to(cursr,{
        scale:1,
        opacity:0,
    })
})

phone.addEventListener("mouseleave",function(){
    gsap.to(cursr,{
        scale:4,
        opacity:1,
    })
})

var btns = document.querySelector("#btn1")
var btn = document.querySelector("#btn2")
var a = document.querySelector("#ig1")
var b = document.querySelector("#ig2")
var c = document.querySelector("#ig3")
btn.addEventListener("click",function(){
    gsap.to(a,{
        scale:1,
        y:-800,
        delay:1,
        duration:1,
    })
})

btn.addEventListener("click",function(){
    gsap.to(b,{
        scale:1,
        y:-810,
        delay:1.4,
        duration:2.2,
    })
})

btn.addEventListener("click",function(){
    gsap.to(c,{
        scale:1.,
        delay:3.4,
        left:-1436,
        duration:2,
    })
})

btns.addEventListener("click",function(){
    gsap.from(a,{
        scale:1,
        delay:1,
        x:-800,
        duration:1,
    })
})
btns.addEventListener("click",function(){
    gsap.from(b,{
        scale:1,
        delay:2.4,
        left:754,
        duration:2,
    })
})
btns.addEventListener("click",function(){
    gsap.from(c,{
        delay:2,
        x:1800,
        duration:1,
            
    })
})

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#pb1",
    scroll:"#page2",
    start:"70% 89%",
    end:"51% 37%",
    scrub:true,
    
}})
tl.to("#pb1",{
    top:"94%",
    left:"14%",
    duration:1,
    delay:1.4,

})

tl.to("#pb2",{
    left:"20%",
    duration:2,
    delay:2.4,

})
tl.to("#pb3",{
    left:"24%",
    duration:3,
    delay:4.2,

})
"#pb1".addEventListener("mousemove",function(){
    gsap.to(cursr,{
        scale:2,
        opacity:1,
    })
})

pb1.addEventListener("mouseenter",function(){
    gsap.to(cursr,{
        scale:8,
        opacity:0,
    })
});



 gsap.from(h1, {
  duration: 0.5,
  scale: 4,
  autoAlpha: 0,
  ease: "back",
  stagger:1
})

