
const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white tracking-tighter">
                Daniel Eats
            </span>
            <span className="text-white font-bold track-tight flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms Of Service</span>
            </span>
        </div>
    </div>
  )
}

export default Footer