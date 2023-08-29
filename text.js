const workTab = document.getElementById('workTab');
const educationTab = document.getElementById('educationTab');
const workContent = document.querySelector('.work-content');
const educationContent = document.querySelector('.education-content');
const skillTab = document.getElementById('skillTab');
const skillContent = document.querySelector('.skill-content');
const awardTab = document.getElementById('awardTab');
const awardContent = document.querySelector('.award-content');
const interestTab = document.getElementById('interestTab');
const interestContent = document.querySelector('.interest-content');

educationContent.style.display = 'block';
workContent.style.display = 'none';
interestContent.style.display = 'none';
skillContent.style.display = 'none';
awardContent.style.display = 'none';
awardTab.addEventListener('click', () => {
    awardContent.style.display = 'block';
    educationContent.style.display = 'none';
    skillContent.style.display = 'none';
    workContent.style.display = 'none';
    interestContent.style.display = 'none';


});
interestTab.addEventListener('click', () => {
    interestContent.style.display = 'block';
    educationContent.style.display = 'none';
    workContent.style.display = 'none';
    skillContent.style.display = 'none';
    awardContent.style.display = 'none';
});
workTab.addEventListener('click', () => {
    workContent.style.display = 'block';
    educationContent.style.display = 'none';
    skillContent.style.display = 'none';
    awardContent.style.display = 'none';
    interestContent.style.display = 'none';

});

educationTab.addEventListener('click', () => {
    workContent.style.display = 'none';
    educationContent.style.display = 'block';
    skillContent.style.display = 'none';
    awardContent.style.display = 'none';
    interestContent.style.display = 'none';

});

skillTab.addEventListener('click', () => {
    skillContent.style.display = 'block';
    educationContent.style.display = 'none';
    workContent.style.display = 'none';
    awardContent.style.display = 'none';
    interestContent.style.display = 'none';


});
document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".list-item");

    listItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Remove the selected class from all list items
            listItems.forEach(function(li) {
                li.classList.remove("selected");
            });

            // Add the selected class to the clicked item
            item.classList.add("selected");
        });
    });
});
