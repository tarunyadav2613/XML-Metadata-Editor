import React from 'react';
import { DeleteIcon } from './ui/Icons';

const MetadataRow = ({ item, onUpdateField, onDeleteRow }) => {
  return (
    <tr className="border-b border-gray-700">
      <td className="py-3 px-4">
        <input
          type="text"
          value={item.key}
          onChange={(e) => onUpdateField(item.id, 'key', e.target.value)}
          className="bg-transparent text-white outline-none w-full"
          placeholder="Key"
        />
      </td>
      <td className="py-3 px-4">
        <input
          type="text"
          value={item.value}
          onChange={(e) => onUpdateField(item.id, 'value', e.target.value)}
          className="bg-transparent text-white outline-none w-full"
          placeholder="Value"
        />
      </td>
      <td className="py-3 px-4">
        <input
          type="text"
          value={item.secondValue}
          onChange={(e) => onUpdateField(item.id, 'secondValue', e.target.value)}
          className="bg-gray-700 text-white px-3 py-2 rounded outline-none w-full"
          placeholder="Optional"
        />
      </td>
      <td className="py-3 px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDeleteRow(item.id)}
            className="text-gray-400 hover:text-gray-300"
          >
            <DeleteIcon />
          </button>
          <button
            onClick={() => onDeleteRow(item.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MetadataRow;
