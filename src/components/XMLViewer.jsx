import React from 'react';

const XMLViewer = ({ title, content }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h2 className="text-lg font-semibold mb-4 text-gray-300">{title}</h2>
      <div className="bg-gray-900 rounded p-4 h-64 overflow-y-auto">
        <pre className="text-sm text-gray-400 font-mono whitespace-pre-wrap">
          {content}
        </pre>
      </div>
    </div>
  );
};

export default XMLViewer;
