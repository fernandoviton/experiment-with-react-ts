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

it('try out spread operator in an array', () => {
  const start = [{a: 'a0', b: 'b0'}, {a: 'a1', b: 'b1'}];
  const expected = [{a: 'a0', b: 'newB0', c: 'c0'}, {a: 'a1', b: 'newB1', c: 'c1'}];
  const changed = start.map((x, i) => { 
    return {...x, b: 'newB' + i.toString(), c: 'c' + i.toString()}; 
  });
  expect(changed).toEqual(expected);
});
