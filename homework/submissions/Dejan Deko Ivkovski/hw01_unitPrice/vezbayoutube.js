var numbersOftablets = (prompt("Napisi za kolku tableti sakas da ja izracunas cenata"));

function totalpriceOfTablets (ednaCenaodTableti, brojnatableti){

    var  priceWitouttax =  ednaCenaodTableti * brojnatableti;

    var totalpriceWithTax = priceWitouttax * 1.05;
    var totalpriceWithTax = totalpriceWithTax.toFixed(1);
    document.write("Cenata e " + totalpriceWithTax);
}
totalpriceOfTablets(119.95, numbersOftablets);
