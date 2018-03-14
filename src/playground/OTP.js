import React from 'react';
import ReactDOM from 'react-dom';
import TimerComp from './TimerComp';
import otplib from 'otplib';

const secret = 'JFDUC2KGOVNGCK2NM5FVARDNJRLDGWKX';
const token = otplib.authenticator.generate(secret);

const isValid = otplib.authenticator.check(629421, secret);

const otpauth = otplib.authenticator.keyuri('user', 'service', secret);

console.log("Secret", secret)
console.log("token", token)
console.log("isValid", isValid)
console.log("otpauth", otpauth)

const meno = 'InfinityBank';
const user = 'Toesmash'
const jsx = (
   <div>
      <TimerComp />
      <img src={`https://www.google.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth://totp/${meno}%3A${user}%3Fsecret%3D${secret}%26issuer%3DToesmash`} alt=""/>   
   </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
// https://www.google.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth://totp/Example%3Aalice%40google.com%3Fsecret%3DJBSWY3DPEHPK3PXP%26issuer%3DExample
// https://www.google.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth://totp/service:user?secret=KFEHQ3LZMFVEK2RRKQ3HI33MLJVEQN2B&issuer=service