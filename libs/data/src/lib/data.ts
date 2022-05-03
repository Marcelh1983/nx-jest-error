import { ActionType, createStore, StateContextType } from 'rx-basic-store';

export interface StateModel {
  loaded: boolean;
}

const initialState: StateModel = {
  loaded: true,
};

export class InitAction implements ActionType<StateModel, never> {
  type = 'INIT';

  async execute(ctx: StateContextType<StateModel>): Promise<StateModel> {
    return ctx.patchState({
      loaded: true,
    });
  }
}

export const store = createStore<StateModel>(
  initialState,
  window?.location?.href?.includes('localhost') ||
    window?.location?.href?.includes('127.0.0.1')
);
