
// database.ref('notes/-L7JdV7-25MAB0iqQpy6').remove()

// database.ref('expenses')
//    .once('value')
//    .then((snapshot) => {
//       const expenses = [];
//       snapshot.forEach(element => {
//          expenses.push({
//             id: element.key,
//             ...element.val()
//          })
//       });

//       console.log(expenses);
//    });


database.ref('expenses').on('child_removed', (snapshot) => {
   console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_changed', (snapshot) => {
   console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_added', (snapshot) => {
   console.log(snapshot.key, snapshot.val());
})


// database.ref('expenses').on('value', (snapshot) => {

//    const expenses = [];

//    snapshot.forEach(element => {
//       expenses.push({
//          id: element.key,
//          ...element.val()
//       })
//    });

//    console.log(expenses);
// }, (err) => {
//    console.log('Error', err)
// })


database.ref('expenses').push({
   description: '34567desc',
   note: '34567Note',
   amount: 34567,
   createdAt: 34567
})

// database.ref('notes').push({
//    title: 'React native',
//    body: 'Go for a code'
// });




// const firebaseNotes = {
//    notes: {

//    }
// };

// const notes = [{
//    id: 12,
//    name: 'First note'
// }, {
//    id: 5,
//    name: 'Second note'
// }];

// database.ref('notes').set(notes);



// database.ref().on('value', (snapshot) => {
//    const fetch = snapshot.val();
//    console.log(`${fetch.name} is a ${fetch.job.title} at ${fetch.job.company}`)
// }, (err)=>{
//    console.log('Error', err)
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
// }, (err) => {
//    console.log('Errors', err)
// });

// setTimeout(() => {
//    database.ref('age').set(30);
// }, 3500);

// setTimeout(() => {
//    database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//    database.ref('age').set(50);
// }, 10500);



// database.ref('location/city')
//    .once('value')
//    .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//    })
//    .catch((err) => {
//       console.log('Error fetching data', err);
//    });





// database.ref('isSingle').remove().then(() => {
//    console.log('REMOVED');
// }).catch((e) => {
//    console.log('REMOVE FAILED', e);
// })


// database.ref().set({
//    name: 'Toesmash',
//    age: 26,
//    stressLevel: 7,
//    job: {
//       title: 'Software developer',
//       company: 'Google'
//    },
//    location: {
//       city: 'Ba',
//       country: 'Slovakia'
//    }
// }).then(() => {
//    console.log('Data is saved');
// }).catch((error) => {
//    console.log('This failed', error);
// });


// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle'
// });




// database.ref('attributes').set({
//    height: 195,
//    weight: 80
// }).then(() => {
//    console.log('Data is saved');
// }).catch((error)=>{
//    console.log('This failed', error);
// });;

