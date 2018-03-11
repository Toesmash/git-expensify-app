import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpensesSummary with 1 expense', () => {
   const wrapper = shallow(<ExpensesSummary expensesTotal={345} expensesCount={1}  />);
   expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with 0 or multiple expenses', ()=>{
   const wrapper = shallow(<ExpensesSummary expensesTotal={345675} expensesCount={15}/>);
   expect(wrapper).toMatchSnapshot();
});