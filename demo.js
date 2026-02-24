function doModel() {
    const urlParams = new URLSearchParams(window.location.search);
    const modelurl = urlParams.get('model');
}

window.onload = doModel;