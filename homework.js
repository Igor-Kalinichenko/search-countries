console.table(countries);

function renderCountries(countries) {
    const htmlStr = countries.map(function(country) {
        return `<tr><td>${countries.indexOf(country)+1}</td><td>${country.name}</td><td>${country.capital}</td><td>${country.region}</td><td>${country.area}</td></tr>`
    }).join('');
    document.querySelector('.countries tbody').innerHTML = htmlStr || `<tr><td colspan="5" class="text-center">Not Found</td></tr>`;
}
renderCountries(countries);


document.querySelector('#search').onkeyup = function(event) {
    let value = event.currentTarget.value.toLowerCase().trim();
    let filteredContries = countries.filter(function(country) {
        return country.name.toLowerCase().includes(value) || country.capital.toLowerCase().includes(value) || country.region.toLowerCase().includes(value);
    });
    renderCountries(filteredContries);
}
/* Домашка
1. Отрендерить таблицу стран. в таблицу должны войти поля: name, capital, region, area
2. добавить поисковик (по примеру с занятия), событие на него
3. по событию искать частичные совпадения введенного текста с полями name, capital, region. выдавать полученные результаты в таблицу
4. если нет результатов - показывать соответствующую строку "не найдено" в результатах поиска
*/