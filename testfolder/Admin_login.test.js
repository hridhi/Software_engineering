import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Componets/Admin_login';
import ReactDOM from 'react-dom';


describe('Login component tests', ()=> {
    const wrapper = shallow(<Login />);

    it('should have 3 btn component (home,google login, login)', ()=> {
       expect(wrapper.find('Button')).toHaveLength(3);
       expect(wrapper.find('#home')).toBeDefined();
       expect(wrapper.find('#google')).toBeDefined();
       expect(wrapper.find('#Submit')).toBeDefined();
    });
    it('should have input for email and password', ()=> {
        expect(wrapper.find('#uname')).toHaveLength(1);
        expect(wrapper.find('#pwd')).toHaveLength(1);
    });
    it('The input feild types should be equal to email,password', ()=> {
      expect( typeof wrapper.find('#uname')).toEqual('object');
      expect(typeof wrapper.find('#pwd')).toEqual('object');
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