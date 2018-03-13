import authReducer from '../../reducers/auth';

test('should set default state', () => {
   const state = authReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual({});
});

test('Should login user', () => {
   const action = {
      type: 'LOGIN',
      uid: '234567'
   }
   const state = authReducer({} , action);
   expect(state.uid).toBe(action.uid);
});

test('Should logout user', () => {
   const action = {
      type: 'LOGOUT'
   }
   const state = authReducer({uid: '1234567'} , action);
   expect(state).toEqual({});
});