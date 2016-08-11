let textArea = (
  <div>
    <textarea id="ss">
      
    </textarea>
  </div>
);

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});
//render
ReactDOM.render(textArea, document.getElementById('text'));
document.getElementById('ss').addEventListener('keyup', () => {
  document.getElementById('app').innerHTML = marked(document.getElementById('ss').value);

});