var Hamming = function() {}

Hamming.prototype.compute = function(str1, str2) {
  if (str1.length !== str2.length) {
    throw new Error('DNA strands must be of equal length.')
  }
  var count = 0
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      console.log('which letter?', str1[i])
      console.log('which other letter?', str2[i])
      count++
    }
    console.log('what is count?', count)
  }
  return count
}
module.exports = Hamming