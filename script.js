const buttons = [].slice.call(document.querySelectorAll('.btn-container a'));
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        /* console.log(e.clientX, e.clientY, e.target.offsetLeft, e.target.offsetTop); */
        let x = e.clientX - e.target.offsetLeft,
            y = e.clientY - e.target.offsetTop,
            ripple = document.createElement('span');
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        this.appendChild(ripple);
        ripple.addEventListener("animationend", function () {
            button.removeChild(this);
        })
    });
});