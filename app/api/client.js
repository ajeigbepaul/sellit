import {create} from 'apisauce'

const apiClient = create({
  baseURL: "http://192.168.7.137:9000",
});

export default apiClient