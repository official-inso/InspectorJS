import InspectorJS from './../init.js';

document.addEventListener('DOMContentLoaded', function() {

  const inspector = new InspectorJS(
    document.getElementById("inspectorJS_content")
  );

  inspector.setValue([
    {
      icon: "icons-folder",
      id: "rndString",
      name: "Название группы"
    }
  ]);  

  // document.getElementById("new").addEventListener("click", function () {});

  // document.getElementById('new2').addEventListener('click', function () {});

})