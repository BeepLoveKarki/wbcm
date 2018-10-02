let licenseKey="Aev8sV+dQ6bKJ7pu4CQs1GkeaY6SKmJhKnPoKMlbnAaxT/yzYmbTUF4UOOUYaq3qY1BgnQkamShCaw415S/nCfB6eN9WOhT4el/d9HBMPoFcR10UsF4FuCVAaxciVLNytRRcMcAIgJ2ODY5YK0GlFJqnQXNXAxkv1DReQCPNuS3V+A6Iw9H3OSAJUjHZ+/vS7TEq3cHERuzmkxo7RKXwWD6RE3vBtpIFM2Nm6sYwu6kixbjuJA+wyUS2Dy9Fm7abEMvod7lZqfDL27hRlt4/D1vsDnd+aLhDnmbvPiQED+lzEp4GYBN+QtCN6XBQKW1psl+Fye7tDkqhI82po+orVZmfEU3nV4rPw3h5KK9NA7mmPAlb3RvJX0JLBdTgrNbbBF6iRU1D7QxAlN84sQa0Yo39gsZLU+4BHdIkF1zIy+1HhQG865aqcErgFKEBlbbME5YS8OEiO3KuaNoJQuIj63Qb0q3V2uIntWbKURDMrhEE+fLgDbhUua8vJ4Neb55jKhcAOAjwnVBU5nIQdnpcSdjTDbJ1iWIZsI9lIqiuBLAE0+aFozCK2uJPCgmtKDbKNUqmR9BhLBFSRtmHbLaecDymQx2Gf3PkabUl1YDh+IGY7zEQWNYFVlrEwMbtrSvFvsrVs3QxL9kE8dnPmvcP/Scy+iV4vrCiHYIYP37DS/cKuhlgq9Id94I9znlo2N+1ST6aj4gYaJbGodIdEdf+rMOZxNGnpXQhvvhfghuYYxns/s/Gr3ZeWNW3ni/2c8CbN11SX0Y/ko/PL+gUsEgxH1dXEfUbr7PkcEdnyu+c4/F7FZVZL27KDlChBQ==";

let  scanSettings = new ScanditSDK.ScanSettings({
  enabledSymbologies: ["ean8", "ean13", "upca", "upce", "code128", "code39", "code93", "itf"],
  codeDuplicateFilter: 1000
});

ScanditSDK.configure(licenseKey, {
  engineLocation: "https://unpkg.com/scandit-sdk/build",
  preloadEngineLibrary: false,
  preloadCameras: false
});

ScanditSDK.BarcodePicker.create(document.getElementById("scandit-barcode-picker"), {
  playSoundOnScan: true,
  vibrateOnScan: true
}).then(function(barcodePicker) {
  barcodePicker.applyScanSettings(scanSettings);
  barcoderead(barcodePicker);
});

function barcoderead(barcodePicker){
	barcodePicker.onScan(function(scanResult) {
    alert(scanResult.barcodes.reduce(function(string, barcode) {
       return string + ScanditSDK.Barcode.Symbology.toHumanizedName(barcode.symbology) + ": " + barcode.data + "\n";
	   //barcodePicker.destroy(); 
     }, ""));
    });
}

