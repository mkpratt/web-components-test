'use strict';

import template from './template.html';

const ATTR_MENU_OPEN = 'menu-open';

class CBMenu extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;
    }

    connectedCallback() {
        this._addButtonListeners();
    }

    static get observedAttributes() {
        return [ATTR_MENU_OPEN];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case ATTR_MENU_OPEN:
                this._applyMenuOpen();
                return;
        }
    }

    get menuOpen() {
        return this.hasAttribute(ATTR_MENU_OPEN);
    }

    set menuOpen(val) {
        if (val) {
            this.setAttribute(ATTR_MENU_OPEN, '');
        } else {
            this.removeAttribute(ATTR_MENU_OPEN);
        }
    }

    _addButtonListeners() {
        let menuBtn = this.shadowRoot.querySelector('#cb-sandwich');
        menuBtn.addEventListener('click', () => this._toggleMenu());
    }

    _applyMenuOpen() {
        let menu = this.shadowRoot.querySelector("#cb-menu");

        if (this.menuOpen) {
            // Get # of children, set height to menu item pixel height * # of children
            // if # of children > 4, apply more menu item
            let nodes = menu.querySelectorAll('slot')[0].assignedNodes();
            // filter out non-htmlelement nodes
            let filteredNodes = nodes.filter(function (node) { return node instanceof HTMLElement });

            const length = filteredNodes.length;
            //menu.style.maxHeight = length * 24 + 'px';
            //menu.style.maxHeight = menu.scrollHeight + 'px';
            //transformIcon(this.shadowRoot.querySelector('.mobile-menu-button'));
            this.shadowRoot.querySelector("#cb-sandwich").classList.add("open");
        } else {
            menu.style.maxHeight = null;
            //revertIcon(this.shadowRoot.querySelector('.mobile-menu-button'));
            this.shadowRoot.querySelector("#cb-sandwich").classList.remove("open");
        }
    }


    _toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}

window.customElements.define('cb-menu', CBMenu);
window.CBMenu = CBMenu;