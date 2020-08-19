//01. Activate full page library, need to pay to use it 

new fullpage('#fullpage', {
    licenseKey: 'DB1CC3A0-D5CD4449-8D412E7F-E6A2EE79',
    autoScrolling:true,
    navigation: true,

    //fire following function when each time leaving a page
    onLeave: (origin, destination, direction) => {
        //section refers to each page element (s1, s2, s3)
        const section = destination.item;

        const title = section.querySelector('h2');
            //important to delay 0.5s, otherwise no obvious animation effect
        const tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(title, 0.5, {y: 50, opacity: 0 }, {y: 0, opacity: 1 });

        //Animation for page 2, index is 1
        if(destination.index === 1){
            const imgs = document.querySelectorAll('.nature');
            const description = document.querySelector('.description');

            tl.fromTo(imgs, 0.7, {x: "130%"}, {x: "10%"})
              .fromTo(description, 0.5, {y: 50, opacity: 0 }, {y: 0, opacity: 1 }, "-=0.1")
                //here opacity needs to be 1, otherwise no push in visual effect
              .fromTo(imgs[0], 0.6, {opacity: 1}, {opacity: 1})
              .fromTo(imgs[1], 0.7, {opacity: 0}, {opacity: 1});
        }

        //Animation for page 3, index is 2
        if(destination.index === 2){
            const imgs = document.querySelectorAll('.time');
            const description = document.querySelector('.description');

            tl.fromTo(imgs, 0.7, {x: "-130%"}, {x: "5%"})
                //here opacity needs to be 1, otherwise no push in visual effect
              .fromTo(imgs[0], 0.7, {opacity: 1}, {opacity: 1}, "-=0.2")
              .fromTo(imgs[1], 0.7, {opacity: 0}, {opacity: 1})
              .fromTo(description, 1, {y: 50, opacity: 0 }, {y: 0, opacity: 1 });
        }

    }
});

//02. Animate Nav-bar Content

const navOpen = document.querySelector('.nav-open');
const menu = document.querySelector('.menu');
const content1 = document.querySelector('.c1');
const content2 = document.querySelector('.c2');
const content3 = document.querySelector('.c3');

const tl = new TimelineMax({paused: true, reversed: true});

tl.to(navOpen, 0.5, {opacity: 1})
  .fromTo(content1, 0.5, {opacity: 0, y: 10}, {opacity: 1, y: 0}, "-=0.2" )
  .fromTo(content2, 0.5, {opacity: 0, y: 10}, {opacity: 1, y: 0}, "-=0.3" )
  .fromTo(content3, 0.5, {opacity: 0, y: 10}, {opacity: 1, y: 0}, "-=0.4" );

menu.addEventListener('click', () => {
    tl.reversed() ? tl.play() : tl.reverse(); 
})





