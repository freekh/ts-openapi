import api from './api'
import * as Qs from 'qs'

const datahub = api({
  baseURL: 'http://localhost:9000/v1',
  paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' })
})

const main = async () => {
  try {
    const from = new Date(2019, 0, 1, 22, 0).toISOString()
    const response = await datahub('/article/windows').get(['pp:123'], '1day')
    console.log(response.request.socket._httpMessage._header)
    console.log(response.data)
  } catch (e) {
    console.error(e)
  }
}

main()