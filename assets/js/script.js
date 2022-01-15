window.addEventListener('DOMContentLoaded', (event) => {
  function ticketArrordion({parent} = {}) {
    if (!parent) return
    
    const accrodion = document.querySelector(parent)
    const accordionItems = accrodion.children
    const accordionItemsSiblings = [...accordionItems].map(item => item)
    const accordionItemsSiblingsMainClassName = '.' + accordionItemsSiblings[0].children[0].className
    const accordionItemsSiblingsSubjectClassName = '.' + accordionItemsSiblings[1].children[1].className

    const styleForHiddenItem = `
      height: 0px;
      transition: height 0.4s ease-out;
      transform: scaleY(0);
    `

    const styleForActiveItem = `
      transform: scaleY(1);
      transform-origin: top;
      transition: transform 0.4s ease;
      height: auto;
    `

    // hide all accordion items except the first one and make the function reusable
    function hideAllSubjectClassNameItems({accordionIndex = 0} = {}) {
      const selector = document.querySelectorAll(accordionItemsSiblingsSubjectClassName)

      selector.forEach((item, index) => index !== accordionIndex ? item.style = styleForHiddenItem : item.style = styleForActiveItem)
    }
    hideAllSubjectClassNameItems()
    // make the accordion visible
    accrodion.style.display = 'block'

    // perform the accordion
    // take all of the accordion main stuff and addEventListener
    document.querySelectorAll(accordionItemsSiblingsMainClassName).forEach((item, index) => item.addEventListener('click', e => {
      // then hide each item 
      hideAllSubjectClassNameItems({accordionIndex: index})
    }))
  }

  ticketArrordion({
    parent: '.booking-accrodion'
  })
  
});