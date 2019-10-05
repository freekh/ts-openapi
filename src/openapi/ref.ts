export type Ref = { $ref: string }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isRef(ref: any): ref is Ref {
  return !!ref.$ref
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resolve<T>(doc: any, refOr?: Ref | T): T | undefined {
  if (!refOr) {
    return refOr
  }
  if (isRef(refOr)) {
    const [refHash, ...parts] = refOr.$ref.split('/')
    if (refHash != '#') {
      throw Error(`Illegal ref ${refOr}: does not start with #`)
    } else {
      return parts.reduce((prev, curr) => {
        if (!prev[curr]) {
          throw Error(`Could not dereference part '${curr}' of reference ${refOr.$ref}`)
        }
        return prev[curr]
      }, doc) as T // TODO: check if type is correct
    }
  }
  return refOr // TODO: check if type is correct
}
