document.getElementById('addButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();
    
    if (itemText) {
        const itemList = document.getElementById('itemList');

        const li = document.createElement('li');
        li.textContent = itemText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '×'; // Çarpı simgesi
        deleteButton.style.marginLeft = '10px';
        deleteButton.style.fontSize = '16px'; // Simge boyutunu ayarlama
        
        deleteButton.addEventListener('click', function() {
            itemList.removeChild(li);
        });

        // Tıklama ile tamamlandı durumu
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);
        itemList.appendChild(li);
        itemInput.value = ''; // Girdi alanını temizle
    }
});
const container = document.getElementById('container');
const addBoxButton = document.getElementById('addBox');
let colorToggle = true; // İlk kutucuk için başlangıç rengi

addBoxButton.addEventListener('click', () => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = colorToggle ? 'darkgray' : 'white'; // Renk belirleme
    container.appendChild(box);
    
    colorToggle = !colorToggle; // Rengi değiştir
});
