/**
 * 是否为HTML element
 * @note 必须是 object（不是null） 且拥有 nodeType 和 nodeName 两个属性
 * @param ele
 */
function isHTMLElement(ele: any): ele is HTMLElement {
  return typeof ele === 'object' && ele !== null && ele.nodeType && ele.nodeName;
}

export default isHTMLElement;
