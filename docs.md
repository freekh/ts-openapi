```ts
import api, { get, param, DateFormat } from '@tapi/pkgs/org/test'
import axios from 'tapi@/axios' // or fetch or request

val testApi1 = api(URL, axios({}))
val testApi = api(URL, axios({}), { formatters: [
  (date: DateFormat, get, '/things/{thing}') => date as String,
  (date: DateFormat, param('id'): Param<Ids>, '/things/{thing}') => date as String,
  (date: DateFormat) => new Date(date),
  (date: DateTimeFormat) => new Date(date),
]})

testApi.operations.getThing('id')
testApi.path('/things/{thing}').get('id')
```