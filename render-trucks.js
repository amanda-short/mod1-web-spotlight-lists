export function renderTrucks(trucks) {
    const li = document.createElement('li');
    li.classList.add('trucks-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = trucks.quality + ' ' + trucks.color;

    li.append(headerEl, pEl);
}