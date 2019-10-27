```ts
import api, { get, param, DateFormat } from '@tapi/pkgs/org/test'
import axios from '@tapi/tapi-axios' // or fetch or request

val testApi1 = api(URL, axios({ token: TOKEN }))
val testApi = api(URL, axios({}), { formatters: [
  (date: DateFormat, get, '/things/{thing}') => date as String,
  (date: DateFormat, param('id'): Param<Ids>, '/things/{thing}') => date as String,
  (date: DateFormat) => new Date(date),
  (date: DateTimeFormat) => new Date(date),
]})

testApi.operations.getThing('id')
testApi.path('/things/{thing}').get('id')
```
<yarn + sh> | <npm + sh> | <yarn + zsh> |  

What does this do: <small screencast>

curl https://typeapi.com/try | sh | echo "This PACKAGE can only be downloaded once (by you):\nNPM_REGISTRY_yarn add $PACKAGE\nor\nnpm add $PACKAGE"


curl https://typeapi.com/example | sh | tar xvfz
url > http://localhost:9000/openapi.yaml



TODOs:
https://modeling-languages.com/modeling-web-api-comparing/


API Blueprint
OpenAPI/Swagger 1.0 - 1.2
OpenAPI/Swagger 2.0 JSON
OpenAPI/Swagger 2.0 YAML
WADL - W3C 2009
WSDL 1.1 - W3C
Google Discovery
RAML 0.8 - 1.0
I/O Docs - Mashery
HAR 1.2
Postman Collection 1.0 - 2.0, 2.1
APIMATIC Format
Mashape
OpenAPI Spec 3.0 (JSON)
OpenAPI Spec 3.0 (YAML)
Insomnia Export Format 3.0 (JSON)
Insomnia Export Format 3.0 (YAML)