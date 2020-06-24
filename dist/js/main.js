let title = document.querySelectorAll('.title');
title.forEach(item => item.addEventListener('click', titleOnClick));

function titleOnClick(e) {
    let children = this.children;
    let contents = document.querySelectorAll('.answer');
    const id = this.parentNode.id;

    const content = document.querySelector(`#${id}-answer`);
    contents.forEach(cont => cont.style.display = 'none');

    if (children[1].style.display === 'none') {
        restTitleIcon();
        children[1].style.display = 'block';
        children[2].style.display = 'none';
        content.style.display = "none";
    }
    else {
        restTitleIcon();
        children[2].style.display = 'block';
        children[1].style.display = 'none';
        content.style.display = "block";
    }
}

function restTitleIcon() {
    let titles = document.querySelectorAll('.title')
    titles.forEach(t => {
        t.children[1].style.display = 'block';
        t.children[2].style.display = 'none';
    })
}