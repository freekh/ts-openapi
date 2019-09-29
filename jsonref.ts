
// TODO: rewrite
function jsonref(ob: any, opts: any = {}): any {
  if (typeof ob !== 'object') return ob
  var $ref = opts.$ref||'$ref', refs = opts.refs||{}, root = opts.root||'http://localhost/', vals: any[] = []
  var find = (url: any) => fetch(url.indexOf('http') ? root+url : url, opts.http).then(res => res.json())
  getRef(ob)

  return opts.lazy ? fixRef(ob) : Promise.all(vals).then(recs => {
    for (var r in refs) if (!isNaN(refs[r])) refs[r] = recs[refs[r]-1]
    return fixRef(ob)
  })
  
  function extRef(url: any) {
    var [url,ref] = url.split('#')
    ref = (ref && ref.length) ? ref : opts.frag
    var doc = (opts.find||find)(url).then((rec: any) => ref ? setRef('#'+ref,doc) : doc)
    return opts.deep ? doc.then(getRef) : doc
  }

  function setRef(ref: any, val: any=ob) {
    if (ref[0] != '#') return opts.lazy ? extRef(ref) : vals.push(extRef(ref))
    var keys = ref.substr(1).split(/[\.\/]/)
    if (!keys[0].length) keys.shift()
    while(val && keys.length) val = val[keys.shift()]
    return val
  }

  function getRef(ob: any={}, key?: any) {
    if (ob[$ref] && (!opts.keys || opts.keys.includes(key))
      && (!opts.path || RegExp(opts.path).test(ob[$ref])))
      if (!refs[ob[$ref]]) refs[ob[$ref]] = setRef(ob[$ref])
    else for (var i in ob) typeof ob[i] === 'object' && getRef(ob[i],isNaN(i as any) ? i : key)
    return ob
  }

  function fixRef(ob: any={}): any {
    if (ob[$ref]) return fixRef(refs[ob[$ref]]) || ob
    for (var k in ob) if (typeof ob[k] === 'object') ob[k] = fixRef(ob[k])
    return ob
  }
}

export default jsonref