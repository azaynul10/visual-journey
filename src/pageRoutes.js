// Shared by client-side lazy navigation and the build-time HTML renderer.
export const pageRoutes = [
  { path: '/projects/splitshare-backend-observability', load: () => import('./pages/SplitSharePage') },
  { path: '/projects/kube-autofix-autonomous-kubernetes-sre-agent', load: () => import('./pages/KubeAutoFixPage') },
  { path: '/projects/mlflow-agent-observability-databricks', load: () => import('./pages/MLflowObservabilityPage') },
  { path: '/projects/transnational-air-quality-ai-agent', load: () => import('./pages/AirQualityPage') },
  { path: '/projects/intelligent-accessibility-navigator', load: () => import('./pages/IANPage') },
  { path: '/community/bangladesh-ai-cloud-native-developer-community', load: () => import('./pages/CommunityPage') },
  { path: '/speaking/ai-cloud-native-workshops', load: () => import('./pages/SpeakingPage') },
  { path: '/credentials', load: () => import('./pages/CredentialsPage') },
];
