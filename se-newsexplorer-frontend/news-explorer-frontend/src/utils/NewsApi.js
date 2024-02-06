import { apiURL, baseURL, processResponseServer } from "./constants";

function searchCards({ userInput, apiKey, fromDate, toDate, pageSize }) {
  return fetch(
    `${apiURL}/everything?q=${userInput}&apiKey=${apiKey}&from=${fromDate}&to=${toDate}&pageSize=${pageSize}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: apiKey,
      },
    }
  ).then(processResponseServer);
}

function getCards(token) {
  return fetch(`${baseURL}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processResponseServer);
}

function saveCard(token, cardData) {
  console.log({ token });
  return fetch(`${baseURL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardData),
  }).then(processResponseServer);
}

function deleteCard(id, token) {
  return fetch(`${baseURL}/articles/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(processResponseServer);
}

export { searchCards, getCards, saveCard, deleteCard };
