/* eslint-disable react/jsx-no-undef */

import React from 'react'
import ErrorPage from '../ErrorPage'
import { MemoryRouter } from 'react-router-dom'

describe('<ErrorPage />', () => {
    it('should render initial layout', () => {
        const wrapper = shallow(<ErrorPage />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('render the error message', () => {
        const wrapper = render(
            <MemoryRouter>
                <Intl locale="en">
                    <ErrorPage />
                </Intl>
            </MemoryRouter>
        )
        expect(wrapper.text()).toBe(
            'Home - Sample FormAn error occured while loading configuration.'
        )
    })
})
