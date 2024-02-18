
const userDataFromDatabase = [
    { name: "John Doe", items: ["Item 1", "Item 2", "Item 3"] },
    { name: "Jane Smith", items: ["Item A", "Item B"] },
    
];

function createUserBoxes(userData) {
    const userDataContainer = document.getElementById('userData');
    userDataContainer.innerHTML = ''; 

    userData.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        const nameParagraph = document.createElement('p');
        nameParagraph.innerHTML = `<strong>Name:</strong> ${user.name}`;

        const itemsList = document.createElement('ul');
        user.items.forEach(item => {
            const itemListItem = document.createElement('li');
            itemListItem.textContent = item;
            itemsList.appendChild(itemListItem);
        });

        userDiv.appendChild(nameParagraph);
        userDiv.appendChild(itemsList);

        userDataContainer.appendChild(userDiv);
    });
}

createUserBoxes(userDataFromDatabase);
