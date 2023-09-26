export default class Create {
  parent = undefined;

  /**
   * Конструктор класса templates
   * @constructor
   * @returns {void}
   */
  constructor(parent) {
    this.parent = parent;
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

  group(id = this.parent.randomString(), show = false) {
    let group = document.createElement("inspectorjs_group");
    group.setAttribute("open", show);

    if (id) {
      group.setAttribute("id", id);
    }

    return group;
  }

  title(name = "Без имени", icon = "icons-favorite", buttons = []) {
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

    button_more.addEventListener("click", (e) => {
      let group = e.target.parentElement.parentElement.parentElement;

      if (group.getAttribute("open") == "true") {
        group.setAttribute("open", "false");
      } else {
        group.setAttribute("open", "true");
      }
    });

    inspectorjs_left_name.classList.add("inspectorjs_left_name");
    inspectorjs_left_name.innerHTML = name;

    inspectorjs_left.appendChild(button_more);
    inspectorjs_left.appendChild(inspectorjs_left_icon);
    inspectorjs_left.appendChild(inspectorjs_left_name);

    for (const key in buttons) {
      const button_prop = buttons[key];
      const button = this.button(button_prop.icon, button_prop.click);
      inspectorjs_right.appendChild(button);
    }

    title.appendChild(inspectorjs_left);
    title.appendChild(inspectorjs_right);

    return title;
  }

  button(icon, click) {
    let button = document.createElement("button");
    button.classList.add(icon);

    if (click) {
      button.addEventListener("click", function () {
        click(
          this.parentElement.parentElement.parentElement.getAttribute("id"),
          this
        );
      });
    }

    return button;
  }

  hr() {
    return document.createElement("inspectorjs_hr");
  }

  valueString(
    value,
    text = "Без определения",
    property = undefined,
    readonly = false,
    id = this.parent.randomString(),
    change
  ) {
    let inspectorjs_value = document.createElement("inspectorjs_value");
    let letinspectorjs_value_property = document.createElement("div");
    let inspectorjs_value_value = document.createElement("div");
    let input = document.createElement("input");

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = text;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");
    inspectorjs_value_value.setAttribute("full", "true");

    input.setAttribute("type", "text");
    readonly ? input.setAttribute("readonly", readonly) : null;
    input.setAttribute("value", value);
    input.setAttribute("title", value);
    input.setAttribute("initial-value", value);
    property ? input.setAttribute("property", property) : null;

    if (change) {
      input.addEventListener("input", (e) => {
        this.parent.debounce(function () {
          const value = e.target.value;
          const initialValue = e.target.getAttribute("initial-value");

          if (value != initialValue) {
            e.target.setAttribute("value", value);
            e.target.setAttribute("initial-value", value);
            e.target.setAttribute("title", value);
            change(value, property, e.target, id, e);
          }
        }, 500)();
      });
    }

    inspectorjs_value_value.appendChild(input);
    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    return inspectorjs_value;
  }

  valueInteger(
    value,
    text = "Без определения",
    property = undefined,
    readonly = false,
    min = 0,
    max = 100,
    step = 1,
    id = this.parent.randomString(),
    change
  ) {
    let inspectorjs_value = document.createElement("inspectorjs_value");
    let letinspectorjs_value_property = document.createElement("div");
    let inspectorjs_value_value = document.createElement("div");
    let input = document.createElement("input");

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = text;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");
    inspectorjs_value_value.setAttribute("full", "true");

    input.setAttribute("type", "number");
    input.setAttribute("min", min);
    input.setAttribute("max", max);
    input.setAttribute("step", step);
    readonly ? input.setAttribute("readonly", readonly) : null;
    input.setAttribute("value", value);
    input.setAttribute("title", value);
    input.setAttribute("initial-value", value);
    property ? input.setAttribute("property", property) : null;

    if (change) {
      input.addEventListener("input", (e) => {
        this.parent.debounce(function () {
          const value = e.target.value;
          const initialValue = e.target.getAttribute("initial-value");

          if (value != initialValue) {
            e.target.setAttribute("value", value);
            e.target.setAttribute("initial-value", value);
            e.target.setAttribute("title", value);
            change(parseInt(value), property, e.target, id, e);
          }
        }, 500)();
      });
    }

    inspectorjs_value_value.appendChild(input);
    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    return inspectorjs_value;
  }

  valueFloat(
    value,
    text = "Без определения",
    property = undefined,
    readonly = false,
    min = 0,
    max = 100,
    step = 1,
    id = this.parent.randomString(),
    change
  ) {
    let inspectorjs_value = document.createElement("inspectorjs_value");
    let letinspectorjs_value_property = document.createElement("div");
    let inspectorjs_value_value = document.createElement("div");
    let input = document.createElement("input");

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = text;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");
    inspectorjs_value_value.setAttribute("full", "true");

    input.setAttribute("type", "number");
    input.setAttribute("min", min);
    input.setAttribute("max", max);
    input.setAttribute("step", step);
    readonly ? input.setAttribute("readonly", readonly) : null;
    input.setAttribute("value", value);
    input.setAttribute("title", value);
    input.setAttribute("initial-value", value);
    property ? input.setAttribute("property", property) : null;

    if (change) {
      input.addEventListener("input", (e) => {
        this.parent.debounce(function () {
          const value = e.target.value;
          const initialValue = e.target.getAttribute("initial-value");

          if (value != initialValue) {
            const step = e.target.getAttribute("step");
            const stepLength = step.toString().split(".")[1].length;
            const stepValue = parseFloat(value).toFixed(stepLength);

            change(parseFloat(stepValue), property, e.target, id, e);

            e.target.setAttribute("value", stepValue);
            e.target.value = stepValue;
            e.target.setAttribute("initial-value", stepValue);
            e.target.setAttribute("title", stepValue);
          }
        }, 500)();
      });
    }

    inspectorjs_value_value.appendChild(input);
    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    return inspectorjs_value;
  }

  valueBoolean(
    value,
    text = "Без определения",
    property = undefined,
    readonly = false,
    id = this.parent.randomString(),
    change
  ) {
    let inspectorjs_value = document.createElement("inspectorjs_value");
    let letinspectorjs_value_property = document.createElement("div");
    let inspectorjs_value_value = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let label1 = document.createElement("label");

    

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = text;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");
    inspectorjs_value_value.setAttribute("full", "true");



    input.setAttribute("type", "checkbox");
    readonly ? input.setAttribute("readonly", readonly) : null;
    input.setAttribute("value", value);
    input.setAttribute("title", value);
    input.setAttribute("initial-value", value);
    property ? input.setAttribute("property", property) : null;

    if (change) {
      input.addEventListener("change", (e) => {
        this.parent.debounce(function () {
          const value = e.target.checked;
          const initialValue = e.target.getAttribute("initial-value");

          if (value != initialValue) {
            e.target.setAttribute("value", value);
            e.target.setAttribute("initial-value", value);
            e.target.setAttribute("title", value);
            change(value, property, e.target, id, e);
          }
        }, 100)();
      });
    }

    inspectorjs_value_value.appendChild(input);
    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    return inspectorjs_value;
  }
};