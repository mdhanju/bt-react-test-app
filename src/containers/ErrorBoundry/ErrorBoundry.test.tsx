/* eslint-disable react/jsx-no-undef */

import React from 'react'
import { shallow, render, mount } from 'enzyme'
import ErrorBoundry from './ErrorBoundry'

const Buggy = (): never => {
    throw new Error('An error has occured in Buggy component!')
}

describe('<ErrorBoundry />', () => {
    it('should render properly without crashing', () => {
        const wrapper = shallow(<ErrorBoundry />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('render the ErrorBoundry with no errors', () => {
        const TestComp = (): React.ReactElement => {
            return <div>Test</div>
        }
        const wrapper = render(
            <ErrorBoundry>
                <TestComp />
            </ErrorBoundry>
        )
        expect(wrapper.html()).toBe('Test')
    })

    it('render the ErrorBoundry with errors', () => {
        sinon.spy(ErrorBoundry.prototype, 'componentDidCatch')
        mount(
            <Intl locale="en">
                <ErrorBoundry>
                    <Buggy />
                </ErrorBoundry>
            </Intl>
        )
        expect(ErrorBoundry.prototype.componentDidCatch).toHaveProperty(
            'callCount',
            1
        )
    })
})
