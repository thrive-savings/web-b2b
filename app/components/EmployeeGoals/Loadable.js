/**
 *
 * Asynchronously loads the component for EmployeeGoals
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
