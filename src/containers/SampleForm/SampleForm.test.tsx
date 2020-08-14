import React from 'react'

import SampleForm from './SampleForm'

describe('<SampleForm />', () => {
    it('should render properly without crashing', () => {
        const wrapper = shallow(<SampleForm />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })
})
