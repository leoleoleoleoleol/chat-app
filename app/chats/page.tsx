import { Suspense } from "react"
import Chats from "../components/chats/chatFunction"
import { Footer } from "../components/footer"
export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <Suspense>
      <Chats/>
      </Suspense>
      <Footer/>
    </div>
  )
}
