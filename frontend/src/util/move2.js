//TODO
//try out ideas here, don`t mess with moveToSelected
export default function moveToSelectedRedux(direction, formSection) {
    // let $ = document.querySelector(`.${direction}`)
    // console.log(`direction:`, direction, `formSection:`, formSection)
    if (direction == `next`) {
        var newSelected = document.querySelector(`.selected${formSection}`)?.nextSibling;
    } else if (direction == "prev") {
        var newSelected = document.querySelector(`.selected${formSection}`)?.previousSibling;
    }
    if (!newSelected) return;
    var next = newSelected?.nextSibling;
    var prev = newSelected?.previousSibling;
    var prevSecond = prev?.previousSibling;
    var nextSecond = next?.nextSibling;
    //.replace() wasn't a great option here, as certain swaps needed to happen a little more flexibly:
    if (direction == `next`) {
        //adjust selected to the right
        document.querySelector(`.selected${formSection}`).classList.add(`prev${formSection}`)
        document.querySelector(`.selected${formSection}`).classList.remove(`selected${formSection}`)
        newSelected?.classList.remove(`next${formSection}`);
        newSelected?.classList.add(`selected${formSection}`);
        //prev needs to move right
        prev?.classList.add(`prev${formSection}`);
        prev?.previousSibling?.classList.remove(`hideRight${formSection}`);//
        prev?.classList.remove(`nextRightSecond${formSection}`);
        //next needs to move right
        next?.classList.add(`next${formSection}`);
        next?.classList.remove(`nextRightSecond${formSection}`)
        next?.nextSibling?.classList.remove(`next${formSection}`);
        //nextsecond needs to move right
        nextSecond?.classList.add(`nextRightSecond${formSection}`);
        nextSecond?.classList.remove(`hideRight${formSection}`)
        nextSecond?.nextSibling?.classList.add(`hideRight${formSection}`);
        //prevsecond needs to move right
        prevSecond?.classList.add(`prevLeftSecond${formSection}`)
        prevSecond?.classList.remove(`prev${formSection}`)
        prevSecond?.previousSibling?.classList.remove(`prevLeftSecond${formSection}`);
        prevSecond?.previousSibling?.classList.add(`hideLeft${formSection}`);
    } else if (direction == `prev`) {
        //adjust selected to the left
        document.querySelector(`.selected${formSection}`).classList.add(`next${formSection}`)
        document.querySelector(`.selected${formSection}`).classList.remove(`selected${formSection}`)
        newSelected?.classList.remove(`prev${formSection}`);
        newSelected?.classList.add(`selected${formSection}`);
        //prev needs to move left
        prev?.classList.add(`prev${formSection}`);
        prevSecond?.classList.add(`hideLeft${formSection}`)
        prev?.previousSibling?.classList.remove(`hideLeft${formSection}`);//
        prev?.classList.remove(`prevLeftSecond${formSection}`);
        //next needs to move left
        next?.classList.add(`next${formSection}`);
        next?.classList.remove(`nextRightSecond${formSection}`)
        next?.nextSibling?.classList.remove(`next${formSection}`);
        //nextsecond needs to move left
        nextSecond?.classList.add(`nextRightSecond${formSection}`);
        nextSecond?.nextSibling?.classList.add(`hideRight${formSection}`);
        nextSecond?.nextSibling?.classList.remove(`nextRightSecond${formSection}`);
        //prevsecond needs to move left
        prevSecond?.classList.add(`prevLeftSecond${formSection}`)
        prevSecond?.previousSibling?.classList.remove(`prevLeftSecond${formSection}`);
    }



    //TODO replacing moveToSelected with move2 would need to have the following be more flexible than it is right now:

    if (!prev) document.querySelector(`.prev-2`).style.opacity = `0`;
    else if (prev) document.querySelector(`.prev-2`).style.opacity = `1`;

    if (!next) document.querySelector(`.next-2`).style.opacity = `0`;
    else if (next) document.querySelector(`.next-2`).style.opacity = `1`;

}
