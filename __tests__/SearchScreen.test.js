import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { SearchScreen } from '../src/pages/SearchScreen';

it('renders correctly', () => {
  const tree = renderer.create(<SearchScreen />);
  expect(tree).toMatchSnapshot();
});
