const box = document.getElementById("box");

function moveX(x) {

    if (x < 0) {
        let r = parseInt(box.style.right) || 0;
        r += x;
        box.style.right = r + "px";

        // console.log("move right");
    } else if (x > 0) {
        let l = parseInt(box.style.right) || 0;
        l += x;
        box.style.right = l + "px";

    }
};



function moveY(y) {

    if (y < 0) {
        let t = parseInt(box.style.top) || 0;
        t += y;
        box.style.top = t + "px";

    } else if (y > 0) {
        let b = parseInt(box.style.top) || 0;
        b += y;
        box.style.top = b + "px";

    }
};