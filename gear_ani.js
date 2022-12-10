

gsap.registerPlugin(ScrollTrigger);

const mySvg = document.querySelector('#gear');
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: mySvg,
    scrub: 2,
    start: 'top',
    end:'+=2700',
  }
});

tl.to(mySvg, {duration: 1, rotation:360*1});
