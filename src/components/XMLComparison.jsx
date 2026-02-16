
import XMLViewer from './XMLViewer';

const XMLComparison = ({ originalXML, updatedXML }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <XMLViewer 
        title="Original XML" 
        content={originalXML || 'Upload an XML file to see the original content'}
      />
      <XMLViewer 
        title="Updated XML" 
        content={updatedXML}
      />
    </div>
  );
};

export default XMLComparison;
