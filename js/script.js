const inputUsd = document.querySelector('#usd');
      inputUah = document.querySelector('#uah');


inputUsd.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'json/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if(request.status === 200) {
            const data = JSON.parse(request.response);
            inputUah.value = (+inputUsd.value * data.current.usd).toFixed(2);
        } else {
            inputUah.value = 'Щось пішло не так';
        }
    });
});