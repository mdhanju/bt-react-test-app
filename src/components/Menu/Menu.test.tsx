import React from 'react'

import Menu from './Menu'

describe('<Menu />', () => {
    it('should render properly without crashing', () => {
        const wrapper = shallow(<Menu />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })
})
