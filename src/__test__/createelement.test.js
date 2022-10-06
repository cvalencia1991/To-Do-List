/** * @jest-environment jsdom */
/* import Methods from "./src/modules/Methods"; */
import addtasklocalstorage from "../modules/localstorage";
import Task from '../modules/constructor';
window.localStorage = Storage.prototype;

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

describe('add information in localstorage corretly ', () => {

});
