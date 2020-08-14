/* eslint-disable */

import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({ children }: Props): ReactNode => <div>{children}</div>;
module.exports = rrd;
