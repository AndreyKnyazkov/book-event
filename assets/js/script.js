window.addEventListener('DOMContentLoaded', (event) => {

  const svgTicket = `<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.8">
      <path d="M28.8727 3.51033L27.1037 3.07967C25.8723 4.4764 23.9392 5.10627 22.1024 4.65918C20.266 4.21176 18.839 2.76313 18.388 0.956366L16.619 0.525709C16.6051 0.522486 16.5913 0.520874 16.5777 0.520874C16.4958 0.520874 16.4191 0.577607 16.3991 0.659483L15.1633 5.73388L16.5316 6.06719C16.9217 6.16229 17.1608 6.55555 17.0658 6.94559C16.9845 7.27793 16.6873 7.50067 16.3598 7.50067C16.3028 7.50067 16.2451 7.4939 16.187 7.48004L14.819 7.14674L11.4959 20.7901C11.4814 20.8491 11.5001 20.8968 11.5181 20.9268C11.5362 20.9564 11.57 20.9954 11.629 21.0096L23.8834 23.9946C23.9427 24.0094 23.9904 23.9904 24.0201 23.9723C24.0497 23.9543 24.0884 23.9204 24.1029 23.8614L27.426 10.2181L26.076 9.88927C25.686 9.79418 25.4468 9.40091 25.5416 9.01087C25.6367 8.62083 26.0306 8.38133 26.42 8.47674L27.7703 8.80554L29.0062 3.73081C29.0207 3.67182 29.002 3.62412 28.9839 3.59414C28.9659 3.56352 28.9317 3.52483 28.8727 3.51033ZM20.9504 7.89168C20.8695 8.22402 20.5719 8.44676 20.2444 8.44676C20.1874 8.44676 20.1297 8.44 20.072 8.42613L18.3062 7.99612C17.9161 7.90103 17.6769 7.50776 17.7717 7.11772C17.8668 6.72768 18.2601 6.48818 18.6501 6.58327L20.4159 7.01328C20.806 7.10838 21.0455 7.50164 20.9504 7.89168ZM24.8353 8.8381C24.7541 9.17044 24.4569 9.39318 24.1294 9.39318C24.0723 9.39318 24.0146 9.38641 23.9566 9.37255L22.1908 8.94221C21.801 8.84712 21.5619 8.45386 21.6566 8.06382V8.06349C21.7517 7.67345 22.1443 7.43427 22.5354 7.52936L24.3012 7.9597C24.6909 8.05479 24.9301 8.44805 24.8353 8.8381Z" fill="#BB6ADF"/>
      <path d="M9.73023 20.3599L13.0046 6.9154L12.8245 6.95924C12.7664 6.97342 12.7087 6.97987 12.6517 6.97987C12.3242 6.97987 12.027 6.75713 11.9457 6.42479C11.851 6.03475 12.0901 5.64148 12.4799 5.54639L13.3921 5.32397L13.6335 4.33243L12.612 0.138681C12.5978 0.0796912 12.5592 0.0455222 12.5292 0.0274707C12.4992 0.00909689 12.4509 -0.0089548 12.3925 0.00490616V0.00522863L10.6235 0.435886C10.1725 2.24265 8.74514 3.69128 6.90904 4.1387C5.07327 4.58611 3.13919 3.95592 1.90782 2.55919L0.138772 2.98985C0.0797819 3.00403 0.0456131 3.04271 0.0275616 3.07269C0.0095101 3.10267 -0.00918613 3.15038 0.00499718 3.20937L1.2412 8.28409L2.59152 7.95529C2.98091 7.86085 3.37482 8.09938 3.46991 8.48943V8.48975C3.56501 8.87979 3.3255 9.27305 2.93546 9.36814L1.58515 9.69694L4.90855 23.34C4.92274 23.399 4.96142 23.4331 4.9914 23.4512C5.02138 23.4693 5.07005 23.4876 5.1284 23.4734L10.2466 22.2266C10.1422 22.1193 10.0458 22.0026 9.96587 21.8711C9.68768 21.4143 9.6042 20.8776 9.73023 20.3599ZM6.82072 8.42141L5.0549 8.85174C4.99688 8.86593 4.93918 8.87237 4.88212 8.87237C4.55462 8.87237 4.25741 8.64963 4.17618 8.31729C4.17618 8.31729 4.17618 8.31729 4.17618 8.31697C4.08141 7.92693 4.32059 7.53366 4.71031 7.43857L6.47613 7.00824C6.86617 6.91282 7.25944 7.15233 7.35485 7.54237V7.54269C7.44962 7.93305 7.21044 8.32632 6.82072 8.42141ZM8.76706 7.92628C8.43955 7.92628 8.14235 7.70354 8.06112 7.3712C7.96602 6.98116 8.20553 6.58789 8.59557 6.4928L10.3614 6.06279C10.7501 5.96738 11.1447 6.20688 11.2398 6.59724C11.3349 6.98728 11.0954 7.38055 10.7053 7.47564L8.93951 7.90565C8.88181 7.91951 8.82411 7.92628 8.76706 7.92628Z" fill="#BB6ADF"/>
    </g>
  </svg>`
  const stepNumberNumber = document.querySelectorAll('.booking-accrodion-item__parent__number')
  const stepNumberTitle = document.querySelectorAll('.booking-accrodion-item__parent__title')
  const successStepStyle = 'rgb(22, 150, 136)'
  const inProcessStepStyle = 'rgb(122, 122, 122)'

  // 
  const phoneSelector = document.querySelector('#acc-number')
  const phoneMask = "+9 (999) 999 99-99"
  const phoneMaskCreate = new Inputmask(phoneMask)

  phoneMaskCreate.mask(phoneSelector)

  // prevent default the form
  document.querySelector('.booking-accrodion-item__children__form').addEventListener('submit', e => {
    e.preventDefault()
  })

  let eventBookingData = {
    tickets: {
      
    },
    registration: {
      email: '',
      phone: '',
      comments: ''
    },
    unlockedItems: 1
  }

  function manageFormRegistrationData(param, content) {
    eventBookingData.registration = {
      ...eventBookingData.registration,
      [param]: content
    }
  }

  function setUnclockedItems(number) {
    eventBookingData.unlockedItems = number
  }

  function changeStepColor({selector, status} = {}) {
    status === 'success' ? selector.style.color = successStepStyle : selector.style.color = inProcessStepStyle
  }

  function setTotalTickets(number = 0) {
    const ticketsNumberField = document.querySelector('.booking-accrodion-item__parent__totaltickets')

    if (number === 0) {
      ticketsNumberField.textContent = ''
      changeStepColor({
        selector: stepNumberNumber[0],
        status: ''
      })
      changeStepColor({
        selector: stepNumberTitle[0],
        status: ''
      })
      return
    } 

    ticketsNumberField.textContent = `${number} tickets`

    changeStepColor({
      selector: stepNumberNumber[0],
      status: 'success'
    })
    changeStepColor({
      selector: stepNumberTitle[0],
      status: 'success'
    })
  }

  function changeThirdStepTicketsContent({hideAllSubjectClassNameItems } = {}) {
    const ticketsFinalBlock = document.querySelector('.booking-accrodion-item__children__tickets')
    ticketsFinalBlock.innerHTML = ''

    for (let key in eventBookingData.tickets) {
      if (eventBookingData.tickets[key].amount > 0) {

        ticketsFinalBlock.innerHTML += `
                  <div class="booking-accrodion-item__children-ticket">
                  <div class="booking-accrodion-item__children-ticket__date">
                    ${eventBookingData.tickets[key].content}
                  </div>
                  <div class="booking-accrodion-item__children-ticket__ticket">
                    <span>${eventBookingData.tickets[key].amount}</span>
                    ${svgTicket}
                  </div>
                </div>
                `
        
        console.log(typeof(hideAllSubjectClassNameItems));
        if (typeof(hideAllSubjectClassNameItems) === 'function') hideAllSubjectClassNameItems()

      }
    }
  }

  
  function ticketsCounter() {
    const ticketCounterPlus = document.querySelectorAll('.booking-accrodion-item__children-info__counter__plus')
    const ticketCounterMinus = document.querySelectorAll('.booking-accrodion-item__children-info__counter__minus')
    const ticketCounterNumber = document.querySelectorAll('.booking-accrodion-item__children-info__counter__number span')
    const ticketContent = document.querySelectorAll('.booking-accrodion-item__children--info__date')

    function perfromCounter({counterSelector, counterActionCalc} = {}) {
      const minusNullSvg = `
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H32C33.933 0.5 35.5 2.067 35.5 4V32C35.5 33.933 33.933 35.5 32 35.5H4C2.067 35.5 0.5 33.933 0.5 32V4Z" fill="" stroke="#EDEDED"></path>
          <path d="M8 16.8889H28V19.1111H8V16.8889Z" fill="#C7C7C7"></path>
        </svg>
      `
      const minusNormalSvg = `
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H32C33.933 0.5 35.5 2.067 35.5 4V32C35.5 33.933 33.933 35.5 32 35.5H4C2.067 35.5 0.5 33.933 0.5 32V4Z" fill="#45ABA0" stroke="#EDEDED"></path>
          <path d="M8 16.8889H28V19.1111H8V16.8889Z" fill="white"></path>
        </svg>
      `

      function manageTicketsData(index) {
        let ticketCounterCurrent = ticketCounterNumber[index]
        let ticketContentCurrent = ticketContent[index]

        eventBookingData.tickets = {
          ...eventBookingData.tickets,
          [index]: {
            amount: ticketCounterCurrent.textContent,
            content: ticketContentCurrent.innerHTML.trim()
          },
        }
      }

      counterSelector.forEach((item, index) => item.addEventListener('click', e => {
        let ticketCounterCurrent = ticketCounterNumber[index]        
        
        if (counterActionCalc === 'increment') {
          ticketCounterCurrent.textContent = +ticketCounterCurrent.textContent + 1
          document.querySelectorAll('.booking-accrodion-item__children-info__counter__minus')[index].innerHTML = minusNormalSvg

          manageTicketsData(index)  
          
          if (eventBookingData.unlockedItems <= 2) {
            setUnclockedItems(2)

          }
          // if contact details was filled out
          console.log(stepNumberTitle[1])
          if (stepNumberTitle[1].style.color === successStepStyle) {
            setUnclockedItems(3)
            console.log('3')
          }
          changeThirdStepTicketsContent()
        }

        if (counterActionCalc === 'decrement') {
          if (ticketCounterCurrent.textContent === '0') return

          ticketCounterCurrent.textContent = +ticketCounterCurrent.textContent - 1
          
          if (ticketCounterCurrent.textContent === '0') document.querySelectorAll('.booking-accrodion-item__children-info__counter__minus')[index].innerHTML = minusNullSvg
          
          manageTicketsData(index)
          
          // if we have three empty nulls set unlocked accordion items to one and make the things empty
          let counter = 0; 
          ticketCounterNumber.forEach(item => {
            if (item.textContent === '0') {
              counter++
              if (counter === counterSelector.length) {
                setTotalTickets(0)

                setUnclockedItems(1)
                console.log(eventBookingData.unlockedItems);
              }
            }
          })

          changeThirdStepTicketsContent()
        }

        let totalTickets = 0

        for (let key in eventBookingData.tickets) {
          totalTickets += +eventBookingData.tickets[key].amount
        }

        setTotalTickets(totalTickets)

      }))
    }

    perfromCounter({
      counterSelector: ticketCounterPlus,
      counterActionCalc: 'increment'
    })
    perfromCounter({
      counterSelector: ticketCounterMinus,
      counterActionCalc: 'decrement'
    })
  }

  ticketsCounter()

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
      let indexForUnlockedItems = index + 1
      
      console.log('index for items', indexForUnlockedItems);
      console.log('unlocked items', eventBookingData.unlockedItems);
      if (indexForUnlockedItems <= eventBookingData.unlockedItems) {
        hideAllSubjectClassNameItems({accordionIndex: index})
      }
      


    }))

    // additional code

    function processedButton() {
      const processedButtons = document.querySelectorAll('.proceed-button')

      

      processedButtons.forEach((item, i) => {
        item.addEventListener('click', e => {
          e.preventDefault()

          // the first processed button
          if (i === 0) {            
            // pass there a function for changing current index
            changeThirdStepTicketsContent({
              hideAllSubjectClassNameItems: () => hideAllSubjectClassNameItems({accordionIndex: i + 1})
            })
          }
          // the second proceed button
          if (i === 1) {
            const emailInput = document.getElementById('acc-name')
            const phoneInput = document.getElementById('acc-number')
            const textareaInput = document.getElementById('acc-number')
            const emailChecker = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (emailChecker.test(emailInput.value) && phoneInput.value.indexOf('_') === -1) {
              emailInput.style.border = "1px solid #DCDBDB"
              phoneInput.style.border = "1px solid #DCDBDB"

              // set unlocked items
              setUnclockedItems(3)

              changeStepColor({
                selector: stepNumberNumber[1],
                status: 'success'
              })
              changeStepColor({
                selector: stepNumberTitle[1],
                status: 'success'
              })

              manageFormRegistrationData('email', emailInput.value)
              manageFormRegistrationData('phone', phoneInput.value)
              manageFormRegistrationData('comments', textareaInput.value)

              hideAllSubjectClassNameItems({accordionIndex: i + 1})
            } else {
              emailInput.style.border = "1px solid red"
              phoneInput.style.border = "1px solid red"

              changeStepColor({
                selector: stepNumberNumber[1],
                status: ''
              })
              changeStepColor({
                selector: stepNumberTitle[1],
                status: ''
              })

              // set unlocked items
              setUnclockedItems(2)
            }
          }
        })
      })
    }
  
    processedButton()

  }

  ticketArrordion({
    parent: '.booking-accrodion'
  })  

});