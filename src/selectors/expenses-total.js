const getExpensesTotal = (expenses) => {
   if (expenses.length === 0) {
      return 0;
   }
   else {
      let expensesAmounts = [];
      expenses.map((singleExpense) => {
         expensesAmounts = [...expensesAmounts, singleExpense.amount]
      });

      const reducer = (accumulator, currentValue) => {
         return accumulator + currentValue;
      }

      return expensesAmounts.reduce(reducer, 0);

   }


}

export default getExpensesTotal;