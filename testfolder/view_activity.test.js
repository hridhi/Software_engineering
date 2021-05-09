import React from 'react';
import { shallow } from 'enzyme';
import App from '../Componets/view_activity';
import ReactDOM from 'react-dom';
describe('View_allotments testing ', ()=> {
    const wrapper = shallow(<App/>);
    it('should have logout btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(1);
        expect(wrapper.find('Button').text()).toEqual('Home');
    });
    it('should have table component', ()=> {
        expect(wrapper.find('.table')).toBeDefined();
    });
    it("Unit testing", () =>{
        const span = document.createElement("span");
        ReactDOM.render(<App></App>,span)
        }
    )
});