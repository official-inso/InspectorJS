/**
 * @module templates/templates
 * @description Модуль для работы с шаблонами
 * @since v.1.0.0
 * @version v.1.0.0
 * @author Roman Zhuzhgov
 * @license MIT
 * @example <caption>Пример использования</caption>
 * import templates from './templates/templates.js';
 */

/**
 * Класс для работы с шаблонами
 * @class
 */
export default class templates {
  #container = undefined;
  create = undefined;

  /**
   * Конструктор класса templates
   * @constructor
   * @returns {void}
   */
  constructor() {
    this.#container = this.randomString();
    this.create = new Create(this);
  }

  randomString(
    n = 30,
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  ) {
    return "id" +
      Array(n)
        .fill(alphabet)
        .map((x) => x[Math.floor(Math.random() * x.length)])
        .join("");
  }

  
  /**
   * Создает контейнер для навигатора и возвращает его в виде строки с замененными полями
   * @returns Возвращает контейнер для навигатора в виде строки с замененными полями
   */
  get container() {
    let f = this.create.container(this.#container);
    return f;
  }
};

class Create {
  parent = undefined;

  /**
   * Конструктор класса templates
   * @constructor
   * @returns {void}
   */
  constructor(parent) {
    this.parent = parent
  }

  /**
   * Создает контейнер для навигатора и возвращает его
   * @returns Возвращает контейнер для навигатора
   */
  container(id) {
    let inspector = document.createElement("InspectorJS");
    inspector.classList.add("InspectorJS_container");
    inspector.setAttribute("id", id);

    return inspector;
  }

  group(id = a.randomString()) {
    let group = document.createElement("inspectorjs_group");
    group.setAttribute("open", "false");

    if (id) {
      group.setAttribute("id", id);
    }

    return group;
  }

  title(name = "Без имени", icon = "icons-favorite") {
    let title = document.createElement("inspectorjs_title");
    let inspectorjs_left = document.createElement("div");
    let inspectorjs_right = document.createElement("div");
    let button_more = document.createElement("button");
    let inspectorjs_left_icon = document.createElement("div");
    let inspectorjs_left_name = document.createElement("div");

    inspectorjs_left.classList.add("inspectorjs_left");
    inspectorjs_right.classList.add("inspectorjs_right");

    button_more.classList.add("icons-right");
    button_more.classList.add("inspectorjs_left_more");

    inspectorjs_left_icon.classList.add("inspectorjs_left_icon");
    inspectorjs_left_icon.classList.add(icon);

    inspectorjs_left_name.classList.add("inspectorjs_left_name");
    inspectorjs_left_name.innerHTML = name;

    inspectorjs_left.appendChild(button_more);
    inspectorjs_left.appendChild(inspectorjs_left_icon);
    inspectorjs_left.appendChild(inspectorjs_left_name);

    title.appendChild(inspectorjs_left);
    title.appendChild(inspectorjs_right);

    return title;
  }
};