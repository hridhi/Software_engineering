import React from 'react';
import { shallow } from 'enzyme';
import App from '../Componets/feedback';
import ReactDOM from 'react-dom';
describe('Home page testing', ()=> {
    const wrapper = shallow(<App/>);
    
    it('should have Submit btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(2);
        expect(wrapper.find('#Home')).toBeDefined();
        expect(wrapper.find('#Submit')).toBeDefined();
    });
    it('Should have various inputs', ()=> {
        expect(wrapper.find('#feedback')).toBeDefined();
        
    });
    //type of the variables 
    it('Should have initial input as null ', ()=> {
        expect(wrapper.find('#feedback').text()).toEqual('');
    });
    it("Unit testing", () =>{
        const span = document.createElement("span");
        ReactDOM.render(<App></App>,span)
        });

});