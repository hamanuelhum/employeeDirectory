const get = (url, additionalHeaders) => {
  const options = {
    method: "GET",
    headers: {
      ...headers,
      ...additionalHeaders
    }
  };
  return fetch(url, options)
    .then(validateResponse)
    .then((r) => handleResponseSuccess(r));
};

const post = (url,body, additionalHeaders)=> {
  const options = {
    method: "POST",
    headers: {
      ...headers,
      ...additionalHeaders
    },
    body: JSON.stringify(body)
  };
  return fetch(url, options)
    .then(validateResponse)
    .then((r) => handleResponseSuccess(r));
};

const headers = {
  accept: "application/json",
  "content-type": "application/json"
};

const handleResponseSuccess = (response) => {
  return response.json().then((json) => json.data);
};

const validateResponse = async (response) => {
  if (!response.ok) {
    return new Promise( (resolve, reject) => {
      if (isJson(response)) {
        const json = response.json();
        reject(json?.error ?? json);
      } else {
        reject(response.status);
      }
    });
  }
  return response;
};

const isJson = (response) => {
  const contentType = response.headers.get("Content-Type");
  return contentType ? contentType.includes("application/json") : false;
};

export default { get, post };
