import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Componets/Faculty_login';
import ReactDOM from 'react-dom';
describe('Login component tests', ()=> {
    const wrapper = shallow(<Login />);

    it('should have 3 btn component', ()=> {
        //There should be only one button
        expect(wrapper.find('Button')).toHaveLength(3);
    });

    it('should have input for email and password', ()=> {
        //Email and password input field should be present
        expect(wrapper.find('#uname')).toHaveLength(1);
        expect(wrapper.find('#pwd')).toHaveLength(1);
    });
    it('should have link for forget password', ()=> {
      //Email and password input field should be present
      expect(wrapper.find('#forget')).toHaveLength(1);
  });

    

    it('should have an empty email and password state var', ()=> {
        expect(wrapper.find('#uname').text()).toEqual('');
        expect(wrapper.find('#pwd').text()).toEqual('');
    });

    it("Unit testing", () =>{
        const span = document.createElement("span");
        ReactDOM.render(<Login></Login>,span)
        });

   
});