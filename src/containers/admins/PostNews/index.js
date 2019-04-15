import React from 'react';
import styled from 'styled-components';
import { EditorState, convertToRaw } from 'draft-js';

import WYSIWYG from 'components/WYSIWYG';
import BaseButton from 'components/Button';

const ContainerWYSIWYG = styled.div`
  border: 1px solid grey;
  padding: 6px;
  height: 400px !important;
  overflow: auto;
  width: 1000px;
  margin: auto;
`;

const Button = styled(BaseButton)`
  margin: 1em auto;
  display: block;
`;

class PostNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    console.log('content state', convertToRaw(contentState));
    this.setState({ editorState });
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <ContainerWYSIWYG>
          <WYSIWYG editorState={editorState} onEditorStateChange={this.onChange} />
        </ContainerWYSIWYG>
        <Button buttonStyle="success" buttonSize="lg">
          POST !
        </Button>
      </div>
    );
  }
}

export default PostNews;
