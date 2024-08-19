function navAnimation(){var av=document.querySelector("nav")
    av.addEventListener('mouseenter',function(){
        var tl=gsap.timeline()
    
        tl.to( "#nav-bottom",{
                height:"26vh"
        })
        tl.to(".nav-part2 h5",{
            display:"block",
            duration:0.1
        })
        tl.to(".nav-part2 h5 span",{
            y:0,
            stagger:{
                amount:0.5
            }
        })
    })
    av.addEventListener('mouseleave',function(){
        var tl=gsap.timeline()
        tl.to(".nav-part2 h5 span",{
            y:0,
            stagger:{
                amount:0.2
            }
        })
        tl.set(".nav-part2 h5",{
            display:"none",
            duration:0.1
        })
     
        tl.to( "#nav-bottom",{
            height:0,
            duration:0.2
        })
    })}
    navAnimation();