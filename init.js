/**
 * @file init.js
 * @description
 * @since v.1.0.0
 * @version v.1.0.0
 * @author Roman Zhuzhgov
 * @license MIT
 */

/**
 * @requires templates/templates
 */
import templates from './templates/templates.js';

/**
 * @class OutlinerJS
 * @description Класс для работы с навигатором
 */
export default class InspectorJS {

  #value = undefined;
  
  #previousWidth = undefined;

  /**
   * Инициализация навигатора по переданному селектору или элементу
   * @param {string|HTMLElement} selector Селектор или элемент где будет инициализирован навигатор
   * @returns {void}
   */
  constructor(selector) {
    this.templates = new templates();
    this.#createInspector(selector);
    this.checkResize(selector);
  }

  checkResize(inspector) {

    // Сохраняем предыдущую ширину элемента
    this.#previousWidth = inspector.offsetWidth;

    // Создаем экземпляр ResizeObserver
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        // Получаем новую ширину элемента
        const newWidth = entry.contentRect.width;

        // Проверяем, изменилась ли ширина элемента
        if (newWidth !== this.#previousWidth) {

          this.templates.updateSize(newWidth);
          // Выполняем необходимые действия при изменении ширины элемента

          // Обновляем предыдущую ширину
          this.#previousWidth = newWidth;
        }
      }
    });

    // Начинаем наблюдение за изменениями размеров элемента
    resizeObserver.observe(inspector);
  }

  setValue(value){
    this.#value = value;
  }

  getValue(){
    
    let container = document.getElementById(this.templates.container.getAttribute('id'));

    for (const key in this.#value) {
      const prop = this.#value[key];
      // console.group(key)
      // console.log("Main property (" + key + "): ", prop)

      let group = this.templates.create.group(prop.id, prop.show);
      let title = this.templates.create.title(prop.name, prop.icon, prop.buttons);

      group.appendChild(title);

      for (const key2 in prop.properties) {
        const property = prop.properties[key2];

        if (property == 'hr') {
          // console.log("---------------------------------------------------")
          let hr = this.templates.create.hr();
          group.appendChild(hr)
        } else {
          // console.log("Property (" + key2 + "): ", property)

          if(property.type == 'integer'){
            let input = this.templates.create.valueInteger(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.min,
              property.max,
              property.step,
              property.id,
              property.change
            );
            group.appendChild(input)
          }

          else if(property.type == 'float'){
            let input = this.templates.create.valueFloat(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.min,
              property.max,
              property.step,
              property.id,
              property.change
            );
            group.appendChild(input)
          }

          else if(property.type == 'boolean'){
            let input = this.templates.create.valueBoolean(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.id,
              property.change
            );
            group.appendChild(input)
          }

          else if(property.type == 'color'){
            let input = this.templates.create.valueColor(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.id,
              property.change
            );
            group.appendChild(input)
          }

          else if(property.type == 'select'){
            let input = this.templates.create.valueSelect(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.options,
              property.id,
              property.change
            );
            group.appendChild(input)
          }

          else if(property.type == 'file'){
            let input = this.templates.create.valueFile(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.id,
              property.change
            );
            group.appendChild(input)
          }

          else if(property.type == 'slider'){
            let input = this.templates.create.valueSlider(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.min,
              property.max,
              property.step,
              property.id,
              property.change
            );
            group.appendChild(input)
          }

          else if (property.type == "values") {
            let input = this.templates.create.valueValues(
              property.value,
              property.name,
              property.property,
              property.group,
              property.id,
              property.change
            );
            group.appendChild(input);
          }

          else if (property.type == "button") {
            let input = this.templates.create.valueButton(
              property.text,
              property.icon,
              property.bg,
              property.name,
              property.property,
              property.id,
              property.click
            );
            group.appendChild(input);
          }

          else if (property.type == "multiString") {
            let input = this.templates.create.valueMultiString(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.id,
              property.change
            );
            group.appendChild(input);
          }

          else if (property.type == "centerMarker") {
            let input = this.templates.create.centerMarker(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.id,
              property.change
            );
            group.appendChild(input);
          }

          else if (property.type == "alignX") {
            let input = this.templates.create.alignX(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.id,
              property.change
            );
            group.appendChild(input);
          }

          else if (property.type == "alignText") {
            let input = this.templates.create.alignText(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.id,
              property.change
            );
            group.appendChild(input);
          }

          else if (property.type == "alignY") {
            let input = this.templates.create.alignY(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.id,
              property.change
            );
            group.appendChild(input);
          }
          
          else {
            let input = this.templates.create.valueString(
              property.value,
              property.name,
              property.property,
              property.readonly,
              property.id,
              property.change
            );
            group.appendChild(input);
          }


        }
        
      }
      container.appendChild(group);
      // console.groupEnd(key)
    }

  }

  #createInspector(selector) {
    if (!(selector instanceof HTMLElement || typeof selector === "string"))
      return console.error(
        "Переданный селектор не является HTMLElement или строкой"
      );

    if (selector instanceof HTMLElement) {
      selector.appendChild(this.templates.container);
    } else if (document.querySelectorAll(selector).length > 0) {
      document.querySelectorAll(selector).forEach((element) => {
        selector.appendChild(this.templates.container);
      });
    }
  }



};