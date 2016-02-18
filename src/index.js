module.exports = function (opts) {
  var t = opts.types;
  return {
    visitor: {
      ClassDeclaration: function (path) {
        var displayName = path.node.id.name;
        path.traverse({
          ClassMethod(path) {
            if (path.node.key.name === 'render') {
              var ret = path.node.body.body.find(i => i.type === 'ReturnStatement');
              if (ret.argument.openingElement) {
                var cls = ret.argument.openingElement.attributes
                  .find(i =>  i && i.name && i.name.name === 'className');
                if (!cls) {
                  cls = {
                    type: "JSXAttribute",
                    name: {
                      name: "className",
                      type: "Identifier"
                    },
                    value: {
                        type: "StringLiteral",
                        value: ''
                    }
                  };
                  ret.argument.openingElement.attributes.push(cls);
                }
                console.log(displayName);
                // elem type is string
                cls.value.value = `${cls.value.value} $${displayName}`;
              }
            }
          }
        });
      }
    }
  };
}