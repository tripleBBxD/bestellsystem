type AccountBalanceProps = {
  balance: number
}

function AccountBalance(
  {balance}: AccountBalanceProps
) {
  return (
    <>
      <p className="bg-white rounded-lg p-4">
        Balance: {balance}€
      </p>
    </>
  )
}

export default AccountBalance