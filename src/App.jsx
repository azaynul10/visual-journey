import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'

// Lazy-load non-home pages
const KubeAutoFixPage = lazy(() => import('./pages/KubeAutoFixPage'))
const MLflowObservabilityPage = lazy(() => import('./pages/MLflowObservabilityPage'))
const AirQualityPage = lazy(() => import('./pages/AirQualityPage'))
const IANPage = lazy(() => import('./pages/IANPage'))
const CommunityPage = lazy(() => import('./pages/CommunityPage'))
const SpeakingPage = lazy(() => import('./pages/SpeakingPage'))
const CredentialsPage = lazy(() => import('./pages/CredentialsPage'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-6 h-6 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/kube-autofix-autonomous-kubernetes-sre-agent" element={<KubeAutoFixPage />} />
          <Route path="/projects/mlflow-agent-observability-databricks" element={<MLflowObservabilityPage />} />
          <Route path="/projects/transnational-air-quality-ai-agent" element={<AirQualityPage />} />
          <Route path="/projects/intelligent-accessibility-navigator" element={<IANPage />} />
          <Route path="/community/bangladesh-ai-cloud-native-developer-community" element={<CommunityPage />} />
          <Route path="/speaking/ai-cloud-native-workshops" element={<SpeakingPage />} />
          <Route path="/credentials" element={<CredentialsPage />} />
          {/* Fallback to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
