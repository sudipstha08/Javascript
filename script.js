const obj = {
  count: 0,
  handleClick: function() {
      obj.count++;
      console.log(this)
      console.log("Button clicked:", this.count);
  }
};

// Bind the handleClick method to the obj object
// const handleClickBound = obj.handleClick.bind(obj);

// Attach the bound handleClick method as an event listener to the button
const button2 = document.getElementById('button2');
button2.addEventListener('click', obj.handleClick.bind(obj));
