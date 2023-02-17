//TODO
//so far, it works: BUT.
//I think I could use conditions to reduce the if(left)else if(right) portion by about half,
// but it works.

export default function moveToSelected(direction) {
    // let $ = document.querySelector(`.${direction}`)
    console.log('direction:', direction)
    if (direction == "next") {
        var newSelected = document.querySelector(".selected")?.nextSibling;
    } else if (direction == "prev") {
        var newSelected = document.querySelector(".selected")?.previousSibling;
    }

    if (!newSelected) return;
    var next = newSelected?.nextSibling;
    var prev = newSelected?.previousSibling;
    var prevSecond = prev?.previousSibling;
    var nextSecond = next?.nextSibling;

    if (direction == 'next') {
        //adjust selected to the right
        document.querySelector(".selected").classList.add('prev')
        document.querySelector(".selected").classList.remove('selected')
        newSelected?.classList.remove('next');
        newSelected?.classList.add('selected');
        //prev needs to move right
        prev?.classList.add('prev');
        prev?.previousSibling?.classList.remove('hideRight');//
        prev?.classList.remove('nextRightSecond');
        //next needs to move right
        next?.classList.add("next");
        next?.classList.remove('nextRightSecond')
        next?.nextSibling?.classList.remove('next');
        //nextsecond needs to move right
        nextSecond?.classList.add("nextRightSecond");
        nextSecond?.classList.remove('hideRight')
        nextSecond?.nextSibling?.classList.add('hideRight');
        //prevsecond needs to move right
        prevSecond?.classList.add("prevLeftSecond")
        prevSecond?.classList.remove('prev')
        prevSecond?.previousSibling?.classList.remove('prevLeftSecond');
        prevSecond?.previousSibling?.classList.add('hideLeft');
    } else if (direction == 'prev') {
        //adjust selected to the left
        document.querySelector(".selected").classList.add('next')
        document.querySelector(".selected").classList.remove('selected')
        newSelected?.classList.remove('prev');
        newSelected?.classList.add('selected');
        //prev needs to move left
        prev?.classList.add('prev');
        prevSecond?.classList.add('hideLeft')
        prev?.previousSibling?.classList.remove('hideLeft');//
        prev?.classList.remove('prevLeftSecond');
        //next needs to move left
        next?.classList.add("next");
        next?.classList.remove('nextRightSecond')
        next?.nextSibling?.classList.remove('next');
        //nextsecond needs to move left
        nextSecond?.classList.add("nextRightSecond");
        nextSecond?.nextSibling?.classList.add('hideRight');
        nextSecond?.nextSibling?.classList.remove('nextRightSecond');
        //prevsecond needs to move left
        prevSecond?.classList.add("prevLeftSecond")
        prevSecond?.previousSibling?.classList.remove('prevLeftSecond');
    }


    if (!prev) document.getElementById('prev').style.opacity = '0';
    else if (prev) document.getElementById('prev').style.opacity = '1';

    if (!next) document.getElementById('next').style.opacity = '0';
    else if (next) document.getElementById('next').style.opacity = '1';

}
