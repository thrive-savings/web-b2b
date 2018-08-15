import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDashboardDomain = state => state.get('dashboard', initialState);

const makeSelectDashboard = () =>
  createSelector(selectDashboardDomain, substate => substate.toJS());

export default makeSelectDashboard;
export { selectDashboardDomain };
