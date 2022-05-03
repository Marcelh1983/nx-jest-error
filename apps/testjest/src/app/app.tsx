// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import * as addCryptoStore from '@testjest/data';
import { useEffect } from 'react';
export function App() {
  useEffect(() => {
    const load = async () => {
      const v = await addCryptoStore.store.dispatch(
        new addCryptoStore.SetInitialValuesAction()
      );
    };
    load();
  }, []);

  return (
    <>
      <NxWelcome title="testjest" />
      <div />
    </>
  );
}

export default App;
