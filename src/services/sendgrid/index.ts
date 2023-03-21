import qs from 'qs';
import { Linking } from 'react-native';

export const sendEmail = async (
  name: string,
  phone: string,
  email: string,
  message: string
) => {
  let url = `mailto:info@redpositive.in`;

  const query = qs.stringify({
    subject: 'Message for Red Positive Contact',
    body: `Hi there,

      This is ${name}.

      ${message}

      Here are my contact details.
      Mobile Number: ${phone}
      Email: ${email}

      Thanks & Regards,
      ${name}
    `,
  });

  if (query.length) {
    url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('Provided URL can not be handled');
  }

  return await Linking.openURL(url);
};
