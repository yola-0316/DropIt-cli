const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
const {blue, black} = require('chalk')
const log = console.log

const move = () => log(black.bgCyan('move, 该功能暂未实现'))

const copy = () => log(black.bgCyan('copy, 该功能暂未实现'))

const compress = (src) => {
  const output = fs.createWriteStream(__dirname + '/example.zip')
  const archive = archiver('zip', {
    zlib: {level: 9},
  })

  // listen for all archive data to be written
  // 'close' event is fired only when a file descriptor is involved
  output.on('close', function () {
    console.log(archive.pointer() + ' total bytes')
    console.log('archiver has been finalized and the output file descriptor has closed.')
  })

  // This event is fired when the data source is drained no matter what was the data source.
  // It is not part of this library but rather from the NodeJS Stream API.
  // @see: https://nodejs.org/api/stream.html#stream_event_end
  output.on('end', function () {
    console.log('Data has been drained')
  })

  // good practice to catch warnings (ie stat failures and other non-blocking errors)
  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      // log warning
    } else {
      // throw error
      throw err
    }
  })

  // good practice to catch this error explicitly
  archive.on('error', function (err) {
    throw err
  })

  log(blue(src), process.cwd())

  archive.pipe(output)

  archive.append(fs.createReadStream(path.join(process.cwd(), src)), {name: 'readme.md'})
}

const extract = () => log(black.bgCyan('extract, 该功能暂未实现'))

const rename = () => log(black.bgCyan('rename, 该功能暂未实现'))

const remove = () => log(black.bgCyan('delete, 该功能暂未实现'))

const split = () => log(black.bgCyan('split, 该功能暂未实现'))

const join = () => log(black.bgCyan('join, 该功能暂未实现'))

const encrypt = () => log(black.bgCyan('encrypt, 该功能暂未实现'))

const decrypt = () => log(black.bgCyan('decrypt, 该功能暂未实现'))

const openWith = () => log(black.bgCyan('openWith, 该功能暂未实现'))

const print = () => log(black.bgCyan('print, 该功能暂未实现'))

const upload = () => log(black.bgCyan('upload, 该功能暂未实现'))

const sendByMail = () => log(black.bgCyan('sendByMail, 该功能暂未实现'))

const createGallery = () => log(black.bgCyan('createGallery, 该功能暂未实现'))

const createList = () => log(black.bgCyan('createList, 该功能暂未实现'))

const createPlaylist = () => log(black.bgCyan('createPlaylist, 该功能暂未实现'))

const createShortcut = () => log(black.bgCyan('createShortcut, 该功能暂未实现'))

const copyToClipboard = () => log(black.bgCyan('copyToClipboard, 该功能暂未实现'))

const changeProperties = () => log(black.bgCyan('changeProperties, 该功能暂未实现'))

const ignore = () => log(black.bgCyan('ignore, 该功能暂未实现'))

module.exports = {
  move,
  copy,
  compress,
  extract,
  rename,
  delete: remove,
  split,
  join,
  encrypt,
  decrypt,
  openWith,
  print,
  upload,
  sendByMail,
  createGallery,
  createList,
  createPlaylist,
  createShortcut,
  copyToClipboard,
  changeProperties,
  ignore,
}
