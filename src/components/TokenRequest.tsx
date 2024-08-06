import { useState, FC } from "react";

import axios from "axios"

import { client_id, client_secret } from '../secrets.json';

const TokenRequest: FC<{
  setToken: React.Dispatch<React.SetStateAction<string>>,
  apiError: boolean,
}> = ({ setToken, apiError }) => {

  const [requestError, setRequestError] = useState(false)

  const requestTokenHandler = () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials')
    params.append('client_id', client_id)
    params.append('client_secret', client_secret)
    axios.post('https://accounts.spotify.com/api/token', params)
      .then(({ data }) => {
        setToken(() => data.access_token);
        setRequestError(() => false)
      })
      .catch(() => setRequestError(() => true))
  }

  return (
    <div className="mb-2">
      {apiError && (
        <p>{"API Error. Need a new token?"}</p>
      )}
      <button className="btn btn-primary" onClick={requestTokenHandler} >{"Request new Token"}</button>
      {requestError && (
        <p>{"Token Request Error"}</p>
      )}
    </div>
  );
};

export default TokenRequest;