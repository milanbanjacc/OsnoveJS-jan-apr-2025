function solve(bitcoins, yuan, comission) {
  let bitcoinToRSD = 1168;
  let yuanToUSD = 0.15;
  let usdToRSD = 1.76;
  let euroToRSD = 1.95;
  let rsdFromBitcoin = bitcoins * bitcoinToRSD;
  let rsdFromYuan = yuan * yuanToUSD * usdToRSD;
  let totalRSD = rsdFromBitcoin + rsdFromYuan;
  let euros = totalRSD / euroToRSD;
  let comisionAmount = euros * (comission / 100);
  let finalEuros = euros - comisionAmount;
  console.log(finalEuros.toFixed(2));
}

