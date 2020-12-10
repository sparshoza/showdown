function run() {
  var text = document.getElementById('sourceTextArea').value,
      target = document.getElementById('targetDiv'),
      converter = new showdown.Converter(),
      html = converter.makeHtml(text);
    
    target.innerHTML = html;
}