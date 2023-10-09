export const validateString = ({ text, length }) => {
  const textConverted = text ? new String(text).trim() : false;
  return textConverted && textConverted.length >= length
}
