import React from 'react';
import styled from 'styled-components';
import { EditorState, convertToRaw } from 'draft-js';

import WYSIWYG from 'components/WYSIWYG';
import BaseButton from 'components/Button';

import { postNews } from 'models/PostNews';


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

  handleChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    console.log('content state', convertToRaw(contentState));
    this.setState({ editorState });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { editorState } = this.state;
    postNews(editorState).then(res => console.log('SUCCESS', res));
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ContainerWYSIWYG>
            <WYSIWYG editorState={editorState} onEditorStateChange={this.handleChange} />
          </ContainerWYSIWYG>
          <Button buttonStyle="success" buttonSize="lg">
            POST !
          </Button>
        </form>
      </div>
    );
  }
}

export default PostNews;
