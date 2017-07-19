import React from 'react';
import { Map } from 'immutable';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedHome from './index';
import GoogleMap from './components/GoogleMap';

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
        <ConnectedHome />
      </Provider>
    );
  beforeEach(() => {
    props = {
      onMapClicked: jest.fn(),
      Home: Map({
        origin: new window.google.maps.LatLng(50.06143, 19.93658)
      })
    };
    store = storeFake(props);
  });
  // TODO:
  //   it('should match snapshot', () => {
  //     const tree = renderer.create(<ConnectedHome />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  it('should render Google Map Component', () => {
    expect(RegisterScene().find(GoogleMap).length).toBe(1);
  });
  it('should call handleClick after click on map', () => {
    RegisterScene().find(GoogleMap).simulate('click');
    expect(props.onMapClicked).toBeCalled();
  });
});
