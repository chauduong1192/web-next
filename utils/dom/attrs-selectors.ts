const isAttrMatch = (value, expectedValue) => {
  if (expectedValue === undefined) {
    return value !== null;
  }
  return value === expectedValue;
};

const getAncestorByDataAttr = (node: HTMLElement, attrName: string, attrValue?: string) => {
  // parentNode
  // dataset
  const fullAttributeName = `data-${attrName}`;

  let currentNode = node;
  let found = null;
  let value = currentNode.getAttribute(fullAttributeName);
  found = isAttrMatch(value, attrValue);

  while (!found && currentNode.parentElement) {
    currentNode = currentNode.parentElement;
    value = currentNode.getAttribute(fullAttributeName);
    found = isAttrMatch(value, attrValue);
  }

  if (found) {
    return currentNode;
  }

  return found;
};

const getDataAttrValue = (node: HTMLElement, attrName: string) => {
  const target = getAncestorByDataAttr(node, attrName);
  if (!target) {
    return target;
  }

  return target.getAttribute(`data-${attrName}`);
};

export { getAncestorByDataAttr, getDataAttrValue };
