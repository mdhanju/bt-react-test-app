import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import ContentHolder from '../ContentHolder'
import { Container, Row } from 'reactstrap'

describe('<ContentHolder />', () => {
    it('should render initial layout', () => {
        const wrapper = shallow(<ContentHolder />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('should render child component', () => {
        const wrapper = shallow(
            <ContentHolder>
                <div className="spinner-border" />
            </ContentHolder>
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(Container)).toHaveLength(1)
        expect(wrapper.find(Row)).toHaveLength(1)
        expect(wrapper.contains(<div className="spinner-border" />)).toBe(true)
    })

    it('should render Div with Text', () => {
        const wrapper = render(
            <MemoryRouter>
                <ContentHolder>
                    <span>Test Name</span>
                </ContentHolder>
            </MemoryRouter>
        )
        expect(wrapper.text()).toBe('Home - Sample FormTest Name')
        expect(wrapper.html()).toContain('div')
        expect(wrapper.html()).toContain('span')
    })
})
