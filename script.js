const header = document.querySelector("header"); 
const sectionOne = document.querySelector(".banner"); 

const sectionOneOptions = {}; 
const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("header-added")
        } else {
            header.classList.remove("header-added"); 
        }
    });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);