import RequireContext = __WebpackModuleApi.RequireContext;

export const CMP_SELECTOR = "[data-cmp-is]";
const cmpModulesCtx: RequireContext = require.context(
  "../components",
  true,
  /\.(ts|js)$/,
  "lazy"
);
export const componentInstances: any[] = [];
const dynamicModulesImporter = (componentReference: HTMLElement): void => {
  const classHandlerName =
    componentReference.dataset.cmpIs?.toLocaleLowerCase() as string;
  const cmpCtx = cmpModulesCtx.keys();
  const matched = cmpCtx.filter(
    (path) =>
      path.toLocaleLowerCase().includes(`/${classHandlerName}.ts`) ||
      path.toLocaleLowerCase().includes(`/${classHandlerName}.js`)
  );
  if (matched.length) {
    cmpModulesCtx(matched[0])
      .then((module) => {
        if (!module.default) {
          return;
        }
        const CmpModule = module.default;
        componentInstances.push({
          name: classHandlerName,
          componentRef: componentReference,
          instance: new CmpModule(componentReference),
        });
      })
      .catch(() => {
        // logger.error();
      });
  }
};
const staticImporter = (): void => {
  const $cmpSelector = document.querySelectorAll(CMP_SELECTOR);
  $cmpSelector.forEach((cmpRef: HTMLElement) => {
    dynamicModulesImporter(cmpRef);
  });
};
document.addEventListener("DOMContentLoaded", staticImporter);
