import nodemailer from 'nodemailer'

export default ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: +process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_AUTH_USER,
      pass: process.env.EMAIL_AUTH_PASS,
    },
  })

  const mailOptions = {
    to,
    html,
    subject,
    from: 'eregli@atsis.com.tr',
  }

  return transporter.sendMail(mailOptions)
}
