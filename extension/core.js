;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.QuickRegex = factory();
})(typeof self !== 'undefined' ? self : this, function () {

  function testPattern(patternStr, flags, text) {
    flags = flags || 'g';
    try {
      const regex = new RegExp(patternStr, flags);
      const matches = [];
      let m;

      if (flags.includes('g')) {
        while ((m = regex.exec(text)) !== null) {
          matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
          if (regex.lastIndex === m.index) regex.lastIndex++;
        }
      } else {
        m = regex.exec(text);
        if (m) matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
      }

      return { valid: true, count: matches.length, matches: matches };
    } catch (err) {
      return { valid: false, error: err.message, matches: [] };
    }
  }

  return { testPattern: testPattern };
});
