const toggleElementClass = (element, className) =>
  element.classList.toggle(className);

const removeElementClass = (element, className) =>
  element.classList.remove(className);

const clearElementContent = (element) => {
  /* eslint-disable-next-line no-param-reassign */
  element.innerHTML = "";
};

export default { toggleElementClass, removeElementClass, clearElementContent };
