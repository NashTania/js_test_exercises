window.onmessage = function (event) {
  if (event.origin != 'http://localhost:8001') {
    return;
  }
  const payload = JSON.parse(event.data);
  if (payload.method === 'set') {
    localStorage.setItem(payload.key, JSON.stringify(payload.data));
    window.parent.postMessage('setItem', "*");
    console.log(localStorage.getItem(payload.key))
  }
    else if(payload.method === 'get'){
    window.parent.postMessage('written', "*");
    console.log('written ' + localStorage.getItem(payload.key))
  }
    else if(payload.method === 'remove'){
    window.parent.postMessage('removeItem', "*");
    localStorage.removeItem(payload.key)
    console.log('remove ')
  }
}
