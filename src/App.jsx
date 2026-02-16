import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import MetadataTable from './components/MetadataTable.jsx';
import XMLComparison from './components/XMLComparison.jsx';
import Footer from './components/Footer.jsx';
import { parseXMLToMetadata, generateXML } from './utils/xmlParser.js';


function App() {
  // ✅ Load metadata from localStorage (or fallback to default)
  const [metadata, setMetadata] = useState(() => {
    const saved = localStorage.getItem('metadata');
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, key: 'title', value: 'React Guide', secondValue: '' },
          { id: 2, key: 'author', value: 'John', secondValue: 'John' },
          { id: 3, key: 'author', value: 'John', secondValue: 'Jane' },
          { id: 4, key: 'year', value: '2025', secondValue: '' },
        ];
  });

  const [nextId, setNextId] = useState(() => {
    const saved = localStorage.getItem('nextId');
    return saved ? Number(saved) : 5;
  });

  const [originalXML, setOriginalXML] = useState(
    localStorage.getItem('originalXML') || ''
  );

  const [fileName, setFileName] = useState(
    localStorage.getItem('fileName') || ''
  );

  // ✅ Persist state changes
  useEffect(() => {
    localStorage.setItem('metadata', JSON.stringify(metadata));
    localStorage.setItem('nextId', nextId.toString());
  }, [metadata, nextId]);

  useEffect(() => {
    localStorage.setItem('originalXML', originalXML);
  }, [originalXML]);

  useEffect(() => {
    localStorage.setItem('fileName', fileName);
  }, [fileName]);

  // Handle XML file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();

    reader.onload = (e) => {
      const xmlText = e.target.result;
      setOriginalXML(xmlText);

      const parsedData = parseXMLToMetadata(xmlText);
      if (parsedData.length > 0) {
        setMetadata(parsedData);
        setNextId(parsedData.length + 1);
      }
    };

    reader.readAsText(file);
  };

  // Add new row
  const addRow = () => {
    setMetadata([
      ...metadata,
      { id: nextId, key: '', value: '', secondValue: '' },
    ]);
    setNextId(nextId + 1);
  };

  // Delete row
  const deleteRow = (id) => {
    setMetadata(metadata.filter((item) => item.id !== id));
  };

  // Update field
  const updateField = (id, field, value) => {
    setMetadata(
      metadata.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Download XML file
  const downloadXML = () => {
    const xmlContent = generateXML(metadata);
    const blob = new Blob([xmlContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || 'updated_metadata.xml';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <Header
          fileName={fileName}
          onFileUpload={handleFileUpload}
          onAddRow={addRow}
          onDownloadXML={downloadXML}
        />

        <MetadataTable
          metadata={metadata}
          onUpdateField={updateField}
          onDeleteRow={deleteRow}
          onAddRow={addRow}
        />

        <XMLComparison
          originalXML={originalXML}
          updatedXML={generateXML(metadata)}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
