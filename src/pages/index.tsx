import { useEffect } from 'react';
import { history } from 'umi';
import { Navigate } from 'umi';

  return <Navigate to="/expo" replace />;
};
export default function Index() {
  useEffect(() => {
    history.replace('/expo');
  }, []);
  return null;
}
return <Navigate to="/expo" replace />;
