import React from 'react';
import MetadataRow from './MetadataRow.jsx';

const MetadataTable = ({ metadata, onUpdateField, onDeleteRow, onAddRow }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Key</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Value</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Nested Value</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {metadata.map((item) => (
              <MetadataRow
                key={item.id}
                item={item}
                onUpdateField={onUpdateField}
                onDeleteRow={onDeleteRow}
              />
            ))}
          </tbody>
        </table>
      </div>
      
      <button
        onClick={onAddRow}
        className="mt-4 flex items-center gap-2 text-gray-400 hover:text-gray-300"
      >
        <span className="text-xl">+</span>
        Click to add new row
      </button>
    </div>
  );
};

export default MetadataTable;
