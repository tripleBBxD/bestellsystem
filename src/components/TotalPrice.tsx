type TotalPriceProps = {
  price: number
}

function TotalPrice( {
  price
}: TotalPriceProps

) {

  return (
    <>
    <p className="bg-white rounded-lg p-4">
        Price: {price}€
      </p>
    </>
  )
}

export default TotalPrice