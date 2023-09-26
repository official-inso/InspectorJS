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
          name: "Человеческое название",
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
          name: "Человеческое название",
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
          name: "Человеческое название",
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
          name: "Человеческое название",
          property: "param4",
          type: "select",
          value: "key1",
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
          name: "Человеческое название",
          property: "param5",
          type: "file",
          value: "Название файла",
          readonly: false,
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          },
        },
        {
          id: "rndString6",
          name: "Человеческое название",
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
          name: "Человеческое название",
          property: "param7",
          type: "color",
          value: "#4f966a",
          readonly: false,
          change: (value, property, elem, id, e) => {
            console.log(value, property, elem, id, e);
          },
        },
        "hr",
        {
          id: "rndString8",
          name: "Человеческое название",
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
          name: "Человеческое название",
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
      show: true,
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