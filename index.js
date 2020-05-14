const birthdayButton = document.querySelector('.birthday__button')
const birthdayMessage = document.querySelector('.birthday__message')

let isShowingMessage = false
birthdayButton.addEventListener('click', () => {
  if(!isShowingMessage){
    birthdayMessage.className = 'birthday__message birthday__message--show'
    isShowingMessage = true
  } else {
    birthdayMessage.className = 'birthday__message birthday__message--hide'
    isShowingMessage = false
  }
})