const registerShutdown = (callback: () => void) => {
  window.addEventListener("beforeunload", () => {
    callback();
  });
};

export default registerShutdown;
