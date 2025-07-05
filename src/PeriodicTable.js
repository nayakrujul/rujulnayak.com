import { useEffect } from 'react';

function PeriodicTableRedirect() {
  useEffect(() => {
    window.location.href = 'https://nayakrujul.github.io/periodic-table/';
  }, []);

  return null; // or a loading message if you want
}

export default PeriodicTableRedirect;