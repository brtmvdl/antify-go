const login = ({ user = null, password = null, }) => ({ token: Date.now().toString(), })

const createuser = ({ token = null, user = null, password = null, host = null, }) => ({})

const describeuser = ({ token = null, user = null, host = null, }) => ({})

const grantuser = ({ token = null, perm = null, user = null, host = null, }) => ({})

const revokeuser = ({ token = null, perm = null, user = null, host = null, }) => ({})

const deleteuser = ({ token = null, user = null, host = null, }) => ({})

const deleteallusers = ({ token = null }) => ({})

const listallusers = ({ token = null }) => ({})

const createdir = ({ token = null, dirname = null, recursive = null, public = null, }) => ({})

const listdir = ({ token = null, dirname = null, }) => ({})

const publicdir = ({ token = null, dirname = null, readonly = null, }) => ({})

const privatedir = ({ token = null, dirname = null, }) => ({})

const deletedir = ({ token = null, dirname = null, force = null, }) => ({})

const createfile = ({ token = null, filename = null, recursive = null, }) => ({})

const listfile = ({ token = null, filename = null, hidden = null, }) => ({})

const readfile = ({ token = null, filename = null, }) => ({})

const writetext = ({ token = null, filename = null, content = null, }) => ({})

const writefile = ({ token = null, filename = null, }) => ({})

const deletefile = ({ token = null, filename = null, force = null, }) => ({})

module.exports = {
  login,
  createuser,
  describeuser,
  grantuser,
  revokeuser,
  deleteuser,
  deleteallusers,
  listallusers,
  createdir,
  listdir,
  publicdir,
  privatedir,
  deletedir,
  createfile,
  listfile,
  readfile,
  writetext,
  writefile,
  deletefile,
}
