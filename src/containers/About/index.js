import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { getProfile } from 'models/Profile';

class About extends React.PureComponent {
    state = {
      profile: {},
    }

    componentDidMount() {
      this.getRSProfile();
    }

    getRSProfile = () => {
      getProfile()
        .then((response) => {
          this.setState({
            profile: response.data,
          });
        })
        .catch((error) => {
          console.log(error) //eslint-disable-line
        });
    }

    render() {
      const { profile } = this.state;
      return (
        <div>
          <Header active="about-us" />
          this is about page<br /> <br /><br /><br /><br /><br /><br /><br />{/* eslint-disable-line */}
          this is about page<br /><br /><br /><br /><br /><br /><br /><br />{/* eslint-disable-line */}
          this is about page<br /><br /><br /><br /><br /><br /><br /><br />{/* eslint-disable-line */}
          this is about page<br /><br /><br /><br /><br /><br /><br /><br />{/* eslint-disable-line */}
          this is about page
          <Footer profile={profile} />
        </div>
      );
    }
}

export default About;
