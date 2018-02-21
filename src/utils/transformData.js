module.exports = {
  groupBy (data, field) {
    let tranformedData = data.map(value => value[field]).reduce((result, current) => {
      if (!result.includes(current)) {
        let child = data.filter(item => item[field] === current)
        let parent = child[0]
        parent.child = child
        result.push(parent)
      }
      return result
    }, [])
    return tranformedData
  }
}
