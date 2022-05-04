function ofLayouts(layouts) {
  return (layout) => {
    return layouts[layout] || layouts.default;
  };
}

export default ofLayouts;
