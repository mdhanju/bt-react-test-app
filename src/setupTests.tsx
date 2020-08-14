import { configure, mount, shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import React from 'react'
import translations from './translations'
import { IntlProvider } from 'react-intl'

type Props = {
    children: React.ReactNode;
    locale: string;
};

const Intl = (props: Props): React.ReactNode => {
    return (
        <IntlProvider
            locale={props.locale}
            messages={translations[props.locale]}
        >
            {props.children}
        </IntlProvider>
    )
}

// Enzyme adapter for shallow, mount and render
configure({ adapter: new Adapter() })

/* istanbul ignore next */

// Helper functions to wrap React Components with react-intl IntlProvider for testing

// Mocks connect function to allow for Redux-connected React components to be shallow rendered
jest.mock('react-redux', () => ({
    connect: /* eslint-disable-line @typescript-eslint/explicit-function-return-type */ () => ReactComponent =>
        ReactComponent
}))

global.shallow = shallow
global.render = render
global.mount = mount
global.Intl = Intl
global.sinon = sinon
