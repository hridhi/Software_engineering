import React from 'react';
import { shallow } from 'enzyme';
import App from '../Componets/swap';
import ReactDOM from 'react-dom';
describe('View_allotments testing ', ()=> {
    const wrapper = shallow(<App/>);
    it('should have logout btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(2);
    });
    it('The input field types should be there', ()=> {
        expect( typeof wrapper.find('.facid')).toEqual('object');
        expect(typeof wrapper.find('.date_s')).toEqual('object');
        expect( typeof wrapper.find('.time_s')).toEqual('object');
        expect(typeof wrapper.find('.class_s')).toEqual('object');
        expect( typeof wrapper.find('.date')).toEqual('object');
        expect(typeof wrapper.find('.time')).toEqual('object');
        expect(typeof wrapper.find('.class')).toEqual('object');
    });
    it('should have an empty email and password state var', ()=> {
        expect( wrapper.find('.facid')).toEqual({});
        expect(wrapper.find('.date_s')).toEqual({});
        expect( wrapper.find('.time_s')).toEqual({});
        expect( wrapper.find('.class_s')).toEqual({});
        expect( wrapper.find('.date')).toEqual({});
        expect( wrapper.find('.time')).toEqual({});
        expect( wrapper.find('.class')).toEqual({});
  });
    it("Unit testing", () =>{
        const span = document.createElement("span");
        ReactDOM.render(<App></App>,span)
        }
    )
});