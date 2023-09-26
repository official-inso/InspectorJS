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

import Create from "./create.js"

/**
 * Класс для работы с шаблонами
 * @class
 */
export default class templates {
  #container = undefined;
  #create = undefined;

  /**
   * Конструктор класса templates
   * @constructor
   * @returns {void}
   */
  constructor() {
    this.#container = this.randomString();
    this.#create = new Create(this);
  }

  randomString(
    n = 30,
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  ) {
    return (
      "id" +
      Array(n)
        .fill(alphabet)
        .map((x) => x[Math.floor(Math.random() * x.length)])
        .join("")
    );
  }

  debounce(func, wait) {
    let a = this;
    return function (...args) {
      const context = this;

      a.timeout ? clearTimeout(a.timeout) : null;

      a.timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }

  delay(func, wait) {
    let timeout;

    

  }

  throttle(func, delay) {
    let isThrottled = false;
    let lastArgs, lastThis;

    return function (...args) {
      if (isThrottled) {
        // Если уже есть активный таймер, не делаем ничего.
        lastArgs = args;
        lastThis = this;
        return;
      }

      func.apply(this, args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
        if (lastArgs) {
          // Если были отложенные вызовы, выполним последний.
          func.apply(lastThis, lastArgs);
          lastArgs = null;
          lastThis = null;
        }
      }, delay);
    };
  }

  /**
   * Создает контейнер для навигатора и возвращает его в виде строки с замененными полями
   * @returns Возвращает контейнер для навигатора в виде строки с замененными полями
   */
  get container() {
    let f = this.#create.container(this.#container);
    return f;
  }

  get create() {
    return this.#create;
  }
};

