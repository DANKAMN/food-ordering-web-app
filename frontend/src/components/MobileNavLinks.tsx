import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

const MobileNavLinks = () => {
  const { logout } = useAuth0()
  return (
    <div className="flex flex-col gap-1">
        <Link to="/order-status" className="bg-white items-center font-bold hover:text-orange-500">
            Order Status
        </Link>
        <Link to="/manage-restaurant" className="bg-white items-center font-bold hover:text-orange-500">
            My Restaurant
        </Link>
        <Link to="/user-profile" className="bg-white items-center font-bold hover:text-orange-500">
            User Profile
        </Link>
        <Button className="flex items-center px-3 font-bold hover:bg-gray-500" onClick={() => logout()}>
            Log Out
        </Button>
    </div>
  )
}

export default MobileNavLinks

