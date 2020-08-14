import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'

describe('<Home />', () => {
    it('should render properly without crashing', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('render the localized (En) Header', () => {
        const wrapper = render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        expect(wrapper.html()).toMatch(
            '<img src="home-bg.png" alt="background">'
        )
    })
})
