import nodemailer from 'nodemailer'

export default ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'dc2a7b6687d57f',
      pass: '4973d20f33794f',
    },
  })

  const mailOptions = {
    to,
    text,
    subject,
    from: 'eregli@atsis.com.tr',
  }

  return transporter.sendMail(mailOptions)
}
