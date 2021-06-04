import axios from "axios"

const getOrders = () => axios.get('http://localhost:8080/orders')

export const userApi = {
  getOrders
}

