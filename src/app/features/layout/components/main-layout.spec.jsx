import React from 'react';
import {render} from 'enzyme';
import {expect} from 'chai';

import MainLayout from './main-layout';

describe('MainLayout tests', () => {
  it('should have main-layout class', () => {
    const wrapper = render(<MainLayout />);
    expect(wrapper.find('.main-layout')).to.have.length(1);
  });
});
