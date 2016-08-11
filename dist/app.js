'use strict';

var textArea = React.createElement(
  'div',
  null,
  React.createElement(
    'textarea',
    { id: 'ss' },
    '# Marked in browser\\n\\nRendered by **marked**.'
  )
);

var renderer = marked.Renderer();
var text = '# Marked in browser\n\nRendered by **marked**.';

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

// ReactDOM.render(myDiv, document.getElementById('app'));

//render
ReactDOM.render(textArea, document.getElementById('text'));

// setTimeout(() => {
//   console.log(document.getElementById('text').value.toString());
// }, 1);
document.getElementById('ss').addEventListener('keyup', function () {
  document.getElementById('app').innerHTML = marked(document.getElementById('ss').value);
});