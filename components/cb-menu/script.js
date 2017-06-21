'use strict';

import template from './template.html';

class CBMenu extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;
    }

    connectedCallback() { }
}

window.customElements.define('cb-menu', CBMenu);
window.CBMenu = CBMenu;