import React from 'react';
import { shallow } from 'enzyme';
import App from '../Componets/fnotifications';
import ReactDOM from 'react-dom';
describe('View_allotments testing ', ()=> {
    const wrapper = shallow(<App/>);
    it('should have logout btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(2);
    });
    it('The input field types should be there', ()=> {
        expect(typeof wrapper.find('.accordian')).toEqual('object');
       
    });
    it("Unit testing", () =>{
        const span = document.createElement("span");
        ReactDOM.render(<App></App>,span)
        }
    )
});