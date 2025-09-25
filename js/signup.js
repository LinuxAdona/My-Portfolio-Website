document.addEventListener('DOMContentLoaded', function () {
    var collapse = document.getElementById('collapseExample');
    var chevron = document.getElementById('chevronIcon');
    collapse.addEventListener('show.bs.collapse', function () {
        chevron.style.transform = 'rotate(180deg)';
        chevron.style.transition = 'transform 0.3s';
    });
    collapse.addEventListener('hide.bs.collapse', function () {
        chevron.style.transform = 'rotate(0deg)';
        chevron.style.transition = 'transform 0.3s';
    });
});