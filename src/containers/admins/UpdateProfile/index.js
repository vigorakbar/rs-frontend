import React from 'react';
import Styled from 'styled-components';

import BaseTextField from 'components/forms/TextField';
import Button from 'components/Button';

const UpdateProfileCard = Styled.div`
  width: 400px;
  margin: 20px;
  border-radius: 20px;
  border: 2px solid rgba(0,0,0,.125);
  box-shadow: 0 0 50px -4px grey;

  div > .input-wrapper {
    padding: 20px;
  }
`;

const TextField = Styled(BaseTextField)`
  margin-bottom: 20px;
`;

const UpdateProfileContainer = Styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class UpdateProfile extends React.PureComponent {
  state = {
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
        <UpdateProfileCard className="card text-center">
          <div className="card-body">
            <h1>Update Profile Rumah Sahaja</h1>
            <form>
              <div className="input-wrapper">
                <TextField type="text" value={name} placeholder="Nama Organisasi" onValueChange={this.onChangeName} />
                <TextField type="text" value={phone} placeholder="Telepon" onValueChange={this.onChangePhone} />
                <TextField type="text" value={email} placeholder="Alamat e-mail" onValueChange={this.onChangeEmail} />
                <TextField type="text" value={address} placeholder="Alamat" onValueChange={this.onChangeAddress} />
                <TextField type="text" value={about} placeholder="Tentang Organisasi" onValueChange={this.onChangeAbout} />
                <TextField type="text" value={vision} placeholder="Visi Organisasi" onValueChange={this.onChangeVision} />
                <TextField type="text" value={mission} placeholder="Misi Organisasi" onValueChange={this.onChangeMission} />
                <TextField type="text" value={link.facebook} placeholder="Alamat Facebook" onValueChange={this.onChangeFacebook} />
                <TextField type="text" value={link.instagram} placeholder="Alamat Instagram" onValueChange={this.onChangeInstagram} />
                <TextField type="text" value={link.twitter} placeholder="Alamat Twitter" onValueChange={this.onChangeTwitter} />
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
