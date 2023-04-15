function addLvl(name, auther, id, top, src) {
    const ul = document.querySelector('ul.dl_ul');
    const li = document.createElement('li');
    ul.appendChild(li);

    const img = document.createElement('img');
    img.src = src;
    img.classList.add('dl_img');
    li.appendChild(img);

    const div = document.createElement('div');
    div.classList.add('dl_block');
    li.appendChild(div)

    const p1 = document.createElement('p');
    let text = document.createTextNode(`${top}. ${name} by ${auther}`);
    p1.appendChild(text);
    div.appendChild(p1);

    const p2 = document.createElement('p');
    text = document.createTextNode(`id: ${id}`);
    p2.appendChild(text);
    div.appendChild(p2);
} // Честно, никогда не думала, что смогу сделать такое.