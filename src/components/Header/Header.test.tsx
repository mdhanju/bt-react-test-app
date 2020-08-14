/* eslint-disable react/jsx-no-undef */

import React from 'react'
import Header from './Header'
import Image from '../Image'

describe('<Header />', () => {
    it('should render properly without crashing', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
        expect(wrapper.find(Image)).toHaveLength(2)
    })

    it('render the localized (En) Header', () => {
        const wrapper = render(
            <Intl locale="en">
                <Header />
            </Intl>
        )
        expect(wrapper.text()).toBe(`Sample App`)
        expect(wrapper.html()).toMatch(
            '<img src="logo-white.png" class="mobile-hide" alt="brand logo">'
        )
        expect(wrapper.html()).toMatch(
            '<img src="bt-icon.svg" class="mobile-logo desktop-hide" alt="mobile brand logo">'
        )
    })
})
