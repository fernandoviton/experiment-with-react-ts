import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('try out spread operator', () => {
  const start = {a: 'a', b: 'b'};
  const expected = {a: 'a', b: 'newB', c: 'c'};
  const changed = {...start, b: 'newB', c: 'c'};
  expect(changed).toEqual(expected);
});

// it('try out spread operator in an array', () => {
//   const start = [{a: 'a1', b: 'b1'}, {a: 'a2', b: 'b2'}];
//   const expected = [{a: 'a1', b: 'newB1', c: 'c1'}, {a: 'a2', b: 'newB2', c: 'c2'}];
//   const changed = start.map((x, i) => {...x, b: 'newB' + i.toString()});
//   expect(changed).toEqual(expected);
// });
