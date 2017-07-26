import React from 'react';
import { Map, List } from 'immutable';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedHome from '../index';
import { MapBox } from '../styled';

describe('Register Scene', () => {
  let store;
  let props;
  let directionsDisplay;
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
      actions: { onMapClicked: jest.fn() },
      Home: Map({
        origin: new window.google.maps.LatLng(50.06143, 19.93658),
        markers: List()
      })
    };
    directionsDisplay = { setMap: () => {} };
    store = storeFake(props);
  });
  // TODO: it('should match snapshot', () => {
  //   const tree = renderer.create(<ConnectedHome />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  it('should render Google Map Component', () => {
    expect(RegisterScene().find(MapBox).length).toBe(1);
  });
});
