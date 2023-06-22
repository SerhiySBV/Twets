import axios from "axios";

export async function getAllUsers() {
  const response = await axios.get(
    "https://648f329a75a96b664444d30b.mockapi.io/users/users"
  );
  return response.data;
}

export async function updateUser (data, id) {
    axios.put(`https://648f329a75a96b664444d30b.mockapi.io/users/users/${id}`,
        data
      )
           .catch((error) => console.log(error))
}