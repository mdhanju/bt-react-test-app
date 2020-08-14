import React from 'react'

import MainSection from './MainSection'

describe('<MainSection />', (): void => {
    it('should render properly without crashing', () => {
        const wrapper = shallow(<MainSection />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('render the section with child div', () => {
        const wrapper = render(
            <MainSection>
                <div>Help</div>
            </MainSection>
        )
        expect(wrapper.html()).toMatch('<div>Help</div>')
    })

    it('render the section with child Component', () => {
        const ChildComp = (): React.ReactElement => {
            return <div>Child 1</div>
        }
        const wrapper = render(
            <MainSection>
                <ChildComp />
            </MainSection>
        )
        expect(wrapper.html()).toMatch('<div>Child 1</div>')
    })
})
