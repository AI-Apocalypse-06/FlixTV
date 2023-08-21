import { BrowserRouter, Navigate, Route, Routes as BaseRoutes } from 'react-router-dom';

import { useAuth } from 'modules/auth/context/auth';

import { Auth, Catalog, Dashboard, Home } from 'pages';

import Protected from './protected';

const Routes = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <BrowserRouter>
      <BaseRoutes>
        {/* USER */}
        <Route path="">
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>

        {/* ADMIN OR MODERATOR */}
        <Route path="dashboard" element={<Protected allow={user?.isAdmin!} navigate={isAuthenticated ? '/' : '/auth/login'} />}>
          <Route index element={<Dashboard.Index />} />
          <Route path="catalog" element={<Dashboard.Catalog />} />
          <Route path="comments" element={<Dashboard.Comments />} />
          <Route path="users" element={<Dashboard.Users />} />
          <Route path="reviews" element={<Dashboard.Reviews />} />
        </Route>

        {/* ALL USERS */}
        <Route path="auth" element={<Protected allow={!isAuthenticated} navigate="/dashboard" />}>
          <Route path="login" element={<Auth.Login />} />
          <Route path="register" element={<Auth.Register />} />
          <Route path="reset-password" element={<Auth.ResetPassword />} />
          <Route path="verification" element={<Auth.Verification />} />
          <Route path="*" index element={<Navigate to="/auth/login" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </BaseRoutes>
    </BrowserRouter>
  );
};

export default Routes;
