import { login, logout } from '../../actions/auth';

test('should setup LOGIN action object', () => {
  const uid = '234567'
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: uid
  });
});

test('should setup LOGOUT action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});