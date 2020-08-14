import React from 'react'

import Image from './Image'
import desktopLogoSrc from '../../assets/images/logo-white.png'

describe('<Image />', () => {
    const defaultProps = {
        onClick: jest.fn()
    }

    it('should render properly without crashing', () => {
        const wrapper = shallow(<Image {...defaultProps} />)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.getElements()).toMatchSnapshot()
    })

    it('should respond to passed in function when clicked', () => {
        const wrapper = shallow(<Image {...defaultProps} />)
        wrapper.simulate('click')

        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    //TODO
    it.skip('render the image in html', () => {
        const wrapper = render(
            <Image
                src={desktopLogoSrc}
                className="mobile-hide"
                alt="brand logo"
            />
        )
        expect(wrapper.html()).toMatch(
            '<img src="logo-white.png" class="mobile-hide">'
        )
    })
})
