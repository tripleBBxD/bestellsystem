
type CheckoutProps = {
  onCheckout: () => void
}

function CheckoutButton(
{
  onCheckout
}: CheckoutProps
) 
{
  return (
    
  <> 
    <button type="button" onClick={onCheckout} className='text-lg object-right rounded-lg text-blue-500 bg-white p-4 shadow duration-150 hover:scale-105 hover:shadow-md'>
      Checkout
    </button>
  </>

  )
}

export default CheckoutButton