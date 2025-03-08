globalThis.Shuang = {
  resource: {
    dict: {},
    dictHant: {},
    bopomofo: {},
    schemeList: {},
    scheme: {},
    keyboardLayoutList: {},
    keyboardLayout: {},
    emoji: {
      right: "✅",
      wrong: "❎",
    },
  },
  core: {
    model: {},
    current: {},
    order: {
      shengIndex: 0,
      yunIndex: 0,
    },
    history: [],
    keyboardLayout: {},
  },
  app: {
    setting: {
      config: {},
      reload() {},
    },
    importedJS: [],
    modeList: [],
    action: {},
  },
};
globalThis.$ = document.querySelector.bind(document);
globalThis.$$ = document.querySelectorAll.bind(document);
