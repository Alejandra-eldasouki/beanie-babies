export function renderBeanie(beanie) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const content = document.createElement('div');
    const h2 = document.createElement('h2');
    const attributes = document.createElement('p');

    const astroSign = document.createElement('span');
    const subTheme = document.createElement('span');
    const animal = document.createElement('span');

    li.classList.add('card');
    content.classList.add('content');
    attributes.classList.add('attributes');

    img.src = beanie.img;
    img.alt = beanie.title;
    h2.textContent = beanie.title;
    astroSign.textContent = beanie.astroSign;
    animal.textContent = beanie.animal;
    subTheme.textContent = beanie.subTheme;

    attributes.append(animal, subTheme, astroSign);
    const released = document.createElement('p');
    released.classList.add('released');

    released.textContent = `Released ${beanie.releaseYear}`;

    content.append(h2, attributes, released);

    li.append(img, content);

    return li;
}

export function renderAstroSign(astroSign) {
    const option = document.createElement('option');
    option.value = astroSign.name;
    option.textContent = astroSign.name;
    return option;
}
