import RoomLink from "@/app/components/threadLink"
export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold pt-6 pb-10">Fundely Books</h1>
      <ul>
        <RoomLink channelName='Recommend Books' roomName='FD推薦図書'></RoomLink>
        <RoomLink channelName='Reading trivia' roomName='読書の豆知識'></RoomLink>
        <RoomLink channelName='Desired Books' roomName='置いてほしい図書'></RoomLink>
        <RoomLink channelName='Opinions and requests' roomName='ご意見・ご要望'></RoomLink>
        <RoomLink channelName='Others' roomName='その他'></RoomLink>
      </ul>
    </div>
  )
}
