function doModel() {
    const urlParams = new URLSearchParams(window.location.search);
    const modelurl = urlParams.get('model');

    const parent = document.querySelector('.embedhere')
    const embedurl = new URL('https://viewstl.com');
    url.searchParams.append('embedded', null);
    url.searchParams.append('local', null);
    url.searchParams.append('url', modelurl);
    url.searchParams.append('bgcolor', 'transparent');
    url.searchParams.append('noborder', 'yes');
    url.searchParams.append('edges', 'yes');

    iframe = document.createElement('iframe');
    iframe.src = url.toString();
    iframe.style = "border:0;margin:0;width:100%;height:100%;";
    iframe.id = "vs_iframe";
        
    parent.appendChild(iframe);
}

window.onload = doModel;