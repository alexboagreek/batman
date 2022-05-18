const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const close = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
    navigation.classList.add('navigation_active');
});

close.addEventListener('click', () => {
    navigation.classList.remove('navigation_active');
});

const mute = document.querySelector('.mute__checkbox');
const audio = new Audio('../assets/audio/waterTower.mp3');

mute.addEventListener('change', () => {
    if(mute.checked) {
        audio.play();
    } else {
        audio.pause();
    }
});


try {
    const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 4,

});

sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex)
});

const sliderMain = new Swiper('.slider-main', {
    loop: true,
    spaceBetween: 10,
    loopedSlides: 4,
    
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;
} catch {
    console.log('На данной странице нет слайдера')
}