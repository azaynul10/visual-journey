import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { pageRoutes } from './pageRoutes';

// Resolve route modules before rendering. Lazy Suspense streams can leave page
// content in hidden segments that require JavaScript to reveal.
export async function render(url) {
  const pages = await Promise.all(pageRoutes.map(async ({ path, load }) => ({
    path,
    Component: (await load()).default,
  })));
  return renderToString(
    <StaticRouter location={url}><App pages={pages} /></StaticRouter>,
  );
}
