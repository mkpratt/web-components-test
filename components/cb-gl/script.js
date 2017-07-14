'use strict';

import template from './template.html';

class CBGl extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;
    }

    connectedCallback() {

    }
}

window.customElements.define('cb-gl', CBGl);
window.CBGl = CBGl;