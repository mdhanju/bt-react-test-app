import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'

describe('<LoadingSpinner />', () => {
    it('should render properly without crashing', () => {
        const wrapper = shallow(<LoadingSpinner />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('render the localized (En) Header', () => {
        const wrapper = render(
            <MemoryRouter>
                <LoadingSpinner />
            </MemoryRouter>
        )
        expect(wrapper.html()).toMatch('<div class="spinner-border"></div>')
    })
})
