import { Dispatch, SetStateAction } from "react"

type MenuButtonProps = {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

function MenuButton(
  {
    isMenuOpen,
    setIsMenuOpen
  }: MenuButtonProps
  ) {
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
    return (
      <>
        <button onClick={toggleMenu} className="p-4 bg-white text-lg rounded-lg hover:scale-105">
          <div className={isMenuOpen ? `rotate-90` : ``}
          >
            ≡
          </div>
        </button>
      </>
    )
  }
  
  export default MenuButton