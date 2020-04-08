import React from 'react';
import User from '../../components/User';
const authIndexPage = props => (
  <div>
    <h1 style={{ textAlign: 'center' }}> Auth page</h1>
    <User name="max" age={props.maxAge} />
  </div>
);

authIndexPage.getInitialProps = async context => ({ maxAge: 10 });

export default authIndexPage;
