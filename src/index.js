import app from './app'

async function main() {
  const port = app.get('port')
  await app.listen(port)
  console.log(`server running en port ${port}`)
}

main()
