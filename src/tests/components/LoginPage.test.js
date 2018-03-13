import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

let startLoginSpy, wrapper;

beforeEach(() => {
   startLoginSpy = jest.fn();
   wrapper = shallow(
      <LoginPage
         startLogin={startLoginSpy}
      />
   );
})

test('Should render LoginPage correctly', () => {
   expect(wrapper).toMatchSnapshot();
});


test('Should call startLogin on button click', () => {
   wrapper.find('button').simulate('click');
   expect(startLoginSpy).toHaveBeenCalled();

});