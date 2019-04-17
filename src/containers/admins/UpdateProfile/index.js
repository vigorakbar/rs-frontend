import React from 'react';
import Styled from 'styled-components';

import BaseTextField from 'components/forms/TextField';
import TextArea from 'components/forms/TextArea';
import Button from 'components/Button';

const UpdateProfileCard = Styled.div`
  width: 50em;
  margin: 20px;
  border-radius: 20px;
  border: 2px solid rgba(0,0,0,.125);
  box-shadow: 0 0 25px -4px grey;

  div > .input-wrapper {
    padding: 20px;
  }
`;

const Header = Styled.h3`
  margin-bottom: .5em;
`;

const TextField = Styled(BaseTextField)`
  margin-bottom: 20px;
`;

const UpdateProfileContainer = Styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15em;
`;

class UpdateProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      about: '',
      vision: '',
      mission: '',
      link: {
        facebook: '',
        instagram: '',
        twitter: '',
      },
    };
  }

  handleChangeName = (name) => {
    this.setState({
      name,
    });
  }

  handleChangePhone = (phone) => {
    this.setState({
      phone,
    });
  }

  handleChangeEmail = (email) => {
    this.setState({
      email,
    });
  }

  handleChangeAddress = (address) => {
    this.setState({
      address,
    });
  }

  handleChangeAbout = (about) => {
    this.setState({
      about,
    });
  }

  handleChangeVision = (vision) => {
    this.setState({
      vision,
    });
  }

  handleChangeMission = (mission) => {
    this.setState({
      mission,
    });
  }

  handleChangeFacebook = (facebook) => {
    const { link } = this.state;
    link.facebook = facebook;
    this.setState({
      link,
    });
  }

  handleChangeInstagram = (instagram) => {
    const { link } = this.state;
    link.instagram = instagram;
    this.setState({
      link,
    });
  }

  handleChangeTwitter = (twitter) => {
    const { link } = this.state;
    link.twitter = twitter;
    this.setState({
      link,
    });
  }

  render() {
    const {
      name,
      phone,
      email,
      address,
      about,
      vision,
      mission,
      link,
    } = this.state;
    return (
      <UpdateProfileContainer>
        <UpdateProfileCard className="card text-left">
          <div className="card-body">
            <Header>Update Profile Rumah Sahaja</Header>
            <form>
              <div className="form-group">
                <label>Nama Organisasi</label>
                <TextField type="text" value={name} placeholder="Nama Organisasi" onValueChange={this.handleChangeName} />
              </div>
              <div className="form-group">
                <label>Telepon</label>
                <TextField type="number" value={phone} placeholder="Telepon" onValueChange={this.handleChangePhone} />
              </div>
              <div className="form-group">
                <label>e-mail</label>
                <TextField type="text" value={email} placeholder="Alamat e-mail" onValueChange={this.handleChangeEmail} />
              </div>
              <div className="form-group">
                <label>Alamat Facebook</label>
                <TextField type="text" value={link.facebook} placeholder="Alamat Facebook" onValueChange={this.handleChangeFacebook} />
              </div>
              <div className="form-group">
                <label>Alamat Instagram</label>
                <TextField type="text" value={link.instagram} placeholder="Alamat Instagram" onValueChange={this.handleChangeInstagram} />
              </div>
              <div className="form-group">
                <label>Alamat Twitter</label>
                <TextField type="text" value={link.twitter} placeholder="Alamat Twitter" onValueChange={this.handleChangeTwitter} />
              </div>
              <div className="form-group">
                <label>Alamat Organisasi</label>
                <TextArea placeholder="Alamat" value={address} onChange={this.handleChangeAddress} rows={3} />
              </div>
              <div className="form-group">
                <label>Deskripsi Tentang Organisasi</label>
                <TextArea placeholder="About Us" value={about} onChange={this.handleChangeAbout} rows={3} />
              </div>
              <div className="form-group">
                <label>Visi Organisasi</label>
                <TextArea placeholder="Visi Organisasi" value={vision} onChange={this.handleChangeVision} rows={3} />
              </div>
              <div className="form-group">
                <label>Misi Organisasi</label>
                <TextArea placeholder="Misi Organisasi" value={mission} onChange={this.handleChangeMission} rows={3} />
              </div>
              <Button type="button" buttonStyle="primary" onClick={() => { console.log('I was clicked !'); }}>SUBMIT</Button>
            </form>
          </div>
        </UpdateProfileCard>
      </UpdateProfileContainer>
    );
  }
}

export default UpdateProfile;
