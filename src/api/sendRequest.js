import axios from "axios";

const apiHost = "http://localhost:8080/api/tic-tac-toe/play";

const sendRequest = async (matchToken, matchData) => {
  const config = {
    headers: matchToken ? { Authorization: `Bearer ${matchToken}` } : undefined,
  };

  console.log(matchToken,matchData)

  const response = await axios.post(apiHost,matchData,config);

  if(response.status === 200){
    return response.data;
  } else {
    console.log(response)
  }

};

export default sendRequest;
