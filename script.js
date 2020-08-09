const header = document.querySelector("header"); 
const hoverButton = document.querySelectorAll("li");
const sectionOne = document.querySelector(".banner"); 

const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
    rootMargin: "-70px 0px 0px 0px"
}; 
const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("header-added");
            hoverButton.forEach(function(li) {
                li.classList.add("yellow");
            })
        } else {
            header.classList.remove("header-added"); 
            hoverButton.forEach(function(li) {
                li.classList.remove("yellow");
                li.classList.add("uli");
            })
        }
    });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

hoverButton.forEach(button => {
    button.addEventListener('click', function () {
        hoverButton.forEach(btn => btn.classList.remove('active'));
        this.classList.toggle('active');
        console.log(this);
    });
});


const appearOptions = {
    threshold: 0, 
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});