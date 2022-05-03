import * as myStore from './data';

describe('data', () => {
  it('should work', async () => {
    const v = await myStore.store.dispatch(new myStore.InitAction());
    expect(v.loaded).toEqual(true);
  });
});
