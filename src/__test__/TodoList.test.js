/** * @jest-environment jsdom */
import Methods from '../modules/Methods.js';
import addtasklocalstorage from '../modules/localstorage.js';
import Task from '../modules/constructor.js';
import clearallsuccess from '../modules/clearallsuccess.js';

describe('add information in localstorage corretly ', () => {
  const obj1 = new Task('test 1', 1);
  const obj2 = new Task('test 2', 2);
  const obj3 = new Task('test 3', 3);

  test('emptytask', () => {
    const tasks = addtasklocalstorage(obj1);
    expect(tasks).toBe(1);
  });

  test('not empty task', () => {
    addtasklocalstorage(obj2);
    const tasks = addtasklocalstorage(obj3);
    expect(tasks).toBe(3);
  });
});

describe('Testing Add and delete element in form list', () => {
  test('if list is not empty', () => {
    const methods = new Methods();
    const obj1 = new Task('test 1', 1, false);
    document.body.innerHTML = '<div id="listtask">'
            + ' <ul id="list"><li></li></ul>'
            + '<div id="listtext"></div>';
    methods.createelement(obj1);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});

describe('check clear all succes', () => {
  const original = window.location;

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', { configurable: true, value: original });
  });

  test('Expect to change completed to tru after click', () => {
    const methods = new Methods();
    const obj1 = new Task('test 1', 1, false);
    const obj2 = new Task('test 1', 1, false);
    const obj3 = new Task('test 1', 1, true);
    document.body.innerHTML = '<ul id="listtask">'
            + '</ul>';
    methods.createelement(obj1);
    methods.createelement(obj2);
    methods.createelement(obj3);
    clearallsuccess();
    const list = document.querySelectorAll('#listtask li');
    expect(list).toHaveLength(2);
  });

  test('when the checkbox are unchecked', () => {
    const methods = new Methods();
    const obj1 = new Task('test 1', 1, false);
    const obj2 = new Task('test 1', 1, false);
    const obj3 = new Task('test 1', 1, false);
    document.body.innerHTML = '<input id="listtext" value="hola" name="listtext" type="text" placeholder="Add your task here">'
    + '<ul id="listtask">'
            + '</ul>';
    methods.createelement(obj1);
    methods.createelement(obj2);
    methods.createelement(obj3);
    clearallsuccess();
    const list = document.querySelectorAll('#listtask li');
    expect(list).toHaveLength(3);
  });
});
