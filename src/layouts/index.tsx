import { Outlet } from 'umi';

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <Outlet />
    </div>
  );
}
