import React from 'react';
import Button from './ui/Button';
import { UploadIcon, PlusIcon, DownloadIcon } from './ui/Icons';

const Header = ({ fileName, onFileUpload, onAddRow, onDownloadXML }) => {
  const triggerFileInput = () => {
    document.getElementById('xmlFileInput').click();
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-cyan-400">XML Metadata Editor</h1>
          <p className="text-gray-400 mt-1">Premium Data Management</p>
          {fileName && (
            <p className="text-sm text-cyan-300 mt-2">📄 {fileName}</p>
          )}
        </div>
        <div className="flex gap-3">
          <input
            type="file"
            id="xmlFileInput"
            accept=".xml"
            onChange={onFileUpload}
            className="hidden"
          />
          <Button
            onClick={triggerFileInput}
            variant="secondary"
            icon={<UploadIcon />}
          >
            Upload XML
          </Button>
          <Button
            onClick={onAddRow}
            variant="primary"
            icon={<PlusIcon />}
          >
            Add Node
          </Button>
          <Button
            onClick={onDownloadXML}
            variant="success"
            icon={<DownloadIcon />}
          >
            Download XML
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
