import React from 'react';
import { Map } from 'immutable';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import ConnectedHome from './index';

describe('Register Scene', () => {
  let store;
  let props;
  const storeFake = state => ({
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({ ...state })
  });
  const context = {};
  const RegisterScene = () =>
    mount(
      <Provider store={store}>
        <StaticRouter context={context}>
          <ConnectedHome />
        </StaticRouter>
      </Provider>
    );
  beforeEach(() => {
    props = {};
    store = storeFake(props);
  });
  it('should match snapshot', () => {
    const tree = renderer.create(<ConnectedHome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
