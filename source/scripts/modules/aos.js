import AOS from 'aos';

AOS.init({
    startEvent: 'DOMContentLoaded',
    delay: 300,
    duration: 1300,
    once: true,
    offset: 150,
    //disable: 'phone',
    initClassName: 'aos-init',
});

console.log(AOS)

