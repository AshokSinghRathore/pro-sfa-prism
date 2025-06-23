import { SEND_EMAIL_BASE_URL } from "api/constant";
import axios from "axios";
type SendEmailData = {
  email: string;
  text: string;
  subject: string;
};

export const apiSendEmail = async (data: SendEmailData) => {
  return await axios.post(SEND_EMAIL_BASE_URL, data);
};
