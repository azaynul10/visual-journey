import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import KubeAutoFixPage from './pages/KubeAutoFixPage'
import MLflowObservabilityPage from './pages/MLflowObservabilityPage'
import AirQualityPage from './pages/AirQualityPage'
import IANPage from './pages/IANPage'
import CommunityPage from './pages/CommunityPage'
import SpeakingPage from './pages/SpeakingPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/kube-autofix-autonomous-kubernetes-sre-agent" element={<KubeAutoFixPage />} />
        <Route path="/projects/mlflow-agent-observability-databricks" element={<MLflowObservabilityPage />} />
        <Route path="/projects/transnational-air-quality-ai-agent" element={<AirQualityPage />} />
        <Route path="/projects/intelligent-accessibility-navigator" element={<IANPage />} />
        <Route path="/community/bangladesh-ai-cloud-native-developer-community" element={<CommunityPage />} />
        <Route path="/speaking/ai-cloud-native-workshops" element={<SpeakingPage />} />
        {/* Fallback to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  )
}

export default App
