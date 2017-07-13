'use strict';

import template from './template.html';

class CBGlItem extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;
    }

    connectedCallback() {

    }
}

window.customElements.define('cb-gl-item', CBGlItem);
window.CBGlItem = CBGlItem;