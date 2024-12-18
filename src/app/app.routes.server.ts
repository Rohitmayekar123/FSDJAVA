import { RenderMode, ServerRoute } from '@angular/ssr';


export const serverRoutes: ServerRoute[] = [
  {
    path: '', // Root route
    renderMode: RenderMode.Prerender
  },
  {
    path: 'meeting', // Schedule meeting route
    renderMode: RenderMode.Prerender
  },
  {
    path: 'dashboard', // dashboard route
    renderMode: RenderMode.Prerender
  },
  {
    path: 'register', // register route
    renderMode: RenderMode.Prerender
  },
  {
    path: 'view-meetings', // View meetings route
    renderMode: RenderMode.Prerender
  },
  {
    path: 'logout', // View meetings route
    renderMode: RenderMode.Prerender
  },
  {
    path: '**', // Catch-all for undefined routes
    renderMode: RenderMode.Prerender
  }
];
