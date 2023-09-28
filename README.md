# 🖥️ InspectorJS (Свойства)

## Общее описание
InspectorJS - это инструмент, который помогает создавать на веб-сайтах интерактивные панели для управления данными. Он предоставляет возможность добавлять разнообразные элементы управления, такие как кнопки, ползунки и выпадающие списки, чтобы пользователи могли легко взаимодействовать с информацией

![Иллюстрация к проекту](https://raw.githubusercontent.com/official-inso/InspectorJS/main/example/assets/screen.png)

## Вот несколько преимуществ, которые сделают ее полезной для вас:

1. <b>Простота использования</b>: Вы можете легко создавать пользовательские панели на вашем веб-сайте без необходимости глубокого знания программирования.
2. <b>Интерактивные элементы</b>: Библиотека предоставляет разнообразные интерактивные элементы, такие как кнопки, ползунки и выпадающие списки, которые пользователи могут использовать для взаимодействия с вашими данными.
3. <b>Поддержка разных типов данных</b>: Вы можете отображать и редактировать разные типы данных, такие как строки, числа, цвета и файлы, делая ваш интерфейс более гибким.
4. <b>Обратные вызовы при изменении данных</b>: Вы можете настроить функции обратного вызова, которые будут вызываться при изменении данных, что позволяет реагировать на изменения в реальном времени.
5. <b>Группировка данных</b>: Вы можете организовывать ваши данные в группы и скрывать/показывать их по желанию, что помогает сделать интерфейс более удобным.
6. <b>Иконки и стилизация</b>: Библиотека поддерживает добавление иконок и настройку стилей элементов, что позволяет сделать ваш интерфейс более привлекательным.
7. <b>Множественные значения</b>: Вы можете предоставить выбор из нескольких значений для определенных свойств, что делает ваш интерфейс более гибким.
8. <b>Поддержка кнопок для действий</b>: Вы можете добавлять кнопки, которые выполняют определенные действия при нажатии, что может быть полезно для управления вашими данными.
9. <b>Поддержка чтения данных</b>: Можно установить флаг "только для чтения" для определенных свойств, если вы хотите предоставить информацию без возможности изменения.
10. <b>Поддержка обработки ошибок</b>: Библиотека может обрабатывать ошибки и неправильные вводы, делая интерфейс более надежным.

Эти возможности позволяют создавать интерактивные и удобные интерфейсы для ваших пользователей <b>без необходимости писать много кода с нуля</b>.

## Работа с библиотекой

### Подключение
```javascript
import InspectorJS from './../init.js';
```

### Инициализация класса
```javascript
const inspector = new InspectorJS(document.getElementById("inspectorJS_content"));
```
Параметр инициализации отвечает, за то место, где будет развернуто InspectorJS
### Пример создания навигационного меню
```javascript
inspector.setValue([
{
  icon: "icons-folder", // Иконка группы (default: icons-favorite)
  id: "rndString", // ID группы (default: randomString(32))
  name: "Название группы", // Название группы (default: "Без названия")
  show: true, // Флаг открыта ли группа по умолчанию (default: false)
  buttons: [
    {
      icon: "icons-del", // Иконка кнопки (default: undefined)
      click: (idGroup, elem) => {
        console.log(idGroup, elem);
      }, // Функция callback при нажатии на кнопку (default: undefined)
    },
  ], // Кнопки группы (default: [])
  properties: [
    {
      id: "rndString100", // ID свойства (default: randomString(32))
      name: "Центральный маркер точки", // Название свойства (default: "Без названия")
      property: "param100", // Произвольное значение (default: undefined)
      type: "centerMarker", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      value: [50, 50], // Значение свойства (default: [50, 50])
      readonly: false, // Флаг только для чтения (default: false)
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    {
      id: "rndString1", // ID свойства (default: randomString(32))
      name: "Строковое значение", // Название свойства (default: "Без названия")
      property: "param1", // Произвольное значение (default: undefined)
      type: "string", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      value: "Hello world!", // Значение свойства (default: "")
      readonly: false, // Флаг только для чтения (default: false)
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    {
      id: "rndString1", // ID свойства (default: randomString(32))
      name: "Мультистроковое значение", // Название свойства (default: "Без названия")
      property: "param1", // Произвольное значение (default: undefined)
      type: "multiString", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      value: "Hello world!", // Значение свойства (default: "")
      readonly: false, // Флаг только для чтения (default: false)
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    {
      id: "rndString2", // ID свойства (default: randomString(32))
      name: "Целочисленное значение", // Название свойства (default: "Без названия")
      property: "param2", // Произвольное значение (default: undefined)
      type: "integer", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      value: 50, // Значение свойства (default: 0)
      readonly: false, // Флаг только для чтения (default: false)
      min: -50, // Минимальное значение (default: 0)
      max: 100, // Максимальное значение (default: 100)
      step: 1, // Шаг изменения (default: 1)
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    {
      id: "rndString3", // ID свойства (default: randomString(32))
      name: "Дробное значение", // Название свойства (default: "Без названия")
      property: "param3", // Произвольное значение (default: undefined)
      type: "float", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      value: 1, // Значение свойства (default: 0)
      readonly: false, // Флаг только для чтения (default: false)
      min: 0, // Минимальное значение (default: undefined)
      max: 100, // Максимальное значение (default: undefined)
      step: 0.01, // Шаг изменения (default: 1)
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    {
      id: "rndString4", // ID свойства (default: randomString(32))
      name: "Выпадающий список", // Название свойства (default: "Без названия")
      property: "param4", // Произвольное значение (default: undefined)
      type: "select", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      value: "key2", // Значение свойства (default: undefined)
      readonly: false, // Флаг только для чтения (default: false)
      options: {
        key1: "value1", // Варианты значений
        key2: "value2", // Варианты значений
        key3: "value3", // Варианты значений
        key4: "value4", // Варианты значений
      }, // Варианты значений (default: {})
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    {
      id: "rndString5", // ID свойства (default: randomString(32))
      name: "Выбор файла", // Название свойства (default: "Без названия")
      property: "param5", // Произвольное значение (default: undefined)
      type: "file", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      value: "image.png", // Значение свойства (default: undefined)
      readonly: false, // Флаг только для чтения (default: false)
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    {
      id: "rndString6", // ID свойства (default: randomString(32))
      name: "Логическое значение", // Название свойства (default: "Без названия")
      property: "param6", // Произвольное значение (default: undefined)
      type: "boolean", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      value: true, // Значение свойства (default: false)
      readonly: false, // Флаг только для чтения (default: false)
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    {
      id: "rndString7", // ID свойства (default: randomString(32))
      name: "Выбор цвета", // Название свойства (default: "Без названия")
      property: "param7", // Произвольное значение (default: undefined)
      type: "color", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      value: "#000000", // Значение свойства (default: undefined)
      readonly: false, // Флаг только для чтения (default: false)
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    {
      id: "rndString17", // ID свойства (default: randomString(32))
      name: "Кнопка", // Название свойства (default: "Без названия")
      property: "param99", // Произвольное значение (default: undefined)
      type: "button", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      icon: "icons-info", // Иконка кнопки (default: undefined)
      // bg: "#AA2F05", // Цвет фона кнопки (default: undefined)
      text: "Действие", // Значение свойства (default: undefined)
      click: (property, elem, id, e) => {
        console.log(property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    "hr", // Разделитель
    {
      id: "rndString8", // ID свойства (default: randomString(32))
      name: "Ползунок", // Название свойства (default: "Без названия")
      property: "param8", // Произвольное значение (default: undefined)
      type: "slider", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      value: 0, // Значение свойства (default: 0)
      step: 0.01, // Шаг изменения (default: 1)
      min: -100, // Минимальное значение (default: 0)
      max: 100, // Максимальное значение (default: 100)
      readonly: false, // Флаг только для чтения (default: false)
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      }, // Функция callback при изменении значения (default: undefined)
    },
    {
      id: "rndString9", // ID свойства (default: randomString(32))
      name: "Множественные значения", // Название свойства (default: "Без названия")
      property: "param9", // Произвольное значение (default: undefined)
      type: "values", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
      group: "2", // 1 | 2 | 3 | 4 | auto (default: "auto")
      value: [
        {
          name: "X", // Название свойства (default: "Без названия")
          type: "float", // string | integer | float | color | select (default: "string")
          id: "rndString911", // ID свойства (default: randomString(32))
          value: 20, // Значение свойства (default: 0)
          min: 0, // Минимальное значение (default: 0)
          max: 100, // Максимальное значение (default: 100)
          step: 10, // Шаг изменения (default: 1)
          readonly: false, // Флаг только для чтения (default: false)
          change: (value, values, property, elem, id, e) => {
            console.log(value, values, property, elem, id, e);
          }, // Функция callback при изменении значения (default: undefined)
        },
        {
          id: "rndString914", // ID свойства (default: randomString(32))
          name: "Кнопка", // Название свойства (default: "Без названия")
          type: "button", // centerMarker | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
          // icon: "icons-info", // Иконка кнопки (default: undefined)
          // bg: "#AA2F05", // Цвет фона кнопки (default: undefined)
          text: "Действие", // Значение свойства (default: undefined)
          click: (property, values, elem, id, e) => {
            console.log(property, values, elem, id, e);
          }, // Функция callback при изменении значения (default: undefined)
        },
        {
          name: "Color", // Название свойства (default: "Без названия")
          type: "color", // string | integer | float | color | select (default: "string")
          id: "rndString912", // ID свойства (default: randomString(32))
          value: undefined, // Значение свойства (default: 0)
          min: 0, // Минимальное значение (default: 0)
          max: 100, // Максимальное значение (default: 100)
          step: 0.01, // Шаг изменения (default: 1)
          readonly: false, // Флаг только для чтения (default: false)
          change: (value, values, property, elem, id, e) => {
            console.log(value, values, property, elem, id, e);
          }, // Функция callback при изменении значения (default: undefined)
        },
        {
          name: "Unit", // Название свойства (default: "Без названия")
          type: "select", // string | integer | float | color | select (default: "string")
          id: "rndString913", // ID свойства (default: randomString(32))
          value: "px", // Значение свойства (default: undefined)
          options: {
            px: "px", // Варианты значений
            mm: "mm", // Варианты значений
            "%": "%", // Варианты значений
          }, // Варианты значений
          readonly: false, // Флаг только для чтения (default: false)
          change: (value, values, property, elem, id, e) => {
            console.log(value, values, property, elem, id, e);
          }, // Функция callback при изменении значения (default: undefined)
        },
      ], // Значение множественного свойства
    },
  ],
},
{
  icon: "icons-folder",
  id: "rndString00",
  name: "Название группы",
  show: false,
  properties: [
    {
      id: "rndString01",
      name: "Человеческое название",
      property: "param01",
      type: "string",
      value: "Hello world!",
      readonly: true,
      change: (value, property, elem, id, e) => {
        console.log(value, property, elem, id, e);
      },
    },
  ],
},
]);  
```

### Пример вывода
Добавляение происходит путем удаление предыдущих значений и добавления всех значений к текущему DOM объекту
```javascript
inspector.getValue();
```
