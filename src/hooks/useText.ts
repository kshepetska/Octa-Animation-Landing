import text from "text.config.json";

export const useText = (key?: string) => {
  const string = JSON.stringify(text);

  const parsedText = JSON.parse(string);

  if (key) {
    return parsedText[key];
  }

  return parsedText;
};
