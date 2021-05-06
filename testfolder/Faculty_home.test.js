import React from 'react';
import { shallow } from 'enzyme';
import App from '../Componets/Faculty_home';
import ReactDOM from 'react-dom';
describe('Home page testing', ()=> {
    const wrapper = shallow(<App/>);
    it('should have a navigation bar', ()=> {
        expect(wrapper.find('Navbar')).toHaveLength(1);
    });
    it('Should display the calender', ()=> {
        expect(wrapper.find('.calender')).toHaveLength(1);
    });
    it('Should display the quote', ()=> {
        expect(wrapper.find('.image')).toHaveLength(1);
    });
    it('should have logout btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(1);
        expect(wrapper.find('Button').text()).toEqual('Logout');
    });
    it("Unit testing", () =>{
        const span = document.createElement("span");
        ReactDOM.render(<App></App>,span)
        });
});