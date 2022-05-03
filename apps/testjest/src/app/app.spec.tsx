import { render } from '@testing-library/react';
import * as addCryptoStore from '@testjest/data';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
const s: ActionType = {};
    expect(getByText(/Welcome testjest/gi)).toBeTruthy();
  });
});

describe('data', () => {
  it('should work', async () => {
    const v = await addCryptoStore.store.dispatch(new addCryptoStore.SetInitialValuesAction());
    expect(v.loaded).toEqual(true);
  });
});
