const path = require('path')
const fs = require('fs')
const https = require('https')
const assert = require('assert/strict')

const sourceUrl = 'https://unpkg.com/basscss@7.1.1/css/basscss.min.css'

const localFileName = 'basscss@7.1.1.min.css'
const localPath = path.join(__dirname, localFileName)
const localBasscss = fs.readFileSync(localPath, { encoding: 'utf-8' })

https
  .get(sourceUrl, res => {
    let sourceBasscss = ''

    res.on('data', chunk => {
      sourceBasscss += chunk
    })

    res.on('end', () => {
      try {
        assert.strictEqual(localBasscss.trim(), sourceBasscss.trim())
        console.log(
          '✅ Test passed! The local Basscss@7.1.1 file is equal to the source Basscss@7.1.1 file.'
        )
      } catch (e) {
        console.error(e.message)
      }
    })
  })
  .on('error', e => {
    console.error(e)
  })
