function showDate(){
    let out = document.getElementById('current-date');
    let arabicOut = document.getElementById('arabic-date');
    let germanyOut = document.getElementById('germany-date');
    let greekOut = document.getElementById('greek-date');
    let englishOut = document.getElementById('english-date');

    let today = new Date();

    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    arabicOut.innerHTML = 'Дата и время для арабской локали: ' + today.toLocaleString('ar-MA');
    germanyOut.innerHTML = 'Дата и время для немецкой локали: ' + today.toLocaleString('de-AT');
    greekOut.innerHTML = 'Дата и время для греческой локали: ' + today.toLocaleString('el-GR')
    englishOut.innerHTML = 'Дата и время для американской локали: ' + today.toLocaleString('en-US')

}
