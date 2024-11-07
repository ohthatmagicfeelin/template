// src/routes/AppRoutes.jsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '@/components/loading/Loading';
import SignupForm from '@/components/auth/SignupForm';
import PaymentForm from '@/components/payments/PaymentForm';
import { LoginForm } from '@/components/auth/LoginForm';
import { ForgotPassword } from '@/components/auth/ForgotPassword';
import { ResetPassword } from '@/components/auth/ResetPassword';
import { VerifyEmail } from '@/components/auth/VerifyEmail';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import EmailVerificationPending from '@/components/auth/EmailVerificationPending';
import { Header } from '@/layouts/MainLayout/components/Header.jsx';
import FeedbackWidget from '@/components/feedback/FeedbackWidget';
import { Settings } from '@/pages/Settings';
import { AppProviders } from '@/providers/AppProviders';

const Home = lazy(() => import('@/components/Home'));
const NotFound = lazy(() => import('@/components/error/NotFound'));

function AppRoutes() {
  return (
    <AppProviders>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* Public routes */}
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/verification-pending" element={<EmailVerificationPending />} />

            {/* Protected routes */}
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />

            {/* Redirect root to signup */}
            <Route path="/" element={<Navigate to="/signup" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
      <FeedbackWidget />
    </AppProviders>
  );
}

export default AppRoutes;