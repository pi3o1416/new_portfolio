

const form = document.getElementById("contactForm")
const EMAIL_ID = "mmonir.m.29@gmail.com"

form.onsubmit = (event) => {
    event.preventDefault()
    const form_data = new FormData(form)
    const subject = form_data.get("subject")
    const body = form_data.get("body")
    window.location.href = 'mailto:'+EMAIL_ID+'?subject='+subject+'&body='+body;
}
