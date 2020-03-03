/**
 *
 * Tests for AddPage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

// import 'jest-dom/extend-expect'; // add some helpful assertions

import { AddPage, mapDispatchToProps } from '../index';
import { changeString, postString } from '../actions';

import configureStore from '../../../configureStore';

describe('<AddPage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <AddPage loading={false} error={false} />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should render and match the snapshot after success', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <AddPage loading={false} error={false} postSuccess />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should render and match the snapshot after error', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <AddPage loading={false} error />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should not call onPostString if string is an empty string', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <AddPage onChangeString={() => {}} onPostString={submitSpy} />
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onPostString if username is null', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <AddPage string="" onChangeString={() => {}} onPostString={submitSpy} />
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<AddPage dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<AddPage />);
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeString', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeString).toBeDefined();
      });

      it('should dispatch changeString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const string = 'Hello World';
        result.onChangeString({ target: { value: string } });
        expect(dispatch).toHaveBeenCalledWith(changeString(string));
      });
    });

    describe('onPostString', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onPostString).toBeDefined();
      });

      it('should dispatch postString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onPostString();
        expect(dispatch).toHaveBeenCalledWith(postString());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const e = { preventDefault };
        result.onPostString(e);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
