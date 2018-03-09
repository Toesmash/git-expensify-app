import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

class Test extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: 5,
         value2: 10,
         value3: 10,
         value4: {
            min: 5,
            max: 10,
         },
         value5: {
            min: 3,
            max: 7,
         },
      };
   }

   render() {
      return (
         <div>
            <InputRange
               minValue={0}
               maxValue={1000}
               value={this.state.value}
               onChange={value => this.setState({ value })}
               onChangeComplete={value => console.log(value)}
            />

            <InputRange
               maxValue={20}
               minValue={0}
               formatLabel={value => `${value} kg`}
               value={this.state.value4}
               onChange={value => this.setState({ value4: value })}
               onChangeComplete={value => console.log(value)} 
            />

         </div>
      );
   }
}


ReactDOM.render(<Test />, document.getElementById('app'));