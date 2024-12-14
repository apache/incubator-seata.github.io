import type { ClientModule } from '@docusaurus/types';
// This module is used to redirect the old URL to the new URL.
const module: ClientModule = {
  onRouteUpdate({ location }) {
    if (location.pathname.includes('/unversioned/')) {
      window.location.href = location.pathname.replace('/unversioned/', '/');
    }
  },
};
export default module;
