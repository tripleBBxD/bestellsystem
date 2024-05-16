type AccountBalanceProps = {
  balance: number
}

function AccountBalance(
  {balance}: AccountBalanceProps
) {

  return (
    <>
      <p className="bg-white rounded-lg p-4">
        {balance}€
      </p>
    </>
  )
}

export default AccountBalance