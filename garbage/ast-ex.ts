type Paths = "dfas"
const allPaths = []
function isPath(p: string): p is Paths {
  return allPaths.indexOf(p) !== -1
}