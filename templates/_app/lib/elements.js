const getTransitionName = (type = 'endEvent') => {
  let i,
    el = document.createElement('div'),
    transitions = {
      'transition': { endEvent: 'transitionend', prop: 'transition' },
      'OTransition': { endEvent: 'otransitionend', prop: '-o-transition' },
      'MozTransition': { endEvent: 'transitionend', prop: '-moz-transition' },
      'WebkitTransition': { endEvent: 'webkitTransitionEnd', prop: '-webkit-transition' }
    };

  for (i in transitions) {
    if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
      return transitions[i][type];
    }
  }

  return false;
}

const transitionProp = getTransitionName('prop')
const transitionEndEvent = getTransitionName('endEvent')

export const toggleNodeClass = node => className => event => {
  let hasTransition       = window.getComputedStyle(node)[`${transitionProp}Duration`] !== '0s',
      transitionModifier  = node.classList.contains(className)
        ? 'after'
        : 'before'

  if (hasTransition) {
    node.classList.add(`${className}--${transitionModifier}`)
    node.addEventListener('transitionend', function transitionEnd (event) {
      node.classList.remove(`${className}--${transitionModifier}`)
      node.removeEventListener('transitionend', transitionEnd)
    })
  }

  node.classList.toggle(className)
}