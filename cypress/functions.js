// eslint-disable-next-line import/prefer-default-export
export function randomPassword(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += `${characters.charAt(
      Math.floor(Math.random() * charactersLength),
    )}*1`;
  }
  return result;
}

export function greetingMessage() {
  const currentHour = new Date().getHours();
  if (currentHour >= 4 && currentHour < 12) return 'Good Morning!';
  if (currentHour >= 12 && currentHour <= 17) return 'Good Afternoon!';
  if (currentHour > 17 || currentHour < 4) return 'Good Evening!';
  return 'Good Day!';
};

export function memberId() {
  const id = location.pathname.split('/').pop()
  return id;
}
