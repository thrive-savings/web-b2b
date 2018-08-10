/**
 *
 * Asynchronously loads the component for EmployeePolling
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
