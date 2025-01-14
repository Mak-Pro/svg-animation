import axios from "axios";

export async function get(endpoint: string, params?: { [key: string]: string }) {
  const url = `https://carefulai--${process.env.NEXT_PUBLIC_MODAL_APP_NAME}-fastapi-app${process.env.NEXT_PUBLIC_ENVIRONMENT === "dev" ? "-dev" : ""}.modal.run/${endpoint}`;
  
  return await axios.get(url, { 
    params: params,
  });
}