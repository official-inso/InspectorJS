import Text from "../methods/Tetx.js";

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

  valueMultiString(
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
    let input = document.createElement("textarea");

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

    input.style.maxWidth = "calc(100% - 10px)";
    input.style.width = "100%";
    input.style.minWidth = "calc(100% - 10px)";
    input.style.maxHeight = "200px";
    input.style.minHeight = "25px";
    input.style.height = 'auto';
    input.style.resize = "vertical";
    input.style.lineHeight = "14px"; 

    input.value = value;

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

    readonly ? input.setAttribute("readonly", readonly) : null;

    property ? input.setAttribute("property", property) : null;

    if (min) {
      if (parseInt(value) < min) {
        value = min;
      }
    }

    if (max) {
      if (parseInt(value) > max) {
        value = max;
      }
    }

    if (step) {
      step = parseInt(step);
    }

    if (typeof parseInt(value) != "number") value = 0;

    input.setAttribute("value", parseInt(value));
    input.setAttribute("title", parseInt(value));
    input.setAttribute("initial-value", parseInt(value));
    input.value = parseInt(value);

    input.setAttribute("min", min);
    input.setAttribute("max", max);
    input.setAttribute("step", step);

    input.addEventListener("input", (e) => {
      this.parent.debounce(function () {
        let val = e.target.value;
        const initialValue = e.target.getAttribute("initial-value");

        if (val != initialValue) {
          if (min) {
            if (parseInt(val) < min) {
              val = min;
            }
          }

          if (max) {
            if (parseInt(val) > max) {
              val = max;
            }
          }

          if (val == "") val = 0;
          if (typeof parseInt(val) != "number") val = 0;

          e.target.setAttribute("value", val);
          e.target.setAttribute("initial-value", val);
          e.target.setAttribute("title", val);

          e.target.value = val;

          if (change) {
            change(parseInt(val), property, e.target, id, e);
          }
        }
      }, 500)();
    });

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

    if (step) {
      const _stepLength = step.toString().split(".")[1].length;
      input.setAttribute("value", parseFloat(value).toFixed(_stepLength));
    } else {
      input.setAttribute("value", step);
    }

    readonly ? input.setAttribute("readonly", readonly) : null;

    input.setAttribute("title", value);
    input.setAttribute("initial-value", value);
    property ? input.setAttribute("property", property) : null;

    input.setAttribute("min", min);
    input.setAttribute("max", max);
    input.setAttribute("step", step);

    input.addEventListener("input", (e) => {
      this.parent.debounce(function () {
        let val = e.target.value;
        const initialValue = e.target.getAttribute("initial-value");

        if (val != initialValue) {
          if (min) {
            if (parseFloat(val) < min) {
              val = min;
            }
          }

          if (max) {
            if (parseFloat(val) > max) {
              val = max;
            }
          }

          if (val == "") val = 0;
          if (typeof parseFloat(val) != "number") val = 0;

          const step = e.target.getAttribute("step");
          const stepLength = step.toString().split(".")[1].length;
          const stepValue = parseFloat(val).toFixed(stepLength);

          if (change) {
            change(parseFloat(stepValue), property, e.target, id, e);
          }

          e.target.setAttribute("value", stepValue);
          e.target.value = stepValue;
          e.target.setAttribute("initial-value", stepValue);
          e.target.setAttribute("title", stepValue);
        }
      }, 500)();
    });

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

    const id2 = this.parent.randomString();

    label.classList.add("checkbox");
    label1.setAttribute("for", id2);
    label.setAttribute("for", id2);
    input.setAttribute("id", id2);

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = text;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");

    input.setAttribute("type", "checkbox");
    readonly ? input.setAttribute("readonly", readonly) : null;
    value ? input.setAttribute("checked", "checked") : null;

    input.setAttribute("initial-checked", value);
    property ? input.setAttribute("property", property) : null;

    if (change) {
      input.addEventListener("change", (e) => {
        this.parent.debounce(function () {
          e.target.setAttribute(
            "initial-checked",
            e.target.checked == "checked"
          );

          if (e.target.checked) {
            e.target.setAttribute("checked", "checked");
            change(true, property, e.target, id, e);
          } else {
            e.target.removeAttribute("checked");
            change(false, property, e.target, id, e);
          }
        }, 100)();
      });
    }

    label.appendChild(input);
    label.appendChild(label1);

    inspectorjs_value_value.appendChild(label);
    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    return inspectorjs_value;
  }

  valueColor(
    value = "#000000",
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
    let label = document.createElement("label");
    let span = document.createElement("span");

    span.innerHTML = value;

    label.classList.add("colorChanger");
    label.style.backgroundColor = value;

    this.parent.isBrightColor(value)
      ? (span.style.color = "#000")
      : (span.style.color = "#fff");

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = text;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");
    inspectorjs_value_value.setAttribute("full", "true");

    input.setAttribute("type", "color");
    readonly ? input.setAttribute("readonly", readonly) : null;
    input.setAttribute("value", value);
    label.setAttribute("title", value);
    span.setAttribute("title", value);
    input.setAttribute("initial-value", value);
    property ? input.setAttribute("property", property) : null;

    if (change) {
      input.addEventListener("input", (e) => {
        this.parent.debounce(() => {
          const val = e.target.value;
          const initialValue = e.target.getAttribute("initial-value");

          if (val != initialValue) {
            e.target.setAttribute("value", val);
            e.target.setAttribute("initial-value", val);
            label.setAttribute("title", val);
            span.setAttribute("title", val);
            span.innerHTML = val;
            label.style.backgroundColor = val;

            this.parent.isBrightColor(val)
              ? (span.style.color = "#000")
              : (span.style.color = "#fff");

            change(val, property, e.target, id, e);
          }
        }, 250)();
      });
    }

    label.appendChild(span);
    label.appendChild(input);
    inspectorjs_value_value.appendChild(label);
    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    return inspectorjs_value;
  }

  valueSelect(
    value,
    text = "Без определения",
    property = undefined,
    readonly = false,
    options = [],
    id = this.parent.randomString(),
    change
  ) {
    let inspectorjs_value = document.createElement("inspectorjs_value");
    let letinspectorjs_value_property = document.createElement("div");
    let inspectorjs_value_value = document.createElement("div");
    let select = document.createElement("select");

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = text;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");
    inspectorjs_value_value.setAttribute("full", "true");

    select.setAttribute("type", "select");
    readonly ? select.setAttribute("readonly", readonly) : null;
    select.setAttribute("initial-value", value);
    property ? select.setAttribute("property", property) : null;

    for (const key in options) {
      const option = options[key];
      let optionElement = document.createElement("option");
      optionElement.setAttribute("value", key);
      optionElement.innerHTML = option;

      if (key == value) {
        optionElement.setAttribute("selected", "selected");
      }

      select.appendChild(optionElement);
    }

    if (change) {
      select.addEventListener("change", (e) => {
        this.parent.debounce(function () {
          const val = e.target.value;
          const initialValue = e.target.getAttribute("initial-value");

          if (val != initialValue) {
            e.target.setAttribute("initial-value", val);
            change(val, property, e.target, id, e);
          }
        }, 50)();
      });
    }

    inspectorjs_value_value.appendChild(select);
    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    return inspectorjs_value;
  }

  valueFile(
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
    let label = document.createElement("label");
    let span = document.createElement("span");

    span.innerHTML = value ? value : "Файл не выбран";

    label.classList.add("fileChanger");
    label.style.backgroundColor = value;

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = text;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");
    inspectorjs_value_value.setAttribute("full", "true");

    input.setAttribute("type", "file");
    readonly ? input.setAttribute("readonly", readonly) : null;
    span.setAttribute("title", value ? value : "Файл не выбран");
    input.setAttribute("initial-value", value);
    property ? input.setAttribute("property", property) : null;

    if (change) {
      input.addEventListener("input", (e) => {
        this.parent.debounce(() => {
          const val = e.target.value;
          const initialValue = e.target.getAttribute("initial-value");

          if (e.target.files.length > 0) {
            if (val != initialValue) {
              e.target.setAttribute("value", val);
              e.target.setAttribute("initial-value", val);

              span.setAttribute("title", value ? value : "Файл не выбран");

              // Получаем размер файла
              const fileSize = this.parent.formatBytes(e.target.files[0].size);
              span.innerHTML =
                val.split("\\").pop() +
                " <span style='font-size: 12px; opacity: 0.5;'>(" +
                fileSize +
                ")</span>";

              change(e.target.files[0], property, e.target, id, e);
            }
          } else {
            e.target.setAttribute("value", val);
            e.target.setAttribute("initial-value", val);

            span.innerHTML = "Файл не выбран";

            span.setAttribute("title", "Файл не выбран");
          }
        }, 250)();
      });
    }

    label.appendChild(span);
    label.appendChild(input);
    inspectorjs_value_value.appendChild(label);
    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    return inspectorjs_value;
  }

  valueSlider(
    value,
    name = "Без имени",
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

    let input_range = document.createElement("input");
    let input_number = document.createElement("input");

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = name;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");
    inspectorjs_value_value.setAttribute("full", "true");

    input_range.setAttribute("type", "range");
    input_range.setAttribute("min", min);
    input_range.setAttribute("max", max);
    input_range.setAttribute("step", step);

    if (step) {
      const _stepLength = step.toString().split(".")[1].length;
      input_range.setAttribute("value", parseFloat(value).toFixed(_stepLength));
      input_number.setAttribute(
        "value",
        parseFloat(value).toFixed(_stepLength)
      );
    } else {
      input_range.setAttribute("value", step);
      input_number.setAttribute("value", step);
    }

    readonly ? input_range.setAttribute("readonly", readonly) : null;
    input_range.setAttribute("initial-value", value);
    property ? input_range.setAttribute("property", property) : null;

    input_number.setAttribute("type", "number");
    input_number.setAttribute("min", min);
    input_number.setAttribute("max", max);
    input_number.setAttribute("step", step);
    readonly ? input_number.setAttribute("readonly", readonly) : null;
    input_number.setAttribute("initial-value", value);
    property ? input_number.setAttribute("property", property) : null;
    input_number.style.maxWidth = "63px";

    input_range.addEventListener("input", (e) => {
      let val = e.target.value;

      if (min) {
        if (parseFloat(val) < min) {
          val = min;
        }
      }

      if (max) {
        if (parseFloat(val) > max) {
          val = max;
        }
      }

      if (step) {
        const _stepLength = step.toString().split(".")[1].length;
        input_number.value = parseFloat(val).toFixed(_stepLength);
      } else {
        input_number.value = val;
      }

      if (change) {
        this.parent.debounce(function () {
          change(parseFloat(val), property, e.target, id, e);
        }, 500)();
      }
    });

    input_number.addEventListener("input", (e) => {
      let val = e.target.value;

      if (min) {
        if (parseFloat(val) < min) {
          val = min;
        }
      }

      if (max) {
        if (parseFloat(val) > max) {
          val = max;
        }
      }

      if (step) {
        const _stepLength = step.toString().split(".")[1].length;
        input_range.value = parseFloat(val).toFixed(_stepLength);
      } else {
        input_range.value = val;
      }

      if (change) {
        this.parent.debounce(function () {
          if (step) {
            const _stepLength = step.toString().split(".")[1].length;
            input_number.value = parseFloat(val).toFixed(_stepLength);
          }

          change(parseFloat(val), property, e.target, id, e);
        }, 500)();
      }
    });

    inspectorjs_value_value.appendChild(input_range);
    inspectorjs_value_value.appendChild(input_number);

    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    return inspectorjs_value;
  }

  valueValues(
    value,
    name = "Без имени",
    property = undefined,
    group = "auto",
    id = this.parent.randomString(),
    change
  ) {
    let inspectorjs_value = document.createElement("inspectorjs_value");
    let inspectorjs_value_property = document.createElement("div");
    let inspectorjs_value_value = document.createElement("div");

    inspectorjs_value.setAttribute("id", id);
    inspectorjs_value_property.classList.add("inspectorjs_value_property");
    inspectorjs_value_property.innerHTML = name;

    if (group == "auto") {
      if (value.length == 2) group = "2";
      else if (value.length == 3) group = "3";
      else if (value.length == 4) group = "4";
      else group = "auto";
    }

    inspectorjs_value_value.classList.add("inspectorjs_value_value");
    inspectorjs_value_value.setAttribute("group", group);

    if (value.length > 0) {
      for (const key in value) {
        const element = value[key];
        const group = this.valueValuesGroup(element, property);
        inspectorjs_value_value.appendChild(group);
      }
    }

    inspectorjs_value.appendChild(inspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    return inspectorjs_value;
  }

  valueValuesGroup(data, prop) {
    let out;

    if (data.type == "integer") {
      out = this.valueInteger(
        data.value,
        data.name,
        data.id,
        data.readonly,
        data.min,
        data.max,
        data.step,
        data.id,
        data.change
      );
    } else if (data.type == "float") {
      out = this.valueFloat(
        data.value,
        data.name,
        data.id,
        data.readonly,
        data.min,
        data.max,
        data.step,
        data.id,
        data.change
      );
    } else if (data.type == "color") {
      out = this.valueColor(
        data.value,
        data.name,
        data.id,
        data.readonly,
        data.id,
        data.change
      );
    } else if (data.type == "select") {
      out = this.valueSelect(
        data.value,
        data.name,
        data.id,
        data.readonly,
        data.options,
        data.id,
        data.change
      );
    } else {
      out = this.valueString(
        data.value,
        data.name,
        data.id,
        data.readonly,
        data.id,
        data.change
      );
    }

    return out;
  }
};