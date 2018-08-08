import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const selectAuth = state => state.get('auth');
const makeSelectAuth = () =>
  createSelector(selectAuth, substate => {
    console.log('-----Make Select Auth-----');
    console.log(substate.toJS());
    return substate.toJS();
  });

export { makeSelectLocation, makeSelectAuth };
