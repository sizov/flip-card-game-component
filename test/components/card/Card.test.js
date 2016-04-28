import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Card from '../../../src/components/card/Card';

test('render with card div', t => {
    const wrapper = shallow(React.createElement(Card));

    t.is(wrapper.find('#card').length, 1);
});