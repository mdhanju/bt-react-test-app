/* eslint-disable react/jsx-no-undef */

import React from 'react'
import App from '../App'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('<App />', () => {
    it('should render initial layout', () => {
        const FakeInit = jest.fn()
        const wrapper = shallow(
            <App isAppInitialized="INPROGRESS" initializeApp={FakeInit} />
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
        expect(FakeInit).toHaveBeenCalled()
    })

    it('should render Div with Text', () => {
        const wrapper = render(
            <Intl locale="en">
                <App isAppInitialized="INPROGRESS" initializeApp={jest.fn()} />
            </Intl>
        )
        expect(wrapper.text()).toBe(
            `Sample App© ${new Date().getFullYear()}\u00a0Blue Triangle, Inc.`
        )
        expect(wrapper.html()).toContain('div')
    })

    xit('should mount Div with Text', () => {
        const initialState = {
            appContext: {
                isAppInitialized: 'INPROGRESS',
                appConfig: {}
            }
        }
        const store = mockStore(initialState)
        //const mockInitfn = jest.fn();
        store.dispatch = jest.fn()
        const wrapper = mount(
            <Intl locale="en">
                <App store={store} initializeApp={mockInitfn} />
            </Intl>
        )

        expect(mockInitfn.mock.calls.length).toBe(1)
    })
})
