const PriceFormater = ({price}) => {
let numb = Number(price);
let converteredprice = Intl.NumberFormat('en-pk', {
  style: 'currency',
  currency: 'PKR',
  maximumFractionDigits :0,
}).format(numb)
return converteredprice
}

export default PriceFormater;