export default class Create {
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

    button_more.addEventListener('click', (e) => {
      let group = e.target.parentElement.parentElement.parentElement;

      if (group.getAttribute('open') == 'true'){
        group.setAttribute('open', 'false')
      } else {
        group.setAttribute('open', 'true')
      }
    });

    inspectorjs_left_name.classList.add("inspectorjs_left_name");
    inspectorjs_left_name.innerHTML = name;

    inspectorjs_left.appendChild(button_more);
    inspectorjs_left.appendChild(inspectorjs_left_icon);
    inspectorjs_left.appendChild(inspectorjs_left_name);

    for (const key in buttons) {
      const button_prop = buttons[key];
      const button = this.button(button_prop.icon, button_prop.click)
      inspectorjs_right.appendChild(button);
    }

    title.appendChild(inspectorjs_left);
    title.appendChild(inspectorjs_right);

    return title;
  }

  button(icon, click){
    let button = document.createElement('button');
    button.classList.add(icon)

    if (click){
      button.addEventListener('click', function(){
        click(this.parentElement.parentElement.parentElement.getAttribute('id'), this);
      })
    }

    return button;
  }
};