const layout = require('../layout');
const { getError} = require('../../helpers');
const { method } = require('lodash');

module.exports = ({ errors}) => {
  return layout({
    content: `
    
    <form method="POST">
        <input placeholder="Title" name="title" />
        <input placholder="Price" name="price" />
        <input type="file" name="image" />
        <button>Submit</button>
    </form>
    `
  })  
}

