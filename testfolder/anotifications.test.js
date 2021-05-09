import React from 'react';
import { shallow } from 'enzyme';
import App from '../Componets/anotifications';
import ReactDOM from 'react-dom';
describe('View_allotments testing ', ()=> {
    const wrapper = shallow(<App/>);
    it('should have logout btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(1);
    });
    it("Unit testing", () =>{
        const span = document.createElement("span");
        ReactDOM.render(<App></App>,span)
        }
    )
});