// script.js
document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        { number: 1, symbol: "H", name: "Водород", weight: 1.008, group: 1, period: 1 },
        { number: 2, symbol: "He", name: "Гелий", weight: 4.0026, group: 18, period: 1 },
        { number: 3, symbol: "Li", name: "Литий", weight: 6.94, group: 1, period: 2 },
        { number: 4, symbol: "Be", name: "Бериллий", weight: 9.0122, group: 2, period: 2 },
        { number: 5, symbol: "B", name: "Бор", weight: 10.81, group: 13, period: 2 },
        { number: 6, symbol: "C", name: "Углерод", weight: 12.011, group: 14, period: 2 },
        { number: 7, symbol: "N", name: "Азот", weight: 14.007, group: 15, period: 2 },
        { number: 8, symbol: "O", name: "Кислород", weight: 15.999, group: 16, period: 2 },
        { number: 9, symbol: "F", name: "Фтор", weight: 18.998, group: 17, period: 2 },
        { number: 10, symbol: "Ne", name: "Неон", weight: 20.180, group: 18, period: 2 },
        { number: 11, symbol: "Na", name: "Натрий", weight: 22.990, group: 1, period: 3 },
        { number: 12, symbol: "Mg", name: "Магний", weight: 24.305, group: 2, period: 3 },
        { number: 13, symbol: "Al", name: "Алюминий", weight: 26.982, group: 13, period: 3 },
        { number: 14, symbol: "Si", name: "Кремний", weight: 28.085, group: 14, period: 3 },
        { number: 15, symbol: "P", name: "Фосфор", weight: 30.974, group: 15, period: 3 },
        { number: 16, symbol: "S", name: "Сера", weight: 32.06, group: 16, period: 3 },
        { number: 17, symbol: "Cl", name: "Хлор", weight: 35.45, group: 17, period: 3 },
        { number: 18, symbol: "Ar", name: "Аргон", weight: 39.948, group: 18, period: 3 },
        { number: 19, symbol: "K", name: "Калий", weight: 39.098, group: 1, period: 4 },
        { number: 20, symbol: "Ca", name: "Кальций", weight: 40.078, group: 2, period: 4 },
        { number: 21, symbol: "Sc", name: "Скандий", weight: 44.956, group: 3, period: 4 },
        { number: 22, symbol: "Ti", name: "Титан", weight: 47.867, group: 4, period: 4 },
        { number: 23, symbol: "V", name: "Ванадий", weight: 50.942, group: 5, period: 4 },
        { number: 24, symbol: "Cr", name: "Хром", weight: 51.996, group: 6, period: 4 },
        { number: 25, symbol: "Mn", name: "Марганец", weight: 54.938, group: 7, period: 4 },
        { number: 26, symbol: "Fe", name: "Железо", weight: 55.845, group: 8, period: 4 },
        { number: 27, symbol: "Co", name: "Кобальт", weight: 58.933, group: 9, period: 4 },
        { number: 28, symbol: "Ni", name: "Никель", weight: 58.693, group: 10, period: 4 },
        { number: 29, symbol: "Cu", name: "Медь", weight: 63.546, group: 11, period: 4 },
        { number: 30, symbol: "Zn", name: "Цинк", weight: 65.38, group: 12, period: 4 },
        { number: 31, symbol: "Ga", name: "Галлий", weight: 69.723, group: 13, period: 4 },
        { number: 32, symbol: "Ge", name: "Германий", weight: 72.63, group: 14, period: 4 },
        { number: 33, symbol: "As", name: "Мышьяк", weight: 74.922, group: 15, period: 4 },
        { number: 34, symbol: "Se", name: "Селен", weight: 78.971, group: 16, period: 4 },
        { number: 35, symbol: "Br", name: "Бром", weight: 79.904, group: 17, period: 4 },
        { number: 36, symbol: "Kr", name: "Криптон", weight: 83.798, group: 18, period: 4 },
        { number: 36, symbol: "Kr", name: "Криптон", weight: 83.798, group: 18, period: 4 },
        { number: 37, symbol: "Rb", name: "Рубидий", weight: 85.468, group: 1, period: 5 },
        { number: 38, symbol: "Sr", name: "Стронций", weight: 87.62, group: 2, period: 5 },
        { number: 39, symbol: "Y", name: "Иттрий", weight: 88.906, group: 3, period: 5 },
        { number: 40, symbol: "Zr", name: "Цирконий", weight: 91.224, group: 4, period: 5 },
        { number: 41, symbol: "Nb", name: "Ниобий", weight: 92.906, group: 5, period: 5 },
        { number: 42, symbol: "Mo", name: "Молибден", weight: 95.95, group: 6, period: 5 },
        { number: 43, symbol: "Tc", name: "Технеций", weight: 98, group: 7, period: 5 },
        { number: 44, symbol: "Ru", name: "Рутений", weight: 101.07, group: 8, period: 5 },
        { number: 45, symbol: "Rh", name: "Родий", weight: 102.91, group: 9, period: 5 },
        { number: 46, symbol: "Pd", name: "Палладий", weight: 106.42, group: 10, period: 5 },
        { number: 47, symbol: "Ag", name: "Серебро", weight: 107.87, group: 11, period: 5 },
        { number: 48, symbol: "Cd", name: "Кадмий", weight: 112.41, group: 12, period: 5 },
        { number: 49, symbol: "In", name: "Индий", weight: 114.82, group: 13, period: 5 },
        { number: 50, symbol: "Sn", name: "Олово", weight: 118.71, group: 14, period: 5 },
        { number: 51, symbol: "Sb", name: "Сурьма", weight: 121.76, group: 15, period: 5 },
        { number: 52, symbol: "Te", name: "Теллур", weight: 127.6, group: 16, period: 5 },
        { number: 53, symbol: "I", name: "Йод", weight: 126.9, group: 17, period: 5 },
        { number: 54, symbol: "Xe", name: "Ксенон", weight: 131.29, group: 18, period: 5 },
        { number: 55, symbol: "Cs", name: "Цезий", weight: 132.91, group: 1, period: 6 },
        { number: 56, symbol: "Ba", name: "Барий", weight: 137.33, group: 2, period: 6 },
        { number: 57, symbol: "La", name: "Лантан", weight: 138.91, group: 3, period: 6 },
        { number: 58, symbol: "Ce", name: "Церий", weight: 140.12, group: "Лантаноиды", period: 6 },
        { number: 59, symbol: "Pr", name: "Празеодим", weight: 140.91, group: "Лантаноиды", period: 6 },
        { number: 60, symbol: "Nd", name: "Неодим", weight: 144.24, group: "Лантаноиды", period: 6 },
        { number: 61, symbol: "Pm", name: "Прометий", weight: 145, group: "Лантаноиды", period: 6 },
        { number: 62, symbol: "Sm", name: "Самарий", weight: 150.36, group: "Лантаноиды", period: 6 },
        { number: 63, symbol: "Eu", name: "Европий", weight: 151.96, group: "Лантаноиды", period: 6 },
        { number: 64, symbol: "Gd", name: "Гадолиний", weight: 157.25, group: "Лантаноиды", period: 6 },
        { number: 65, symbol: "Tb", name: "Тербий", weight: 158.93, group: "Лантаноиды", period: 6 },
        { number: 66, symbol: "Dy", name: "Диспрозий", weight: 162.5, group: "Лантаноиды", period: 6 },
        { number: 67, symbol: "Ho", name: "Гольмий", weight: 164.93, group: "Лантаноиды", period: 6 },
        { number: 68, symbol: "Er", name: "Эрбий", weight: 167.26, group: "Лантаноиды", period: 6 },
        { number: 69, symbol: "Tm", name: "Тулий", weight: 168.93, group: "Лантаноиды", period: 6 },
        { number: 70, symbol: "Yb", name: "Иттербий", weight: 173.05, group: "Лантаноиды", period: 6 },
        { number: 71, symbol: "Lu", name: "Лютеций", weight: 174.97, group: 3, period: 6 },
        { number: 72, symbol: "Hf", name: "Гафний", weight: 178.49, group: 4, period: 6 },
        { number: 73, symbol: "Ta", name: "Тантал", weight: 180.95, group: 5, period: 6 },
        { number: 74, symbol: "W", name: "Вольфрам", weight: 183.84, group: 6, period: 6 },
        { number: 75, symbol: "Re", name: "Рений", weight: 186.21, group: 7, period: 6 },
        { number: 76, symbol: "Os", name: "Осмий", weight: 190.23, group: 8, period: 6 },
        { number: 77, symbol: "Ir", name: "Иридий", weight: 192.22, group: 9, period: 6 },
        { number: 78, symbol: "Pt", name: "Платина", weight: 195.08, group: 10, period: 6 },
        { number: 79, symbol: "Au", name: "Золото", weight: 196.97, group: 11, period: 6 },
        { number: 80, symbol: "Hg", name: "Ртуть", weight: 200.59, group: 12, period: 6 },
        { number: 81, symbol: "Tl", name: "Таллий", weight: 204.38, group: 13, period: 6 },
        { number: 82, symbol: "Pb", name: "Свинец", weight: 207.2, group: 14, period: 6 },
        { number: 83, symbol: "Bi", name: "Висмут", weight: 208.98, group: 15, period: 6 },
        { number: 84, symbol: "Po", name: "Полоний", weight: 209, group: 16, period: 6 },
        { number: 85, symbol: "At", name: "Астат", weight: 210, group: 17, period: 6 },
        { number: 86, symbol: "Rn", name: "Радон", weight: 222, group: 18, period: 6 },
        { number: 87, symbol: "Fr", name: "Франций", weight: 223, group: 1, period: 7 },
        { number: 88, symbol: "Ra", name: "Радий", weight: 226, group: 2, period: 7 },
        { number: 89, symbol: "Ac", name: "Актиний", weight: 227, group: 3, period: 7 },
        { number: 90, symbol: "Th", name: "Торий", weight: 232.04, group: "Актиноиды", period: 7 },
        { number: 91, symbol: "Pa", name: "Протактиний", weight: 231.04, group: "Актиноиды", period: 7 },
        { number: 92, symbol: "U", name: "Уран", weight: 238.03, group: "Актиноиды", period: 7 },
        { number: 93, symbol: "Np", name: "Нептуний", weight: 237, group: "Актиноиды", period: 7 },
        { number: 94, symbol: "Pu", name: "Плутоний", weight: 244, group: "Актиноиды", period: 7 },
        { number: 95, symbol: "Am", name: "Америций", weight: 243, group: "Актиноиды", period: 7 },
        { number: 96, symbol: "Cm", name: "Кюрий", weight: 247, group: "Актиноиды", period: 7 },
        { number: 97, symbol: "Bk", name: "Берклий", weight: 247, group: "Актиноиды", period: 7 },
        { number: 98, symbol: "Cf", name: "Калифорний", weight: 251, group: "Актиноиды", period: 7 },
        { number: 99, symbol: "Es", name: "Эйнштейний", weight: 252, group: "Актиноиды", period: 7 },
        { number: 100, symbol: "Fm", name: "Фермий", weight: 257, group: "Актиноиды", period: 7 },
        { number: 101, symbol: "Md", name: "Менделевий", weight: 258, group: "Актиноиды", period: 7 },
        { number: 102, symbol: "No", name: "Нобелий", weight: 259, group: "Актиноиды", period: 7 },
        { number: 103, symbol: "Lr", name: "Лоуренсий", weight: 262, group: 3, period: 7 },
        { number: 104, symbol: "Rf", name: "Резерфордий", weight: 267, group: 4, period: 7 },
        { number: 105, symbol: "Db", name: "Дубний", weight: 270, group: 5, period: 7 },
        { number: 106, symbol: "Sg", name: "Сиборгий", weight: 271, group: 6, period: 7 },
        { number: 107, symbol: "Bh", name: "Борий", weight: 270, group: 7, period: 7 },
        { number: 108, symbol: "Hs", name: "Хассий", weight: 277, group: 8, period: 7 },
        { number: 109, symbol: "Mt", name: "Мейтнерий", weight: 278, group: 9, period: 7 },
        { number: 110, symbol: "Ds", name: "Дармштадтий", weight: 281, group: 10, period: 7 },
        { number: 111, symbol: "Rg", name: "Рентгений", weight: 282, group: 11, period: 7 },
        { number: 112, symbol: "Cn", name: "Коперниций", weight: 285, group: 12, period: 7 },
        { number: 113, symbol: "Nh", name: "Нихоний", weight: 286, group: 13, period: 7 },
        { number: 114, symbol: "Fl", name: "Флеровий", weight: 289, group: 14, period: 7 },
        { number: 115, symbol: "Mc", name: "Московий", weight: 290, group: 15, period: 7 },
        { number: 116, symbol: "Lv", name: "Ливерморий", weight: 293, group: 16, period: 7 },
        { number: 117, symbol: "Ts", name: "Теннесин", weight: 294, group: 17, period: 7 },
        { number: 118, symbol: "Og", name: "Оганесон", weight: 294, group: 18, period: 7 },
    ];

    const tableContainer = document.getElementById("periodic-table");
    const searchInput = document.getElementById("search");
    const groupFilter = document.getElementById("group-filter");
    const periodFilter = document.getElementById("period-filter");

    // Генерация фильтров
    const groups = [...new Set(elements.map(el => el.group))];
    const periods = [...new Set(elements.map(el => el.period))];

    groups.forEach(group => {
        const option = document.createElement("option");
        option.value = group;
        option.textContent = `Группа ${group}`;
        groupFilter.appendChild(option);
    });

    periods.forEach(period => {
        const option = document.createElement("option");
        option.value = period;
        option.textContent = `Период ${period}`;
        periodFilter.appendChild(option);
    });

    // Функция отображения элементов
    const renderElements = (filter = {}) => {
        const { search = "", group = "all", period = "all" } = filter;
        tableContainer.innerHTML = "";
        const filtered = elements.filter(el => {
            const matchesSearch = el.name.toLowerCase().includes(search.toLowerCase()) ||
                                  el.symbol.toLowerCase().includes(search.toLowerCase()) ||
                                  el.number.toString().includes(search);
            const matchesGroup = group === "all" || el.group === parseInt(group);
            const matchesPeriod = period === "all" || el.period === parseInt(period);
            return matchesSearch && matchesGroup && matchesPeriod;
        });

        filtered.forEach(el => {
            const elementDiv = document.createElement("div");
            elementDiv.className = "element";
            elementDiv.innerHTML = `
                <div class="number">${el.number}</div>
                <div class="symbol">${el.symbol}</div>
                <div class="name">${el.name}</div>
            `;
            tableContainer.appendChild(elementDiv);
        });
    };

    // Обработчики событий
    searchInput.addEventListener("input", () => {
        renderElements({ search: searchInput.value, group: groupFilter.value, period: periodFilter.value });
    });

    groupFilter.addEventListener("change", () => {
        renderElements({ search: searchInput.value, group: groupFilter.value, period: periodFilter.value });
    });

    periodFilter.addEventListener("change", () => {
        renderElements({ search: searchInput.value, group: groupFilter.value, period: periodFilter.value });
    });

    // Первичная отрисовка
    renderElements();
});



