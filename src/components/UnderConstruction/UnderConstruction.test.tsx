import React from 'react'
import UnderConstruction from './UnderConstruction'
import { MemoryRouter } from 'react-router-dom'

describe('<UnderConstruction />', () => {
    it('should render properly without crashing', () => {
        const wrapper = shallow(<UnderConstruction />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('render the UnderConstruction', () => {
        const wrapper = render(
            <MemoryRouter>
                <UnderConstruction />
            </MemoryRouter>
        )
        expect(wrapper.html()).toMatch(
            '<div class="my-auto col">Under Construction</div>'
        )
    })
})
