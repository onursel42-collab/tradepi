import { useEffect } from 'react';
import { history } from 'umi';

export default function Index() {
  useEffect(() => {
    history.replace('/expo');
  }, []);
  return null;
}
