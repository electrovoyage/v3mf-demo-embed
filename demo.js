function doModel() {
    const urlParams = new URLSearchParams(window.location.search);
    const modelurl = urlParams.get('model');

    const parent = document.querySelector('.embedhere')
    const embedurl = new URL('https://viewstl.com');
    embedurl.searchParams.append('embedded', null);
    //embedurl.searchParams.append('local', null);
    embedurl.searchParams.append('url', modelurl);
    embedurl.searchParams.append('bgcolor', 'transparent');
    embedurl.searchParams.append('noborder', 'yes');
    embedurl.searchParams.append('edges', 'yes');

    console.log(modelurl)

    iframe = document.createElement('iframe');
    iframe.src = embedurl.toString();
    iframe.style = "border:0;margin:0;width:100%;height:100%;";
    iframe.id = "vs_iframe";
        
    parent.appendChild(iframe);
}

window.onload = doModel;