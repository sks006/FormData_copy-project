//seamkabir07@gmail.com
//pass: D6F0CE20B5E2954B192BEDD189776E3BEBAC

const form = document.querySelector('form')
const fullName = document.getElementById('name')
const emailInput = document.getElementById('Email')
const phoneNumber = document.getElementById('Phone Number')
const subject = document.getElementById('Subject')
const message = document.getElementById('textarea')

function sendEmail() {
  console.log('Attempting to send email...')

  const bodyMessage = `Full Name: ${fullName.value} \n Email: ${emailInput.value} \n Phone Number: ${phoneNumber.value}\n Subject: ${subject.value}\n Message: ${message.value}`

  console.log('Body message:', bodyMessage)

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'seamkabir07@gmail.com',
    Password: 'D6F0CE20B5E2954B192BEDD189776E3BEBAC',
    To: 'seamkabir07@gmail.com',
    From: emailInput.value,
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message === 'OK') {
      console.log('Email sent successfully!')
      Swal.fire({
        title: 'Success',
        text: 'Message sent Successfully',
        icon: 'success',
      })
    } else {
      console.log('Email not sent successfully:', message)
      alert('Error occurred while sending email')
    }
  })
}
function checkInput() {
  const items = document.querySelectorAll('.item')
  for (const item of items) {
    if (item.value === '') {
      item.classList.add('error')
      item.parentElement.classList.add('error')
    }
    item.addEventListener('keyup', () => {
      if (item.value !== '') {
        item.classList.remove('error')
        item.parentElement.classList.remove('error')
      } else {
        item.classList.add('error')
        item.parentElement.classList.add('error')
      }
    })
  } // This closing parenthesis was missing
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkInput()
  sendEmail()
})
