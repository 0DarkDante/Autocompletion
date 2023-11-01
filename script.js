let arr = ['Belarus', 'Belgium', 'Bulgaria', 'Canada', 'China', 'Croatia', 'Denmark', 'Egypt', 'France', 'Germany', 'Greece', 'Hungary', 'India', 'Indonesia', 'Italy', 'Japan', 'Korea', 'Mexico', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Spain', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Ukraine', 'United Kingdom', 'United States'];
let input = document.getElementById('elem');
let list = document.getElementById('list');

input.addEventListener('input', function () {
    let inputValue = input.value.trim().toLowerCase();
    let filteredCountries = arr.filter(country => country.toLowerCase().startsWith(inputValue));
    
    // Очищаем список ul
    list.innerHTML = '';
    
    // Заполняем список ul лишками с отфильтрованными странами
    filteredCountries.forEach(country => {
        let li = document.createElement('li');
        li.textContent = country;
        
        li.addEventListener('click', function () {
            input.value = country; // При клике на страну, она появляется в инпуте
            list.innerHTML = ''; // Очищаем список ul после выбора
        });
        
        list.appendChild(li);
    });
    
    // Позиционируем список ul под инпутом
    list.style.top = (input.offsetTop + input.offsetHeight) + 'px';
    list.style.left = input.offsetLeft + 'px';
});