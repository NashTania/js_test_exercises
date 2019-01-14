window.onload = function() {
  const win = document.getElementsByTagName('iframe')[0].contentWindow;
  const testObj = {
      a:'data'
   };

  const setButton = document.getElementById('set');
  setButton.addEventListener('click',(event) => {
    win.postMessage(JSON.stringify({key: 'storage', data: testObj, method: 'set'}), 'http://localhost:3000');
  })

  const writtenButton = document.getElementById('written');
  writtenButton.addEventListener('click',(event) => {
    win.postMessage(JSON.stringify({ key: 'storage', method: 'get'}), 'http://localhost:3000');
  })

  const removeButton = document.getElementById('remove');
  removeButton.addEventListener('click',(event) => {
    win.postMessage(JSON.stringify({ key: 'storage', method: 'remove'}), 'http://localhost:3000');
  })
}
window.onmessage = function (event) {
  if (event.origin != "http://localhost:3000") {
    return;
  }
    console.log('collback ' + event.data)
}
