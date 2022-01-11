const fs = {
  readdirSync() {
    return ['123.md', '1234.md']
  },
  statSync() {
    return {
      isFile() {
        return true
      },
    }
  },
}

export default fs
