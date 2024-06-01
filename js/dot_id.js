const info_one = document.getElementById('info_one');

info_one.addEventListener('submit', (e) => {
    e.preventDefault();

    // Отримуємо значення з усіх input
    var Name_one = document.getElementById('Name_one').value;
    var phone_one = document.getElementById('phone_one').value;
    var town_one = document.getElementById('town_one').value;
    var color_select = document.getElementById('color-select').value;
    var size_select = document.getElementById('size-select').value;

    var token = '7407947815:AAFjpPnJyHXGL7RocoCIq1ItEE8uOExsOY4';
    var chat_id = '-4253217882';

    // Формуємо текст повідомлення з усіма даними
    var my_text = `Name: ${Name_one}\nPhone: ${phone_one}\nTown: ${town_one}\nColor: ${color_select}\nSize: ${size_select}`;

    // Виправлено форматування URL запиту
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    // Створюємо та відправляємо запит
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // Очищуємо всі поля input та select після відправки
    document.getElementById('Name_one').value = "";
    document.getElementById('phone_one').value = "";
    document.getElementById('town_one').value = "";
    document.getElementById('color-select').value = "";
    document.getElementById('size-select').value = "";
});
/*-------------------------------------------------two----------------------------------------------*/
const info_two = document.getElementById('info_two');

info_two.addEventListener('submit', (e) => {
    e.preventDefault();

    // Отримуємо значення з усіх input
    var Name_two = document.getElementById('Name_two').value;
    var Phone_two = document.getElementById('Phone_two').value;
    var Town_two = document.getElementById('Town_two').value;
    var color_select_two = document.getElementById('color-select_two').value;
    var size_select_two = document.getElementById('size-select_two').value;

    var token = '6752456684:AAHLBxSZvVZv-RODuJ-IYkENYD41EQnLveM';
    var chat_id = '-4212326178';

    // Формуємо текст повідомлення з усіма даними
    var my_text = `Name: ${Name_two}\nPhone: ${Phone_two}\nTown: ${Town_two}\nColor: ${color_select_two}\nSize: ${size_select_two}`;

    // Виправлено форматування URL запиту
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    // Створюємо та відправляємо запит
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // Очищуємо всі поля input та select після відправки
    document.getElementById('Name_two').value = "";
    document.getElementById('Phone_two').value = "";
    document.getElementById('Town_two').value = "";
    document.getElementById('color-select_two').value = "";
    document.getElementById('size-select_two').value = "";
});
/*---------------------------------------three-----------------------------------*/
const info_three = document.getElementById('info_three');

info_three.addEventListener('submit', (e) => {
    e.preventDefault();

    // Отримуємо значення з усіх input
    var Name_three = document.getElementById('Name_three').value;
    var Phone_three = document.getElementById('Phone_three').value;
    var Town_three = document.getElementById('Town_three').value;
    var color_select_three = document.getElementById('color-select_three').value;
    var size_select_three = document.getElementById('size-select_three').value;

    var token = '7375294479:AAFeZm0eWsBD7iPEhaFwJMAWgS8u0OmKwAA';
    var chat_id = '5117219821';

    // Формуємо текст повідомлення з усіма даними
    var my_text = `Name: ${Name_three}\nPhone: ${Phone_three}\nTown: ${Town_three}\nColor: ${color_select_three}\nSize: ${size_select_three}`;

    // Виправлено форматування URL запиту
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    // Створюємо та відправляємо запит
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // Очищуємо всі поля input та select після відправки
    document.getElementById('Name_three').value = "";
    document.getElementById('Phone_three').value = "";
    document.getElementById('Town_three').value = "";
    document.getElementById('color-select_three').value = "";
    document.getElementById('size-select_three').value = "";
});
/*---------------------------------------------four------------------------*/
const info_four = document.getElementById('info_four');

info_four.addEventListener('submit', (e) => {
    e.preventDefault();

    // Отримуємо значення з усіх input
    var Name_four = document.getElementById('Name_four').value;
    var Phone_four = document.getElementById('Phone_four').value;
    var Town_four = document.getElementById('Town_four').value;
    var color_select_four = document.getElementById('color-select_four').value;
    var size_select_four = document.getElementById('size-select_four').value;

    var token = '7252979782:AAEAs19fFXRrtVriWnpVlCxhhwjdWtKceDI';
    var chat_id = '5117219821';

    // Формуємо текст повідомлення з усіма даними
    var my_text = `Name: ${Name_four}\nPhone: ${Phone_four}\nTown: ${Town_four}\nColor: ${color_select_four}\nSize: ${size_select_four}`;

    // Виправлено форматування URL запиту
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    // Створюємо та відправляємо запит
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // Очищуємо всі поля input та select після відправки
    document.getElementById('Name_four').value = "";
    document.getElementById('Phone_four').value = "";
    document.getElementById('Town_four').value = "";
    document.getElementById('color-select_four').value = "";
    document.getElementById('size-select_four').value = "";
});
/*--------------------------------------five-------------------------------------------------------*/
const info_five = document.getElementById('info_five');

info_five.addEventListener('submit', (e) => {
    e.preventDefault();

    // Отримуємо значення з усіх input
    var Name_five = document.getElementById('Name_five').value;
    var Phone_five = document.getElementById('Phone_five').value;
    var Town_five = document.getElementById('Town_five').value;
    var color_select_five = document.getElementById('color-select_five').value;
    var size_select_five = document.getElementById('size-select_five').value;

    var token = '7493991080:AAG3GaevgZaNzT5FtaTumjJ4S9PSzTtq3mE';
    var chat_id = '5117219821';

    // Формуємо текст повідомлення з усіма даними
    var my_text = `Name: ${Name_five}\nPhone: ${Phone_five}\nTown: ${Town_five}\nColor: ${color_select_five}\nSize: ${size_select_five}`;

    // Виправлено форматування URL запиту
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    // Створюємо та відправляємо запит
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // Очищуємо всі поля input та select після відправки
    document.getElementById('Name_five').value = "";
    document.getElementById('Phone_five').value = "";
    document.getElementById('Town_five').value = "";
    document.getElementById('color-select_five').value = "";
    document.getElementById('size-select_five').value = "";
});