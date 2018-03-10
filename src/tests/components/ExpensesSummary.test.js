import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';


test('Should render ExpensesSummary with 1 expense', () => {
   const wrapper = shallow(<ExpensesSummary expensesCount={1} expenses={345}  />);
   expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with 0 or multiple expenses', ()=>{
   const wrapper = shallow(<ExpensesSummary expenses={345675} expensesCount={15}/>);
   expect(wrapper).toMatchSnapshot();
});