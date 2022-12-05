import 'react-native';
import React from 'react';
import { StarsScreen } from '../src/pages/StarsScreen';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<StarsScreen 
    starList={[]}
  />);
  expect(tree).toMatchSnapshot();
});
