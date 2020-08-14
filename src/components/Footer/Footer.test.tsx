/* eslint-disable react/jsx-no-undef */

import React from 'react'

import Footer from './Footer'

describe('<Footer />', () => {
    it('should render initial layout', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('should shallow render message', () => {
        const expectedInnerText = `© ${new Date().getFullYear()}\u00a0<FormattedMessage />`
        const wrapper = shallow(<Footer />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.text()).toBe(expectedInnerText)
    })

    it('render the localized (En) footer', () => {
        const wrapper = render(
            <Intl locale="en">
                <Footer />
            </Intl>
        )
        expect(wrapper.text()).toBe(
            `© ${new Date().getFullYear()}\u00a0Blue Triangle, Inc.`
        )
    })
})
