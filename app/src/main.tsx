import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import { TRPCProvider } from "@/providers/trpc"
import App from './App.tsx'
import ErrorBoundary from './ErrorBoundary'

// show global uncaught errors in page during debugging
window.addEventListener('error', (ev) => {
  // eslint-disable-next-line no-console
  console.error('Window error', ev.error || ev.message || ev);
});
window.addEventListener('unhandledrejection', (ev) => {
  // eslint-disable-next-line no-console
  console.error('Unhandled promise rejection', ev.reason);
});

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <HashRouter>
      <TRPCProvider>
        <App />
      </TRPCProvider>
    </HashRouter>
  </ErrorBoundary>,
)
