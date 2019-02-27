const cafeList = document.querySelector('#cafe-list');

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

db.collection('cafes').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});