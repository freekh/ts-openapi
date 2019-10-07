export type Ref = { $ref: string }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isRef(ref: any): ref is Ref {
  return !!ref.$ref
}

export class RefStore {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private root: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(root: any) {
    this.root = root
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async resolve<T>(refOr: Ref | T): Promise<T | undefined> {
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
        }, this.root) as T // TODO: check if type is correct
      }
    }
    return refOr // TODO: check if type is correct
  }
}
