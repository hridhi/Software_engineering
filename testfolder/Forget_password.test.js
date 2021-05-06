import React from 'react';
import { shallow } from 'enzyme';
import App from '../Componets/Forgot_password';
import ReactDOM from 'react-dom';
describe('Home page testing', ()=> {
    const wrapper = shallow(<App/>);
    
    it('should have 4 btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(4);
        expect(wrapper.find('#Home')).toBeDefined();
        expect(wrapper.find('#Submit')).toBeDefined();
        expect(wrapper.find('#verify')).toBeDefined();
        expect(wrapper.find('#change')).toBeDefined();
    });
    it('Should have various inputs', ()=> {
        expect(wrapper.find('#email')).toBeDefined();
        expect(wrapper.find('#security')).toBeDefined();
        expect(wrapper.find('#pass')).toBeDefined();
        expect(wrapper.find('#confirm')).toBeDefined();
    });
    //type of the variables 
    
    it('Should have initial input as null ', ()=> {
        expect(wrapper.find('#email').text()).toEqual('');
        expect(wrapper.find('#security').text()).toEqual('');
        expect(wrapper.find('#pass').text()).toEqual('');
        expect(wrapper.find('#confirm').text()).toEqual('');
    });
    it("Unit testing", () =>{
        const span = document.createElement("span");
        ReactDOM.render(<App></App>,span)
        });
});