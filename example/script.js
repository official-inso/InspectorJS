import InspectorJS from './../init.js';

document.addEventListener('DOMContentLoaded', function() {

  const inspector = new InspectorJS(
    document.getElementById("inspectorJS_content")
  );

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
          type: "string", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
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
          type: "multiString", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
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
          type: "integer", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
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
          type: "float", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
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
          type: "select", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
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
          type: "file", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
          value: "image.png", // Значение свойства (default: undefined)
          readonly: false, // Флаг только для чтения (default: false)
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          }, // Функция callback при изменении значения (default: undefined)
        },
        {
          id: "rndString987", // ID свойства (default: randomString(32))
          name: "Выравнивание по оси Х", // Название свойства (default: "Без названия")
          property: "param1", // Произвольное значение (default: undefined)
          type: "alignX", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
          value: "left", // Значение свойства (default: "")
          readonly: false, // Флаг только для чтения (default: false)
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          }, // Функция callback при изменении значения (default: undefined)
        },
        {
          id: "rndString987", // ID свойства (default: randomString(32))
          name: "Выравнивание по оси Y", // Название свойства (default: "Без названия")
          property: "param1", // Произвольное значение (default: undefined)
          type: "alignY", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
          value: "center", // Значение свойства (default: "")
          readonly: false, // Флаг только для чтения (default: false)
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          }, // Функция callback при изменении значения (default: undefined)
        },
        {
          id: "rndString6", // ID свойства (default: randomString(32))
          name: "Логическое значение", // Название свойства (default: "Без названия")
          property: "param6", // Произвольное значение (default: undefined)
          type: "boolean", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
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
          type: "color", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
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
          type: "button", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
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
          type: "slider", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
          value: 0, // Значение свойства (default: 0)
          step: 0.1, // Шаг изменения (default: 1)
          min: -250, // Минимальное значение (default: 0)
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
          type: "values", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
          group: "2", // 1 | 2 | 3 | 4 | auto (default: "auto")
          value: [
            {
              name: "X", // Название свойства (default: "Без названия")
              type: "float", // string | integer | float | values | button | color | select (default: "string")
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
              type: "button", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
              bg: "#AA2F05", // Цвет фона кнопки (default: undefined)
              text: "Действие", // Значение свойства (default: undefined)
              click: (property, values, elem, id, e) => {
                console.log(property, values, elem, id, e);
              }, // Функция callback при изменении значения (default: undefined)
            },
            {
              id: "rndString9", // ID свойства (default: randomString(32))
              name: "Множественные значения", // Название свойства (default: "Без названия")
              property: "param9", // Произвольное значение (default: undefined)
              type: "values", // alignX | alignY | multiString | values | button | string | integer | float | boolean | color | file | select | slider (default: "string")
              group: "2", // 1 | 2 | 3 | 4 | auto (default: "auto")
              value: [
                {
                  name: "X", // Название свойства (default: "Без названия")
                  type: "float", // string | integer | float | values | button | color | select (default: "string")
                  id: "rndString9111", // ID свойства (default: randomString(32))
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
                  name: "X", // Название свойства (default: "Без названия")
                  type: "float", // string | integer | float | values | button | color | select (default: "string")
                  id: "rndString9112", // ID свойства (default: randomString(32))
                  value: 20, // Значение свойства (default: 0)
                  min: 0, // Минимальное значение (default: 0)
                  max: 100, // Максимальное значение (default: 100)
                  step: 10, // Шаг изменения (default: 1)
                  readonly: false, // Флаг только для чтения (default: false)
                  change: (value, values, property, elem, id, e) => {
                    console.log(value, values, property, elem, id, e);
                  }, // Функция callback при изменении значения (default: undefined)
                },
              ], // Значение множественного свойства
            },
            {
              name: "Unit", // Название свойства (default: "Без названия")
              type: "select", // string | integer | float | values | button | color | select (default: "string")
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

  inspector.getValue()

  // document.getElementById("new").addEventListener("click", function () {});

  // document.getElementById('new2').addEventListener('click', function () {});

})