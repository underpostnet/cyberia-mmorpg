import { append, s } from '../core/VanillaJs.js';
import { Translate } from '../core/Translate.js';
import { s4 } from '../core/CommonJs.js';
import { BtnIcon } from '../core/BtnIcon.js';

const TestComponent = {
  Init: async function () {
    append(
      'body',
      html` <br />
        Test TestComponent ${s4()}
        <br />
        ${Translate.Render({ en: 'Hello World', es: 'Hola Mundo' })}
        ${await BtnIcon.Render({ class: 'translate-en', label: 'en' })}
        ${await BtnIcon.Render({ class: 'translate-es', label: 'es' })}
        <br />
        <input
          type="text"
          class="input-test"
          placeholder="${Translate.Render({ en: 'Write', es: 'Escribe', placeholder: '.input-test' })}"
        />`
    );
    s('.translate-en').onclick = () => Translate.Parse('en');
    s('.translate-es').onclick = () => Translate.Parse('es');
  },
};

export { TestComponent };
