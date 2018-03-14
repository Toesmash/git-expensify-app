import React from 'react';
import otplib from 'otplib';


// const isValid = otplib.authenticator.check(629421, secret);

// const otpauth = otplib.authenticator.keyuri('user', 'service', secret);


export default class TimerComp extends React.Component {
   constructor() {
      super();
      this.state = {
         time: Math.round(new Date().getTime() / 1000.0),
         token: 0
      };
   }

   componentDidMount() { // create the interval once component is mounted
      this.update = setInterval(() => {
         this.setState({
            time: Math.round(new Date().getTime() / 1000.0)
         });
      }, 1 * 1000); // every 1 seconds
   }

   btnClick = () => {
      const secret = 'JFDUC2KGOVNGCK2NM5FVARDNJRLDGWKX'
      this.setState({
         token: otplib.authenticator.generate(secret)
      })
   }
   
   render() {

      const { time, secret, token } = this.state; // retrieve the time from state
      

      let countDown = 30 - (time % 30);

      return (<div>
         <h1>Digital Clock</h1>
         <h2>
            {/* print the string prettily */}
            {time}
         </h2>
         <h3>
            {token}
            <button onClick={this.btnClick}></button>
         </h3>
         <h4>
            {countDown}
         </h4>
      </div>);
   }
}

// var epoch = Math.round(new Date().getTime() / 1000.0);
// var countDown = 30 - (epoch % 30);
// if (epoch % 30 == 0) updateOtp();
// $('#updatingIn').text(countDown);





// class ClockFunction extends React.Component {


//    componentDidMount() { // create the interval once component is mounted
//       this.update = setInterval(() => {
//          this.setState({ time: new Date() });
//       }, 1 * 1000); // every 1 seconds
//    }

//    componentWillUnmount() { // delete the interval just before component is removed
//       clearInterval(this.update);
//    }

//    render() {
//       const { time } = this.state; // retrieve the time from state

//       return (<div>
//          <h1>Digital Clock</h1>
//          <h2>
//             {/* print the string prettily */}
//             {time.toLocaleTimeString()}
//          </h2>
//       </div>);
//    }
// }