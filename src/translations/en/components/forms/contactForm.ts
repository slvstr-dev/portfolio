export const contactForm = {
  fields: {
    subject: {
      label: 'Subject',
      placeholder: "Subject, e.g. 'Network meeting'",
    },
    body: {
      label: 'Message',
      placeholder: 'Your message',
      errors: {
        required: 'Message is required',
      },
    },
  },
  buttons: {
    submit: 'Send message',
  },
  subject: 'Message from slvstr.dev',
};
