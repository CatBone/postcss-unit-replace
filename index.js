module.exports = function (options = {}) {
    var before = options.before || 'cc'
    var after = options.after || 'px'
    return {
      postcssPlugin: 'postcss-unit-replace',

      Once(root) {
        // Transform CSS AST here
        root.walkRules(function (rule) {
          // Transform each rule here
          rule.walkDecls(function (decl) {
            // Transform each property declaration here
            function isTest(str) {
              var s = str.split(before)
              if (s[1] === '' && !isNaN(s[0])) {
                return true
              }
            }
            var newValue = decl.value.split(' ').reduce(function (prev, acc) {
              if (!isTest(acc)) {
                return prev + acc + ' '
              }
              return prev + acc.replace(new RegExp(before), after) + ' '
            }, '')
            decl.value = newValue.trim()
          })
        })
      },
    }
  }

  module.exports.postcss = true
