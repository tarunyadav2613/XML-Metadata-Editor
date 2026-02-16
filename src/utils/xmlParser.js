// Parse XML to metadata
export const parseXMLToMetadata = (xmlText) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  
  const newMetadata = [];
  let id = 1;
  
  // Get root element
  const root = xmlDoc.documentElement;
  
  // Recursively parse XML nodes
  const parseNode = (node) => {
    if (node.nodeType === 1) { // Element node
      const tagName = node.tagName;
      
      // Get text content (direct text only, not from children)
      let textContent = '';
      for (let child of node.childNodes) {
        if (child.nodeType === 3) { // Text node
          textContent += child.nodeValue.trim();
        }
      }
      
      // Get first child element value if exists
      let childValue = '';
      const firstChild = Array.from(node.children)[0];
      if (firstChild) {
        childValue = firstChild.tagName;
      }
      
      if (tagName !== 'metadata' && tagName !== 'medadast') {
        newMetadata.push({
          id: id++,
          key: tagName,
          value: textContent || childValue || '',
          secondValue: textContent && childValue ? childValue : ''
        });
      }
      
      // Parse children
      for (let child of node.children) {
        parseNode(child);
      }
    }
  };
  
  parseNode(root);
  return newMetadata.length > 0 ? newMetadata : [];
};

// Generate XML from metadata
export const generateXML = (metadata) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<metadata>\n';
  
  metadata.forEach(item => {
    if (item.key) {
      xml += `  <${item.key}>`;
      
      if (item.secondValue) {
        xml += `\n    <${item.secondValue}>${item.value}</${item.secondValue}>\n  `;
      } else if (item.value) {
        xml += item.value;
      }
      
      xml += `</${item.key}>\n`;
    }
  });
  
  xml += '</metadata>';
  return xml;
};
