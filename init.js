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
  

  /**
   * Инициализация навигатора по переданному селектору или элементу
   * @param {string|HTMLElement} selector Селектор или элемент где будет инициализирован навигатор
   * @returns {void}
   */
  constructor(selector) {
    this.templates = new templates();
    this.#createInspector(selector);
  }

  setValue(value){
    this.#value = value;
  }

  getValue(){
    
    let container = document.getElementById(this.templates.container.getAttribute('id'));

    for (const key in this.#value) {
      const prop = this.#value[key];
      console.group(key)
      console.log("Main property (" + key + "): ", prop)

      let group = this.templates.create.group(prop.id, prop.open);
      let title = this.templates.create.title(prop.name, prop.icon, prop.buttons);

      group.appendChild(title);

      for (const key2 in prop.properties) {
        const property = prop.properties[key2];

        if (property == 'hr') {
          console.log("---------------------------------------------------")
          let hr = this.templates.create.hr();
          group.appendChild(hr)
        } else {
          console.log("Property (" + key2 + "): ", property)
        }

        
        
      }
      container.appendChild(group);
      console.groupEnd(key)
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