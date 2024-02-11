export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2"
    : "http://newsapi.org/v2";

///before publication change baseURL to https://nomoreparties.co/news/v2  newsapi.org/v2

export const apiURL = "https://nomoreparties.co/news/v2";

export const processResponseServer = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
};

export const apiKey = "6b3e60ceb5054d0483b14a97d3c9f6c9";
