const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      // resolve({
      //    name: 'andrew',
      //    age: 26
      // });

      reject('Something went wrong!');

   }, 3000)
});

console.log('before');

promise.then((data) => {
   console.log(data);
}).catch((error) => { 
   console.log(error);
})


console.log('after')