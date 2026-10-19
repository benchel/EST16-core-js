import { isString } from "../utils/type.js";
import { getNode } from "../dom/getNode.js";

export function endScroll(node){

  if(isString(node)) node = getNode(node);

  node.scrollTop = node.scrollHeight;
}