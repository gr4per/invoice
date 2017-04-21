import './import.less';
import React, { PropTypes, Component } from 'react';
import Dropzone from 'react-dropzone';

const supportedFileExtensions = ['json'];

const InvoiceImportDropzone = ({onImport}, {i18n}) => {

  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      if (supportedFileExtensions.includes(acceptedFiles[0].name.split('.').pop())) {
        let reader = new FileReader();

        reader.onload= (e) => {
          onImport(JSON.parse(e.target.result))
        };

        reader.onerror = (e) => {
          console.err(e);
        };

        reader.readAsBinaryString(acceptedFiles[0]);
      }
    }
  };

  return(
    <Dropzone className="dropzoneContainer" multiple={false} onDrop={onDrop}>
      <div className="dropzoneMessage">
        {i18n.getMessage('InvoiceImport.dropZoneMessage')}
      </div>
    </Dropzone>
  );
};

InvoiceImportDropzone.propTypes = {
  onImport: PropTypes.func.isRequired
};

InvoiceImportDropzone.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default InvoiceImportDropzone;
