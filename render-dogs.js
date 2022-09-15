export function renderDogs(dogs) {
    const li = document.getElementById('li');
    li.classList.add('dog-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = dogs.name;

    const pEl = document.createElement('p');
    pEl.textContent = dogs.size + ' ' + dogs.quality;

    li.append(headerEl, pEl);

    return li;
}