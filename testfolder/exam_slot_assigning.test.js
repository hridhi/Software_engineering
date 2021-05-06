import React from 'react';
import { shallow } from 'enzyme';
import App from '../Componets/exam_slot_assigning';
import ReactDOM from 'react-dom';
describe('Home page testing', ()=> {
    const wrapper = shallow(<App/>);
    
    it('should have 2 btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(2);
        expect(wrapper.find('#Home')).toBeDefined();
        expect(wrapper.find('#Allot')).toBeDefined();
    });
    it('Should have various inputs', ()=> {
        expect(wrapper.find('#facid')).toBeDefined();
        expect(wrapper.find('#date')).toBeDefined();
        expect(wrapper.find('#time')).toBeDefined();
        expect(wrapper.find('#class')).toBeDefined();
    });
    //type of the variables 
    it('should have an empty email and password state var', ()=> {
        expect(wrapper.find('#facid').text()).toEqual('');
        expect(wrapper.find('#date').text()).toEqual('');
        expect(wrapper.find('#time').text()).toEqual('');
        expect(wrapper.find('#class').text()).toEqual('');
    });
    it("Unit testing", () =>{
        const span = document.createElement("span");
        ReactDOM.render(<App></App>,span)
        });
});