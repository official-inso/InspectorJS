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
    input.setAttribute("_type", "string");
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

  centerMarker(value = [50, 50], name = "Без определения", property = undefined, readonly = false, id = this.parent.randomString(), change){

    let inspectorjs_value = document.createElement("inspectorjs_value");
    let letinspectorjs_value_property = document.createElement("div");
    let centralMarker = document.createElement("centralMarker");
    let centralMarkerAxis = document.createElement("centralMarkerAxis");
    let centralMarkerAxisOx = document.createElement("centralMarkerAxisOx");
    let centralMarkerAxisOxBg = document.createElement("centralMarkerAxisOxBg");
    let centralMarkerAxisOy = document.createElement("centralMarkerAxisOy");
    let centralMarkerAxisOyBg = document.createElement("centralMarkerAxisOyBg");
    let centralMarkerAxisPoint = document.createElement("centralMarkerAxisPoint");
    let centralMarkerPoint = document.createElement("centralMarkerPoint");
    let centralMarkerPointBg = document.createElement("centralMarkerPointBg");
    let inspectorjs_value_value = document.createElement("div");

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = name;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");

    centralMarker.setAttribute('tabindex', "0")

    centralMarkerAxisOx.appendChild(centralMarkerAxisOxBg);
    centralMarkerAxisOy.appendChild(centralMarkerAxisOyBg);
    centralMarkerAxis.appendChild(centralMarkerAxisOx);
    centralMarkerAxis.appendChild(centralMarkerAxisOy);
    centralMarkerAxis.appendChild(centralMarkerAxisPoint);
    centralMarker.appendChild(centralMarkerAxis);
    centralMarkerPoint.appendChild(centralMarkerPointBg);
    centralMarker.appendChild(centralMarkerPoint);
    inspectorjs_value_value.appendChild(centralMarker);
    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    centralMarkerPoint.style.left = value[0] + '%';
    centralMarkerPoint.style.top = value[1] + '%';

    let statrtMove = false;
    let ev = undefined;

    centralMarkerAxis.addEventListener('mousedown', (e) => {
      const rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      ev = e;

      statrtMove = true;

      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (x > rect.width) x = rect.width;
      if (y > rect.height) y = rect.height;

      centralMarkerPoint.style.left = x + 'px';
      centralMarkerPoint.style.top = y + 'px';

      let _x = x / centralMarkerAxis.offsetWidth * 100;
      let _y = y / centralMarkerAxis.offsetHeight * 100;

      centralMarker.style.cursor = 'none';

      if(change) {
        this.parent.debounce(function () {
          change([_x, _y], property, e.target, id, e);
        }, 500)();
      }
    });

    document.addEventListener('mousemove', (e) => {
      if(statrtMove) {
        const rect = ev.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        if(x < 0) x = 0;
        if(y < 0) y = 0;
        if(x > rect.width) x = rect.width;
        if(y > rect.height) y = rect.height;

        centralMarkerPoint.style.left = x + 'px';
        centralMarkerPoint.style.top = y + 'px';

        let _x = x / centralMarkerAxis.offsetWidth * 100;
        let _y = y / centralMarkerAxis.offsetHeight * 100;

        if (change) {
          this.parent.debounce(function () {
            change([_x, _y], property, e.target, id, e);
          }, 500)();
        }
      }      
    });

    centralMarker.addEventListener('keydown', (e) => {
      if (e.keyCode == 37 || e.which == 37 || e.key == 'ArrowLeft' || e.key == 'a') {
        let x = parseFloat(centralMarkerPoint.style.left);

        if(e.ctrlKey)  {
          x -= 10;
        }
        else if(e.shiftKey)  {
          x -= 0.1;
        }
        else {
          x -= 1;
        }
        if (x < 0) x = 0;
        centralMarkerPoint.style.left = x + 'px';
      }

      if (e.keyCode == 38 || e.which == 38 || e.key == 'ArrowUp' || e.key == 'w') {
        let y = parseFloat(centralMarkerPoint.style.top);
        if(e.ctrlKey)  {
          y -= 10;
        }
        else if(e.shiftKey)  {
          y -= 0.1;
        }
        else {
          y -= 1;
        }
        if (y < 0) y = 0;
        centralMarkerPoint.style.top = y + 'px';
      }

      if (e.keyCode == 39 || e.which == 39 || e.key == 'ArrowRight' || e.key == 'd') {
        let x = parseFloat(centralMarkerPoint.style.left);
        if(e.ctrlKey)  {
          x += 10;
        }
        else if(e.shiftKey)  {
          x += 0.1;
        }
        else {
          x += 1;
        }
        if (x > centralMarkerAxis.offsetWidth) x = centralMarkerAxis.offsetWidth;
        centralMarkerPoint.style.left = x + 'px';
      }

      if (e.keyCode == 40 || e.which == 40 || e.key == 'ArrowDown' || e.key == 's') {
        let y = parseFloat(centralMarkerPoint.style.top);
        if (e.ctrlKey) {
          y += 10;
        }
        else if (e.shiftKey) {
          y += 0.1;
        }
        else {
          y += 1;
        }
        if (y > centralMarkerAxis.offsetHeight) y = centralMarkerAxis.offsetHeight;
        centralMarkerPoint.style.top = y + 'px';
      }

      let _x = parseFloat(centralMarkerPoint.style.left) / centralMarkerAxis.offsetWidth * 100;
      let _y = parseFloat(centralMarkerPoint.style.top) / centralMarkerAxis.offsetHeight * 100;

      if (change) {
        this.parent.debounce(function () {
          change([_x, _y], property, e.target, id, e);
        }, 500)();
      }
    })

    document.addEventListener('mouseup', (e) => {
      if (statrtMove) {
        statrtMove = false;
        centralMarker.style.cursor = 'default';
      }
    });

    centralMarker.addEventListener('dblclick', (e) => {
      const rect = e.target.getBoundingClientRect();

      centralMarkerPoint.style.left = rect.width / 2 + 'px';
      centralMarkerPoint.style.top = rect.height / 2 + 'px';

      if (change) {
        this.parent.debounce(function () {
          change([50, 50], property, e.target, id, e);
        }, 500)();
      }
    })



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
    change,
    groupEvent = false
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
    input.setAttribute("_type", "integer");

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
      this.parent.debounce(() => {
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
            if(groupEvent) {
              const arr = this.returnsGroupValue(
                e.target.parentElement.parentElement.parentElement
              );
              change(parseInt(val), arr, e.target.parentElement.parentElement.parentElement.getAttribute("property"), e.target, id, e);
            } else {
              change(parseInt(val), property, e.target, id, e);
            }
            
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
    change,
    groupEvent = false
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

    input.setAttribute("_type", "float");

    if (step) {
      let _stepLength;
      if (step % 1 != 0){
        _stepLength = step.toString().split(".")[1].length;
      } else {
        _stepLength = 0;
      }
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
      this.parent.debounce(() => {
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

          let stepLength;
          if (step % 1 != 0) {
            stepLength = step.toString().split(".")[1].length;
          } else {
            stepLength = 0;
          }

          const stepValue = parseFloat(val).toFixed(stepLength);

          if (change) {
            if (groupEvent) {
              const arr = this.returnsGroupValue(
                e.target.parentElement.parentElement.parentElement
              );
              change(parseFloat(stepValue), arr, e.target.parentElement.parentElement.parentElement.getAttribute("property"), e.target, id, e);
            } else {
              change(parseFloat(stepValue), property, e.target, id, e);
            }
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
    change,
    groupEvent = false
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

    input.setAttribute("type", "color");
    readonly ? input.setAttribute("readonly", readonly) : null;
    input.setAttribute("value", value);
    label.setAttribute("title", value);
    span.setAttribute("title", value);
    input.setAttribute("initial-value", value);

    input.setAttribute("_type", "string");

    property ? input.setAttribute("property", property) : null;

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

          if (change) {
            if (groupEvent) {
              const arr = this.returnsGroupValue(
                e.target.parentElement.parentElement.parentElement.parentElement
              );
              change(val, arr, e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("property"), e.target, id, e);
            } else {
              change(val, property, e.target, id, e);
            }
          }

          
        }
      }, 250)();
    });

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
    change,
    groupEvent = false
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

    select.setAttribute("_type", "string");

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

    
    select.addEventListener("change", (e) => {
      this.parent.debounce(() => {
        const val = e.target.value;
        const initialValue = e.target.getAttribute("initial-value");

        if (val != initialValue) {
          
          select.setAttribute("initial-value", val);

          if (change) {
            if (groupEvent) {
              const arr = this.returnsGroupValue(
                e.target.parentElement.parentElement.parentElement
                  .parentElement
              );
              change(val, arr, e.target.parentElement.parentElement.parentElement.getAttribute("property"), e.target, id, e);
            } else {
              e.target.setAttribute("initial-value", val);
              change(val, property, e.target, id, e);
            }
          }
        }
      }, 50)();
    });
    

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
      let _stepLength;
      if (step % 1 != 0) {
        _stepLength = step.toString().split(".")[1].length;
      } else {
        _stepLength = 0;
      }
      input_range.setAttribute("value", parseFloat(value).toFixed(_stepLength));
      input_number.setAttribute(
        "value",
        parseFloat(value).toFixed(_stepLength)
      );
    } else {
      input_range.setAttribute("value", step);
      input_number.setAttribute("value", step);
    }

    if(min && max) {
      input_range.addEventListener('dblclick', (e) => {
        let average = (min + max) / 2;

        if (step) {
          let _stepLength;
          if (step % 1 != 0) {
            _stepLength = step.toString().split(".")[1].length;
          } else {
            _stepLength = 0;
          }
          input_range.value = parseFloat(average).toFixed(_stepLength);
          input_number.value = parseFloat(average).toFixed(_stepLength);
        } else {
          input_range.value = average;
          input_number.value = average;
        }

        if (change) {
          this.parent.debounce(function () {
            change(average, property, e.target, id, e);
          }, 500)();
        }
      })
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
        let _stepLength;
        if (step % 1 != 0) {
          _stepLength = step.toString().split(".")[1].length;
        } else {
          _stepLength = 0;
        }
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
        let _stepLength;
        if (step % 1 != 0) {
          _stepLength = step.toString().split(".")[1].length;
        } else {
          _stepLength = 0;
        }
        input_range.value = parseFloat(val).toFixed(_stepLength);
      } else {
        input_range.value = val;
      }

      if (change) {
        this.parent.debounce(function () {
          if (step) {
            let _stepLength;
            if (step % 1 != 0) {
              _stepLength = step.toString().split(".")[1].length;
            } else {
              _stepLength = 0;
            }
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

  valueButton(text = "Выполнить", iconClass = undefined, bg = undefined, name = "Без определения", property = undefined, id = this.parent.randomString(), click, groupEvent = false){
  
    let inspectorjs_value = document.createElement("inspectorjs_value");
    let letinspectorjs_value_property = document.createElement("div");
    let inspectorjs_value_value = document.createElement("div");
    let button = document.createElement("button");
    let icon = document.createElement("div");
    let button_text = document.createElement("div");

    button_text.innerHTML = text;

    if(iconClass) {
      icon.classList.add("icon");
      icon.classList.add(iconClass);
      button.appendChild(icon);
    }
    
    if(bg) {
      button.style.backgroundColor = bg;
      button.setAttribute('default', 'false')
      this.parent.isBrightColor(bg)
        ? (button.style.color = "#000")
        : (button.style.color = "#fff");
    } else {
      button.setAttribute('default', 'true')
    }

    button.classList.add("inspectorjs_property_button");
    button.appendChild(button_text);

    inspectorjs_value.setAttribute("id", id);
    letinspectorjs_value_property.classList.add("inspectorjs_value_property");
    letinspectorjs_value_property.innerHTML = name;

    inspectorjs_value_value.classList.add("inspectorjs_value_value");

    inspectorjs_value_value.appendChild(button)
    
    inspectorjs_value.appendChild(letinspectorjs_value_property);
    inspectorjs_value.appendChild(inspectorjs_value_value);

    if(click) {
      button.addEventListener('click', (e) => {
        if (groupEvent){
          const arr = this.returnsGroupValue(
            e.target.parentElement.parentElement.parentElement
              .parentElement
          );
          click(e.target.parentElement.parentElement.parentElement.getAttribute("property"), arr, e.target, id, e)
        } else {
          click(property, e.target, id, e)
        }
      })
    }    

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

    inspectorjs_value_value.setAttribute("property", property);
    inspectorjs_value_value.classList.add("inspectorjs_value_value");
    inspectorjs_value_value.setAttribute("group", group);

    if (value.length > 0) {
      for (const key in value) {
        const element = value[key];
        const group = this.valueValuesGroup(element, property);
        inspectorjs_value_value.appendChild(group);
      }
    }

    if (name != ""){
      inspectorjs_value.appendChild(inspectorjs_value_property);
    }
    
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
        data.change,
        true,
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
        data.change,
        true
      );
    } else if (data.type == "color") {
      out = this.valueColor(
        data.value,
        data.name,
        data.id,
        data.readonly,
        data.id,
        data.change,
        true,
      );
    } else if (data.type == "select") {
      out = this.valueSelect(
        data.value,
        data.name,
        data.id,
        data.readonly,
        data.options,
        data.id,
        data.change,
        true,
      );
    } else if (data.type == "button") {
      out = this.valueButton(
        data.text,
        data.icon,
        data.bg,
        data.name,
        data.id,
        data.id,
        data.click,
        true,
      );
    } else if (data.type == "values") {
      out = this.valueValues(
        data.value,
        "",
        data.property,
        data.group,
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
        data.change,
        true
      );
    }

    return out;
  }

  returnsGroupValue(gr){
    let arr = [];
    let valuesInputs = gr.querySelectorAll("input");
    let valuesSelected = gr.querySelectorAll("select");

    for (const key4 in valuesInputs) {
      const valu = valuesInputs[key4];
      if (valu.getAttribute) {
        if (valu.getAttribute("property")) {
          arr.push({
            id: valu.getAttribute("property"),
            value: this.formatToType(valu.value, valu.getAttribute("_type")),
          });
        }
      }
    }

    for (const key4 in valuesSelected) {
      const valu = valuesSelected[key4];
      if (valu.getAttribute) {
        if (valu.getAttribute("property")) {
          arr.push({
            id: valu.getAttribute("property"),
            value: this.formatToType(valu.value, valu.getAttribute("_type")),
          });
        }
      }
    }

    return arr;
  }

  formatToType(value, type) {
    if (type == "integer") {
      return parseInt(value);
    } else if (type == "float") {
      return parseFloat(value);
    } else {
      return value;
    }
  }
};