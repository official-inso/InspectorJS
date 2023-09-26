import InspectorJS from './../init.js';

document.addEventListener('DOMContentLoaded', function() {

  const inspector = new InspectorJS(
    document.getElementById("inspectorJS_content")
  );

  inspector.setValue([
    {
      icon: "icons-folder",
      id: "rndString",
      name: "Название группы",
      show: true,
      buttons: [
        {
          icon: "icons-del",
          click: (idGroup, elem) => {
            console.log(idGroup, elem);
          },
        },
      ],
      properties: [
        {
          id: "rndString1",
          name: "Строковое значение",
          property: "param1",
          type: "string",
          value: "Hello world!",
          readonly: false,
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          },
        },
        {
          id: "rndString2",
          name: "Целочисленное значение",
          property: "param2",
          type: "integer",
          value: 50,
          readonly: false,
          min: 0,
          max: 100,
          step: 1,
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          },
        },
        {
          id: "rndString3",
          name: "Дробное значение",
          property: "param3",
          type: "float",
          value: 1.5,
          readonly: false,
          min: 0,
          max: 100,
          step: 0.01,
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          },
        },
        {
          id: "rndString4",
          name: "Выпадающий список",
          property: "param4",
          type: "select",
          value: "key2",
          readonly: false,
          options: {
            key1: "value1",
            key2: "value2",
            key3: "value3",
            key4: "value4",
          },
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          },
        },
        {
          id: "rndString5",
          name: "Выбор файла",
          property: "param5",
          type: "file",
          // value: "image.png",
          readonly: false,
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          },
        },
        {
          id: "rndString6",
          name: "Логическое значение",
          property: "param6",
          type: "boolean",
          value: true,
          readonly: false,
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          },
        },
        {
          id: "rndString7",
          name: "Выбор цвета",
          property: "param7",
          type: "color",
          value: "#F0966a",
          readonly: false,
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          },
        },
        "hr",
        {
          id: "rndString8",
          name: "Ползунок",
          property: "param8",
          type: "slider",
          value: 50,
          step: 0.01,
          min: 0,
          max: 100,
          readonly: false,
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          },
        },
        {
          id: "rndString9",
          name: "Множественные значения",
          property: "param9",
          type: "values",
          group: "auto",
          value: [
            {
              name: "L",
              type: "integer",
              id: "param10",
              value: 1,
              min: 0,
              max: 100,
              step: 10,
              readonly: false,
              change: (value, values, property, elem, id, e) => {
                console.log(value, values, property, elem, id, e);
              },
            },
            {
              name: "R",
              type: "float",
              id: "param10",
              value: 1,
              min: 0,
              max: 100,
              step: 0.01,
              readonly: false,
              change: (value, values, property, elem, id, e) => {
                console.log(value, values, property, elem, id, e);
              },
            },
          ],
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