/** * @jest-environment jsdom */
import Methods from "../modules/Methods";
import addtasklocalstorage from "../modules/localstorage";
import Task from '../modules/constructor';

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

describe('Testing Add element in form list', () => {


    test('if list is not empty', () => {
        const methods = new Methods()
        const obj1 = new Task('test 1', 1,false);
        const obj2 = new Task('test 2',2,true);
        document.body.innerHTML =
            '<div id="listtask">' +
            ' <ul id="list"><li></li></ul>' +
            '</div>' + '<div id="listtext"></div>';
        methods.createelement(obj1);
        methods.createelement(obj2);
        const list = document.querySelectorAll('#list li');
        expect(list).toHaveLength(1);
     });

});