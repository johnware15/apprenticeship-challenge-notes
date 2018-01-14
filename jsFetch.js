fetch('/url', options{})
  .then((response) => response.json())
  .then(function(data) {
    //add processing function here.
  })
  .catch(error)

* Options => { }

* Write fetch calls in `public/scripts.js`

/////////////////////////////////////////////////////



fetch('/', {
  method: "GET",
  url: '/',
  data: data
})
.then((response) => response.json())
.then(function(data) {
  //function
})
.catch(error)



fetch('/add', {
  method: "POST",
  url: '/add',
  data: data
})
.then((response) => response.json())
.then(function(data) {
  //function
})
.catch(error)


fetch('/update', {
  method: "PUT",
  url: '/update',
  data: data
})
.then((response) => response.json())
.then(function(data) => {
  //function
})
.catch(error)


fetch('/delete', {
  method: "DELETE",
  url: '/delete',
  data: data
})
.then((response) => response.json())
.then(function(data) {
  //function
})
.catch(error)
