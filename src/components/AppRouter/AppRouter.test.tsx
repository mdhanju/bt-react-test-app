/* eslint-disable react/jsx-no-undef */

import React from 'react'
import { MemoryRouter } from 'react-router'
import Home from '../../containers/Home'
import UnderConstruction from '../UnderConstruction'
import Header from '../Header'
import Footer from '../Footer'
import MainSection from '../MainSection'

import AppRouter from '../AppRouter'

jest.mock('../../containers/Home', () => require('../../containers/Home/Home'))
jest.mock('../../containers/SampleForm', () =>
    require('../../containers/SampleForm/SampleForm')
)
jest.mock('../UnderConstruction', () =>
    require('../UnderConstruction/UnderConstruction')
)

describe('<AppRouter />', () => {
    it('should render initial layout - INPROGRESS', () => {
        const wrapper = shallow(
            <Intl locale="en">
                <AppRouter isAppInitialized="INPROGRESS" />
            </Intl>
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('should render initial layout - ERROR', () => {
        const wrapper = shallow(
            <Intl locale="en">
                <AppRouter isAppInitialized="ERROR" />
            </Intl>
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('should render initial layout - SUCCESS', () => {
        const wrapper = shallow(
            <Intl locale="en">
                <AppRouter isAppInitialized="SUCCESS" />
            </Intl>
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('should render When - INPROGRESS', () => {
        const wrapper = render(
            <Intl locale="en">
                <MemoryRouter initialEntries={['/random']}>
                    <AppRouter isAppInitialized="INPROGRESS" />
                </MemoryRouter>
            </Intl>
        )
        expect(wrapper.text()).toBe(
            `Sample App© ${new Date().getFullYear()}\u00a0Blue Triangle, Inc.`
        )
        expect(wrapper.html()).toContain(
            '<img src="logo-white.png" class="mobile-hide" alt="brand logo">'
        )
        expect(wrapper.html()).toContain(
            '<img src="bt-icon.svg" class="mobile-logo desktop-hide" alt="mobile brand logo">'
        )
        expect(wrapper.html()).toContain(
            '<span class="app-name">Sample App</span>'
        )
    })

    it('should render When - ERROR', () => {
        const wrapper = render(
            <Intl locale="en">
                <MemoryRouter initialEntries={['/random']}>
                    <AppRouter isAppInitialized="ERROR" />
                </MemoryRouter>
            </Intl>
        )
        expect(wrapper.text()).toBe(
            'Sample AppHome - Sample FormAn error occured while loading configuration.' +
                '© 2020 Blue Triangle, Inc.'
        )
        expect(wrapper.html()).toContain(
            '<img src="logo-white.png" class="mobile-hide" alt="brand logo">'
        )
        expect(wrapper.html()).toContain(
            '<img src="bt-icon.svg" class="mobile-logo desktop-hide" alt="mobile brand logo">'
        )
        expect(wrapper.html()).toContain(
            '<span class="app-name">Sample App</span>'
        )
    })

    it('should render When - SUCCESS', () => {
        const wrapper = mount(
            <Intl locale="en">
                <MemoryRouter initialEntries={['/random']}>
                    <AppRouter isAppInitialized="SUCCESS" />
                </MemoryRouter>
            </Intl>
        )
        expect(wrapper.text()).toBe(
            `Sample App© ${new Date().getFullYear()}\u00a0Blue Triangle, Inc.`
        )
        expect(wrapper.html()).toContain(
            '<img src="logo-white.png" class="mobile-hide" alt="brand logo">'
        )
        expect(wrapper.html()).toContain(
            '<img src="bt-icon.svg" class="mobile-logo desktop-hide" alt="mobile brand logo">'
        )
        expect(wrapper.html()).toContain(
            '<span class="app-name">Sample App</span>'
        )
    })

    it('should mount Home on - SUCCESS', () => {
        const wrapper = mount(
            <Intl locale="en">
                <MemoryRouter initialEntries={['/']}>
                    <AppRouter isAppInitialized="SUCCESS" />
                </MemoryRouter>
            </Intl>
        )
        expect(wrapper.find(Header)).toHaveLength(1)
        expect(wrapper.find(Footer)).toHaveLength(1)
        expect(wrapper.find(MainSection)).toHaveLength(1)
        expect(wrapper.find(MainSection).find(Home)).toHaveLength(1)
        expect(wrapper.find(MainSection).find(UnderConstruction)).toHaveLength(
            0
        )
    })
    it('should mount Help on - SUCCESS', () => {
        const wrapper = mount(
            <Intl locale="en">
                <MemoryRouter initialEntries={['/help']}>
                    <AppRouter isAppInitialized="SUCCESS" />
                </MemoryRouter>
            </Intl>
        )
        expect(wrapper.find(Header)).toHaveLength(1)
        expect(wrapper.find(Footer)).toHaveLength(1)
        expect(wrapper.find(MainSection)).toHaveLength(1)
        expect(wrapper.find(MainSection).find(Home)).toHaveLength(0)
        expect(wrapper.find(MainSection).find(UnderConstruction)).toHaveLength(
            1
        )
    })
})
