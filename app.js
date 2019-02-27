const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

function renderCafe(doc) {
    let li = document.createElement('li');
    let nameSpan = document.createElement('span');
    let citySpan = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    nameSpan.textContent = doc.data().name;
    citySpan.textContent = doc.data().city;

    li.appendChild(nameSpan);
    li.appendChild(citySpan);

    cafeList.appendChild(li);
}


// getting data
db.collection('cafes').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
});