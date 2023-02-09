# Сайт для приюта домашних животных Cozy House

Demo: https://evgenialeleo.github.io/shelter/pages/main/
Лендинг для приюта домашних животных

<img width="482" alt="image" src="https://user-images.githubusercontent.com/88904845/217924205-be7eb741-323c-4e79-b243-55baf5d077aa.png">

## Структура и функционал приложения

### Главная страница приложения

- [x] Header
  - [x] интерактивная панель навигации
  - [x] логотип является ссылкой на главную страницу
  - [x] в мобильной версии - бургер-меню
- [x] Блок Not only
- [x] Блок About
- [x] Блок Our Friends
- [x] Блок Help
- [x] Блок In addition
- [x] Footer (содержит контакты, адрес и изображение)

<img width="364" alt="image" src="https://user-images.githubusercontent.com/88904845/217924834-04187ae0-e667-4203-a98f-b2f18d8c8b3f.png">

#### Страница Our Pets

- [x] Header (при скролле сохраняет свою позицию)
- [x] Блок Our Friends
- [x] Footer

<img width="322" alt="image" src="https://user-images.githubusercontent.com/88904845/217924568-79875ee8-9162-47b7-b32f-4d902307110a.png">

### Работа приложения

- [x] Header, бургер-меню:
  - [x] анимация появления/исчезновения
  - [x] анимация иконки бургера
  - [x] выступающая область затемнена
  - [x] при открытом меню вертикальный скролл становится неактивным
- [x] Главная страница, слайдер:
  - [x] бесконечный, не имеет границ, каждый раз контент в блоках будет новый: **псевдослучайный** набор питомцев (генерируется из исходных объектов в случайном порядке: в самом блоке слайда карточки с питомцами не повторяются, в следующем блоке дублирующихся карточек с карточками текущего блока нет)
  - [x] при обновлении страницы карточки могут быть любыми
- [x] Карточка питомца:
  - [x] модальное окно появляется при нажатии на любое место карточки с описанием конкретного питомца, остальная часть страницы затемняется
  - [x] вертикальный скролл становится неактивным
  - [x] при нажатии на модальное окно ничего не происходит
  - [x] при нажатии вне границ модального окна (на затемненную область, или на кнопку с крестиком), окно закрывается
- [x] Страница Our Pets, пагинация:
  - [x] при неизменных размерах области пагинации при возвращении на страницу под определенным номером контент на ней всегда будет одинаков
  - [x] при загрузке `Our Pets` формируется массив из 48 элементов псевдо-случайным образом. Каждый из 8 питомцев должен встречается ровно 6 раз. При этом каждые 8, каждые 6, и каждые 3, питомца на странице не повторяются
  - [x] при загрузке или перезагрузке окна браузера в `Our Pets` всегда должна быть активной первая страница
  - [x] кнопка `<<` всегда открывает первую страницу, кнопка `<` открывает предыдущую до текущей страницы
  - [x] кнопка `>` открывает следующую после текущей страницы, кнопка `>>` всегда открывает последнюю страницу
  - [x] при открытии первой страницы кнопки `<<` и `<` неактивны, при открытии последней страницы кнопки `>` и `>>` неактивны
- [x] Footer
  - [x] при нажатии на email или его иконку открывается почтовый сервис
  - [x] при нажатии на телефон или его иконку открывается набор номера
  - [x] при нажатии на локацию открывается отдельная страница с google maps
- [x] реализована адаптивная верстка (1280px, 768px, 320px)
- [x] данные о питомцах содержатся в файле pets.json
