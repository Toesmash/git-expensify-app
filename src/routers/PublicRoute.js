import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
   isAuthenticated,
   component: Component,
   ...rest
}) => (
      <Route {...rest} component={(props) => (
         isAuthenticated ? (
            <Redirect to='/dashboard' />
         ) : (
            <div>
               <Component {...props} />
            </div>
         )
      )}
      />
   );


const mapStateToProps = (reduxState) => ({
   isAuthenticated: !!reduxState.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);