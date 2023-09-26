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

  isBrightColor(hexColor) {
    // Убираем символ # из HEX и конвертируем строку в число
    const hexNumber = parseInt(hexColor.replace(/^#/, ""), 16);

    // Извлекаем компоненты R, G и B
    const red = (hexNumber >> 16) & 255;
    const green = (hexNumber >> 8) & 255;
    const blue = hexNumber & 255;

    // Считаем сумму компонент и сравниваем с пороговым значением
    const brightness = (red + green + blue) / 3;

    // Если сумма больше или равна 128, цвет считается ярким
    return brightness >= 128;
  }

  formatBytes(bytes) {
    const units = ["байт", "Кб", "Мб", "Гб", "Тб", "Пб", "Эб", "Зб", "Иб"];
    let unitIndex = 0;

    while (bytes >= 1024 && unitIndex < units.length - 1) {
      bytes /= 1024;
      unitIndex++;
    }

    return bytes.toFixed(2) + " " + units[unitIndex];
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

