import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const WYSIWYG = (props) => {
  const { editorState, onEditorStateChange } = props;
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
    />
  );
};

WYSIWYG.propTypes = {
  editorState: PropTypes.any,
  onEditorStateChange: PropTypes.func,
};

export default WYSIWYG;
