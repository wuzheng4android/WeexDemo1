define('@weex-component/hello', function (require, exports, module) {

;

;module.exports.style = {}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "text",
      "style": {
        "fontSize": 50
      },
      "attr": {
        "value": "native Hello World."
      }
    }
  ]
}

;})

// require module
bootstrap('@weex-component/hello', {"transformerVersion":"0.3.1"})