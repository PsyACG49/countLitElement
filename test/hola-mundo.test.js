import { fixture, html, expect } from '@open-wc/testing';
import "../src/hola-mundo"

describe('Primer test', () => {
    it('Funciona', async () => {
      const el = await fixture(html` <hola-mundo></hola-mundo> `);
    });

    it('Se puede manda info por el atributo', async () => {
        const el = await fixture(html`
          <hola-mundo quien='Andres'></hola-mundo>
        `);
        expect(el.quien).to.equal('Andres');
  });
});
