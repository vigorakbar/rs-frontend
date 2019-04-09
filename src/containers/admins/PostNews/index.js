import React from 'react';
import styled from 'styled-components';
import { EditorState } from 'draft-js';

import WYSIWYG from 'components/WYSIWYG';

const ContainerWYSIWYG = styled.div`
  border: 1px solid grey;
  padding: 6px;
  height: 400px !important;
  overflow: auto;
  width: 1000px;
`;

class PostNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
  }

  render() {
    const { editorState } = this.state;
    return (
      <ContainerWYSIWYG>
        <WYSIWYG editorState={editorState} onEditorStateChange={this.onChange} />
      </ContainerWYSIWYG>
    );
  }
}

export default PostNews;
