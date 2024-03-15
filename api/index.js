async function loadServer() {
  const serverModule = await import('../dist/angular-seo-course-front/server/main');
  return serverModule.app;
}

export default loadServer().then(app => app());
