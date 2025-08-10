import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

// Initialize EmailJS with your public key
emailjs.init(EMAIL_CONFIG.EMAILJS.PUBLIC_KEY);

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: EMAIL_CONFIG.PERSONAL.NAME,
      reply_to: data.email,
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      EMAIL_CONFIG.EMAILJS.SERVICE_ID,
      EMAIL_CONFIG.EMAILJS.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.EMAILJS.PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}; 