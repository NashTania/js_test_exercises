window.onload = function(){

  const url = document.createElement('a');
  url.href ='http://domen/filter?size=M&color=1,2&manufacturer=aaa,eee ';

  let state = getUrlParams(url.search)

  function getUrlParams(search) {
    let hashes = search.slice(search.indexOf('?') + 1).split('&')
    return hashes.reduce((params, hash) => {
        let [key, val] = hash.split('=');
        return Object.assign(params, {[key]: val.split(',')})
    }, {})
  }


  function getChecked () {
    const inputs = document.getElementsByClassName("is-checked")
    for(let i = 0; i < inputs.length; i++){
      if(inputs[i].nodeName ==='INPUT' ){
        inputs[i].addEventListener('change', (event) => {
          checkInput(event)
        })
      } else if (inputs[i].nodeName === 'OPTION'){
        inputs[i].addEventListener('click', (event) => {
          checkInput(event)
        })
      }
    }
    for( key in state) {
      state[key].map(prop => {
        for (i in inputs) {
          if(prop === inputs[i].value) {
            if(inputs[i].nodeName ==='INPUT' ){
              inputs[i].checked = true;
            } else if (inputs[i].nodeName === 'OPTION'){
              inputs[i].selected = 'selected'
            }
          }
        }
      })
    }
  }
  getChecked ()

  function checkInput(event) {
    if(event.target.type === 'radio' && event.target.checked === true){
      state.size = [event.target.value];
    }

    else if (event.target.type === 'checkbox') {
      if(event.target.checked === true) {
        state.color.push(event.target.value)
      } else {
        state.color = state.color.filter(color => {
          return color !== event.target.value
        })
      }
    }

    else {
      const inputs = document.getElementsByTagName("option");
      state.manufacturer = [];
      for (i in inputs) {
        if(inputs[i].selected === true){
          state.manufacturer.push(inputs[i].value);
        }
      }
    }
    createURL()
  }

  function createURL() {
    let URLstate = Object.assign({}, state);
    for (i in URLstate) {
      URLstate[i] = URLstate[i].join()
    }

    let search = Object.keys(URLstate).map((key) => {
      return [key, URLstate[key]].join("=");
    }).join("&")

    console.log('http://domen/filter?' + search)
  }
}
