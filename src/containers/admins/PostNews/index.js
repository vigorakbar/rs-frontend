import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EditorState, convertToRaw } from 'draft-js';
import { connect } from 'react-redux';

import WYSIWYG from 'components/WYSIWYG';
import BaseButton from 'components/Button';
import BaseTextField from 'components/forms/TextField';

import { postNews } from 'models/PostNews';


const ContainerWYSIWYG = styled.div`
  padding: 6px;
  height: 400px;
  overflow: auto;
  margin: auto;
  border: 1px solid #ced4da;
  border-radius: .25rem;
}
`;

const LabelTextField = styled.div`
`;

const StyledForm = styled.form`
  width: 50em;
  margin: auto;
`;

const TextField = styled(BaseTextField)`  
  margin-bottom: 20px;
`;

const Button = styled(BaseButton)`
  margin: 1em auto;
  display: block;
`;

class PostNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: '',
      thumbnail: '',
    };
  }

  handleChangeWYSIWYG = (editorState) => {
    const contentState = editorState.getCurrentContent();
    console.log('content state', convertToRaw(contentState));
    this.setState({ editorState });
  }

  handleChangeTitle = (title) => {
    this.setState({
      title,
    });
  }

  handleChangeThumbnail = (thumbnail) => {
    this.setState({
      thumbnail,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, thumbnail, editorState } = this.state;
    const { token } = this.props;
    postNews(title, thumbnail, editorState, token).then(res => console.log('SUCCESS', res));
  }

  render() {
    const { editorState, title, thumbnail } = this.state;
    return (
      <div>
        <StyledForm onSubmit={this.handleSubmit}>
          <div className="form-group">
            <LabelTextField>Judul Artikel</LabelTextField>
            <TextField type="text" value={title} placeholder="Judul artikel" onValueChange={this.handleChangeTitle} />
          </div>
          <div className="form-group">
            <LabelTextField>Thumbnail Gambar</LabelTextField>
            <TextField type="text" value={thumbnail} placeholder="Link menuju gambar" onValueChange={this.handleChangeThumbnail} />
          </div>
          <div className="form-group">
            <LabelTextField>Konten Artikel</LabelTextField>
            <ContainerWYSIWYG>
              <WYSIWYG editorState={editorState} onEditorStateChange={this.handleChangeWYSIWYG} />
            </ContainerWYSIWYG>
          </div>
          <Button buttonStyle="success" buttonSize="lg">
            POST !
          </Button>
        </StyledForm>
      </div>
    );
  }
}

PostNews.propTypes = {
  token: PropTypes.any,
};

const mapStateToProps = (state) => {
  const { token, errorMessage } = state.admin;
  return { token, errorMessage };
};

export default connect(
  mapStateToProps,
)(PostNews);
