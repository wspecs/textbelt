const SENDMAIL_TRANSPORT = {
  // This transport uses the local sendmail installation.
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
};

const SMTP_TRANSPORT = {
  // This is a Nodemailer transport. It can either be an SMTP server or a
  // well-known service such as Sengrid, Mailgun, Gmail, etc.
  // See https://nodemailer.com/transports/ and https://nodemailer.com/smtp/well-known/
  host: 'SENDER_HOST',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'SENDER_EMAIL',
    pass: 'SENDER_PASSWORD',
  },
};

module.exports = {
  transport: SMTP_TRANSPORT,
  mailOptions: {
    from: '"SENDER_NAME" <SENDER_EMAIL>',
  },
  debugEnabled: false,
};
