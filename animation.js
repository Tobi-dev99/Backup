var hText = document.querySelector('.h');
var mText = document.querySelector('.m');
var bText = document.querySelector('.b');

function letterSpan(text , wrapperIndex) {
    var heading = document.querySelector('.tw-' + wrapperIndex);
    var string = text.innerText;
    string.split('');
    var length = string.length;
    for (let i = 0; i < length; i++) {
        if (string[i] !== " ") {
            heading.innerHTML += "<span class = 'letter'>" + string[i] + "</span>";
        }else{
            heading.innerHTML += "<span class = 'space'>" + string[i] + "</span>";
        }
    }
    heading.innerHTML += "<br>";
}

letterSpan(hText, 1);
letterSpan(mText, 2);
letterSpan(bText, 3);

// Animating the Logo Image

anime({
    targets: '.logo-svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    // direction: 'alternate'
});

anime({
    targets: '.logo-bg img',
    opacity: [0, 1],
    delay: 1500,
    duration: 2000,
    easing: 'easeInCubic'
});

//Animating the Heading
anime({
    targets: '.letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 800,
    easing: "easeOutExpo",
    delay: (el, i) => 70 * i
})

anime({
    targets: '.sub-heading',
    opacity: [0, 1],
    duration: 1000,
    delay: 800,
    easing: 'easeInCubic'
})

anime({
    targets: '.contact-btn',
    opacity: [0, 1],
    duration: 1000,
    delay: 800,
    easing: 'easeInCubic'
})

var alpha = document.querySelectorAll('.letter');

function hoverAnimeLetter() {
    anime({
        targets: this,
        scaleY: [
            {value: 1, duration: 0},
            { value: 0.5, duration: 300, easing: 'easeOutQuad'},
            { value: 1.5, duration: 100, easing: 'easeOutBounce'},
            { value: 1, duration: 100, easing: 'easeOutQuad' }
        ],
        scaleX: [
            { value: 1, duration: 0 },
            { value: 1.5, duration: 300, easing: 'easeOutQuad' },
            { value: 1.2, duration: 100, easing: 'easeOutQuad'},
            {value: 1, duration: 100, easing: 'easeOutQuad'}
        ],
        elasticity: 500
    })
}

for (let i = 0; i < alpha.length; i++) {

    alpha[i].addEventListener('mouseover', hoverAnimeLetter);
    
}

