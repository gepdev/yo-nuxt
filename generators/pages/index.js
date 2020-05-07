const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  async prompting() {
    this.prompts = await this.prompt([
      {
        type: "input",
        name: "pages",
        message: "Insert page path relative to the project including children pages"
      },
      {
        type: "input",
        name: "path",
        message: "Target path where the pages will be written"
      }
    ])
  }
  writing() {
    const rgxFileExt = /^(.*\.(?!a-z$))[^.]*$/ig
    const segments = JSON.stringify(this.prompts.pages)
      .replace(/"|'/g, '')
      .split(/\/|\\/g)
      .filter(s => s !== "")
    if (segments.length > 1) {
      let _path = ""
      for (let _index = 0; _index < segments.length; _index++) {
        _path += `/${segments[_index]}`
        let _pagepath = _index === 0 ? "" : _path
        this._createPageWithFolder(segments[_index], _pagepath)
      }
    } else {
      const file = segments[0].match(rgxFileExt)
      if (file) {
        const filename = segments[0].split('.')[0]
        this.fs.copyTpl(this.templatePath("page.vue"), this.destinationPath(`pages/${this.prompts.path}/${segments[0]}`), { ComponentName: filename })
      } else {
        this._createPageWithFolder(segments[0])
      }
    }
  }
  _createPageWithFolder(pagename, path = "") {
    const _isFirst = path === ""
    const _pagePath = _isFirst ? pagename : `${path}`
    this.fs.copyTpl(this.templatePath("parent.vue"), this.destinationPath(`pages/${this.prompts.path}/${_pagePath}.vue`))
    this.fs.copyTpl(this.templatePath("children.vue"), this.destinationPath(`pages/${this.prompts.path}/${_pagePath}/index.vue`), { ComponentName: pagename })
  }
}
