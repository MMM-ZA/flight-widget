const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
 app.get('/flight',(req,res) => {
   const options ={
    url:'https://82961a53-5a29-4e2d-b07d-62e1aac3398f-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/flight/collections/departures'
    headers: {
      accept: 'application/json',
      'X-Cassandra-Token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiJjYzJkN2I4ZS00ZTdkLTRlZjktOWUyNC01NmJmZDhkMDgxYTgiLCJleHAiOjE2NzMzOTIzODAsIm5iZiI6MCwiaWF0IjoxNjczMzU2Mzg2LCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiZGFiZWE0OWMtMmZmOS00YmFkLWE0ODktZGYzNjZhNTRmYzhmIiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjczMzU2MzgwLCJzZXNzaW9uX3N0YXRlIjoiZmQ5N2M1ZGYtZTQyOS00ZjFlLThkYzEtODA5NzBlODUzODIxIiwiYWNyIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwibmFtZSI6Ik1ha29tYSBNYWJpbG8iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtYWtvbWE0NEBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiTWFrb21hIiwiZmFtaWx5X25hbWUiOiJNYWJpbG8iLCJlbWFpbCI6Im1ha29tYTQ0QGdtYWlsLmNvbSJ9.JvQ2ccxec6qGfV_ocBJWvphKIYD99ikSwYf3UdevGGf0xCcjeSlyapf3VvSmT9ZeLd6G06rGeywJ2_0o6JXC04qaAwF_NW3KHKp-2UsR8u3ZAi0i1MK264-pac_GyzDqdsE9WoysQqmhsAlNUKeTBZVO8dH-kr26K_UBfFiboPa2ypLCRqrBpBtNx-2jiDfjbanyGGECMhyiYCtNgFNDQC76U0GOIB8XPkzz48DeVPG-MN1l_Y1WuZd-7p2I4RUT0afWFgh-AnkTuxXUT-pGf2Spc9E5_5pG9e130DxnSc6Xb303TOshINj8ldrJFT4b-27_VO962w7miqCeJDl82A'
    }

  }
  axios.request(options).then(response => {
    console.log(response.data)
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })


 })



app.listen(PORT,() => console.log('running on port' + PORT))
