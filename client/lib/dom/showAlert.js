import { removeClass, addClass } from "./css.js"
import { getNode } from "./getNode.js"
import { isString } from '../utils/type.js'

export function showAlert(node, message, timeout = 1000) {
    if(isString(node)) node = getNode(node);

    addClass(node, 'is-active');
    node.textContent = message;

    setTimeout(() => {
        removeClass(node, 'is-active')
    }, timeout);
}