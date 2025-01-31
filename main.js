document.addEventListener('DOMContentLoaded', () => {
    let phrases = [
        {
            text: 'Juzz funk - Энергичный вид танца. Чаще всего с резкими быстрыми движениями. Подходит абсолютно всем',
            image: 'url("../layout/images/slider1.jpg")'
        },
        {
            text: 'Girly hip-hop – сочетание дерзкого рэперского стиля с женственными стэпами и движениями. Полное самовыражение в движениях и одежде - от огромных худи с бейсболкой до женственных нарядов.',
            image: 'url("../layout/images/slider2.jpg")'
        },
        {
            text: 'Frame up strip – про пластичность, женственность и сексуальность. Танцуя этот стиль, девушки начинают ощущать свою энергию, больше любить себя и восхищаться собой и своим телом. Frame up strip танцуют на больших каблуках в партере (на полу).',
            image: 'url("../layout/images/slider3.jpg")'
        },
        {
            text: 'Twerk choreo – танцевальное направление, при помощи которого можно обрести уверенность в себе, повысить самооценку и подтянуть фигуру, так как во время танца задействованы многие мышцы тела.Twerk очень сильно выделяется от других направлений, так как в этом направлении очень сильно задействованы ягодицы и разные виды трясок',
            image: 'url("../layout/images/card1.jpg")'
        },
        {
            text: 'High heels – женственный и эстетичный стиль, который танцуют на каблуках. У этого направления отдельный вайб: сочетание girly hip-hop и frame up strip, что дает девушкам раскрепощение и повышению самооценки.',
            image: 'url("../layout/images/card2.jpg")'
        },
        {
            text: 'Choreo – это направление, комбинирующее практически все стили танцев.',
            image: 'url("../layout/images/card3.jpg")'
        },
        {
            text: 'Растяжка – своего рода медитация для тела. Она помогает улучшить гибкость, укрепить мышцы и снимает зажимы. При помощи растяжки движения в танце становятся более плавными.',
            image: 'url("../layout/images/card5.jpg")'
        }
    ];

    let slideIndex = 0; // Начальный индекс слайда

    const left = document.getElementById('left');
    const right = document.getElementById('right');

    const dots = document.getElementsByClassName("dot");

    let phrase = document.querySelector('.phrase');
    let image = document.querySelector('.fade');

    showSlides(slideIndex);

    left.addEventListener('click', () => {
        changeSlide(-1); // Листаем назад
    });

    right.addEventListener('click', () => {
        changeSlide(1); // Листаем вперед
    });

    function changeSlide(n) {
        showSlides(slideIndex += n); // Изменение текущего слайда
    }

    // dots[0].addEventListener("click", function () {
    //     showSlides(1);
    // });
    // for (let i = 0; i < dots.length; i++) {
    //     dots[i].addEventListener("click", () => {
    //         console.log('i ' + i);
    //         showSlides(i + 1);
    //     });
    // }
    // for (let i = 0; i < dots.length; i++) {
    //     dots[i].addEventListener("click", showSlides(i+1));
    // }
    // dots[0].addEventListener("click", showSlides(1));

    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    function showSlides(n) {
        console.log("Вызов showSlides");

        if (n > phrases.length-1) {
            slideIndex = 0;
        }

        if (n < 0) {
            slideIndex = phrases.length-1;
        }

        let element = phrases[slideIndex];
        console.log(image.style.backgroundImage);

        smoothly(phrase, "textContent", element.text);
        image.style.backgroundImage = element.image;
        // smoothly(image, "image.style.backgroundImage", element.image);
        console.log();
        console.log(element.image);

        // setTimeout(() => {
        //     showSlides(slideIndex += 1);
        // }, 7000);
    }

});

// function getRandomElement(arr) {
//     let randIndex = Math.floor(Math.random() * arr.length);
//     return arr[randIndex];
// }

//     // if (randomElement.text.length > 40) {
//     //     advice.style.fontSize = '33px';
//     // } else {
//     //     advice.style.fontSize = '42px';
//     // }

