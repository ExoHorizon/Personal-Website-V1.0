// Parallax Section Start
document.addEventListener('DOMContentLoaded', function () {
    backgroundParallax();
});

window.addEventListener('scroll', function () {
    backgroundParallax();
});

window.addEventListener('resize', function () {
    backgroundParallax();
});

function backgroundParallax() {
    var backgroundImage = new Image();
    backgroundImage.src = 'img/Background.png';
    var backgroundAspectRatio = backgroundImage.height / backgroundImage.width;

    var visibleAspectRatio = document.documentElement.clientHeight / document.documentElement.clientWidth;
    var hiddenHeight = getHiddenHeight(backgroundAspectRatio, visibleAspectRatio);

    var scrollPercent = getScrollPercent();
    var yOffset = -0.01 * scrollPercent * hiddenHeight;
    document.querySelector('.parallax-background').style.backgroundPosition = 'center ' + yOffset + 'px';
}

function getScrollPercent() {
    var docElement = document.documentElement
    var docBody = document.body;
    var scrollTop = docElement['scrollTop'] || docBody['scrollTop'];
    var scrollHeight = docElement['scrollHeight'] || docBody['scrollHeight'];
    return (scrollTop) / ((scrollHeight) - docElement.clientHeight) * 100;
}

function getHiddenHeight(backgroundAspectRatio, visibleAspectRatio) {
    if (visibleAspectRatio >= backgroundAspectRatio) {
        return 0;
    }
    visibleWidth = document.documentElement.clientWidth;
    visibleHeight = document.documentElement.clientHeight;
    return backgroundAspectRatio * visibleWidth - visibleHeight;
}
// Parallax Section End

// Skills Section Scroll Animation Start
const skillItemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-skill-item');
        } else {
            entry.target.classList.remove('show-skill-item');
        }
    });
});

const hiddenSkills = document.querySelectorAll('.hide-skill-item');
hiddenSkills.forEach((element) => skillItemObserver.observe(element));
// Skills Section Scroll Animation End

// Projects Section Scroll Animation Start
const projectItemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-project-item');
        } else {
            entry.target.classList.remove('show-project-item');
        }
    });
});

const hiddenProjects = document.querySelectorAll('.hide-project-item');
hiddenProjects.forEach((element) => projectItemObserver.observe(element));
// Projects Section Scroll Animation End