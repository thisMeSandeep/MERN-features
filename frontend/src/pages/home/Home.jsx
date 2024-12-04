import Options from "./Options"
import BookDisplay from "./BookDisplay"

const Home = () => {
  return (
    <>
      <div className=" mt-28 flex relative">
        <Options />
        <BookDisplay />
      </div>
    </>
  )
}

export default Home
