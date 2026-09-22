const page = document.querySelector('#app');

let html = await fetch('./pages/home.html').then((response) => response.text());

const tags = [
  'ряд',
  'ряд-ш',
  'ряд-в',
  'ряд-м',
  'кол',
  'кол-ш',
  'кол-в',
  'кол-м',
  'т',
];

for (const tag of tags) {
  html = html.replace(
    new RegExp(`<${tag}(?=\\s|>)([^>]*)>`, 'g'),
    (_, attrs) => {
      const classes = attrs.trim().split(/\s+/).filter(Boolean).join(' ');

      return `<div class="${tag}${classes ? ' ' + classes : ''}">`;
    }
  );

  html = html.replaceAll(`</${tag}>`, `</div>`);
}

page.innerHTML = html;
