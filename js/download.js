const windows = document.getElementById('windows');
const android = document.getElementById('android');
const ios = document.getElementById('ios');

windows.addEventListener('click', (e) => {
    window.location.replace('https://cdn.fruitspace.one/gdps_installers/0002_NanoRun%20Dash.exe');
});

android.addEventListener('click', (e) => {
    window.location.replace('https://cdn.fruitspace.one/gdps_installers/0002_NanoRun%20Dash.apk');
});

ios.addEventListener('click', (e) => {
    alert('Not yet available');
});