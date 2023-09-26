const Text = {
  pixel: function (block, unit = "all") {
    const element =
      typeof block === "string" ? document.querySelector(block) : block;
    if (!element) {
      console.error("Указанный элемент не существует.");
      return;
    }

    const text = element.textContent;
    let testElement = document.querySelector("test");

    if (!testElement) {
      testElement = document.createElement("test");
      testElement.style.cssText =
        "display: inline-block; position: absolute; opacity: 0; pointer-events: none;";
      document.body.prepend(testElement);
    }

    const blockStyles = window.getComputedStyle(testElement);
    const testStyles = testElement.style;

    console.log(testStyles.fontSize);

    testStyles.fontSize = blockStyles.fontSize || "16px";
    testStyles.fontFamily = blockStyles.fontFamily || "gl";
    testStyles.fontWeight = blockStyles.fontWeight || "normal";
    testStyles.fontStyle = blockStyles.fontStyle || "normal";
    testStyles.fontKerning = blockStyles.fontKerning || "auto";
    testStyles.letterSpacing = blockStyles.letterSpacing || "normal";

    testElement.textContent = text;
    const px = testElement.offsetWidth;
    testElement.textContent = "";

    if (unit.match(/^(px)$/i)) {
      return px;
    } else if (unit.match(/^(cm)$/i)) {
      return px * 38;
    } else if (unit.match(/^(mm)$/i)) {
      return px * 3.8;
    } else if (unit.match(/^(pt)$/i)) {
      return px * (4 / 3);
    } else if (unit.match(/^(pc)$/i)) {
      return px * 16;
    } else if (unit.match(/^(all)$/i)) {
      return {
        px: px,
        cm: px / 38,
        mm: px / 3.8,
        pt: px * (4 / 3),
        pc: px / 16,
      };
    }
  },

  lines: function (block) {
    const element =
      typeof block === "string" ? document.querySelector(block) : block;
    if (!element) {
      console.error("Указанный элемент не существует.");
      return;
    }

    const lineHeight = (() => {
      const lineStyle = window.getComputedStyle(element).lineHeight;
      if (lineStyle.match(/normal/i)) {
        return Math.round(
          parseFloat(window.getComputedStyle(element).fontSize) * 1.227273
        );
      } else if (lineStyle.match(/em/i)) {
        return (
          parseFloat(lineStyle) *
          parseFloat(window.getComputedStyle(element).fontSize)
        );
      } else if (lineStyle.match(/%/i)) {
        return (
          parseFloat(window.getComputedStyle(element).fontSize) *
          (parseFloat(lineStyle) / 100)
        );
      } else if (lineStyle.match(/px/i)) {
        return parseFloat(lineStyle);
      } else {
        return (
          parseFloat(lineStyle) *
          parseFloat(window.getComputedStyle(element).fontSize)
        );
      }
    })();

    return Math.floor(
      parseFloat(window.getComputedStyle(element).height) / lineHeight
    );
  },

  textareaLines: (textareaElement) => {
    // Создаем временный элемент textarea и добавляем его на страницу
    const tempTextarea = document.createElement("textarea");
    document.body.appendChild(tempTextarea);

    // Копируем содержимое из переданного элемента во временный элемент
    tempTextarea.value = textareaElement.value;

    // Выполняем измерение строк во временном элементе
    const computedStyle = window.getComputedStyle(tempTextarea);
    let lineHeight = parseFloat(computedStyle.lineHeight);
    const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
    const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
    const borderTop = parseFloat(computedStyle.borderTopWidth) || 0;
    const borderBottom = parseFloat(computedStyle.borderBottomWidth) || 0;

    if (isNaN(lineHeight)) {
      lineHeight = parseFloat(computedStyle.fontSize);
    }

    const height =
      tempTextarea.clientHeight -
      paddingTop -
      paddingBottom -
      borderTop -
      borderBottom;

    // Удаляем временный элемент
    document.body.removeChild(tempTextarea);

    return Math.floor(height / lineHeight);
  },
};

export default Text;
