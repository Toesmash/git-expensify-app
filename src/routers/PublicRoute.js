import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
   isAuthenticated,
   component: Component,
   ...rest
}) => {
   return (
      <Route {...rest} component={(props) => (
         isAuthenticated ? (
            <Redirect to="/dashboard" />
         ) : (
               <Component {...props} />
            )
      )} />
   )

};




const mapStateToProps = (reduxState) => ({
   isAuthenticated: !!reduxState.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);





// export const PublicRoute = (props) => {
//    console.log('**************************')
//    console.log("PUBLIC PROPS:", props);
//    const Component = props.component
//    const isAuthenticated = props.isAuthenticated
//    return (
//       <Route component={(props)=>{
//          console.log("ROUTE PROPS:", props);
//          return (isAuthenticated ? (<Redirect to='dashboard' />) : <Component {...props} />);
//       }} />
//    )

// };
