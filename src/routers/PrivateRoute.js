import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

export const PrivateRoute = (properties) => {
   console.log("******************")
   console.log("PROPS", properties);
   const isAuthenticated = properties.isAuthenticated;
   const Component = properties.component;
   console.log("COMPONENT:", Component);
   return (
      <Route {...properties} component={(abc)=>{
         console.log("ROUTE:",abc);
         return ( isAuthenticated ? <div><Header /><Component {...abc}/></div>:<Redirect to='/' />);
         }}
      />
   );
};


const mapStateToProps = (reduxState) => ({
   isAuthenticated: !!reduxState.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);


// export const PrivateRoute = ({
//    isAuthenticated,
//    component: Component,
//    ...rest
// }) => (
//       <Route {...rest} component={(props) => (
//          isAuthenticated ? (
//             <div>
//                <Header />
//                <Component {...props} />
//             </div>
//          ) : (
//                <Redirect to='/' />
//             )
//       )}
//       />
//    );
