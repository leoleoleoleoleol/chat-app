import RoomLink from "@/app/components/threadLink"
export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold pt-6 pb-10">アイデアボード</h1>
      <ul>
        <RoomLink channelName='Business Proposal' roomName='事業提案'></RoomLink>
        <RoomLink channelName='New Business' roomName='新事業'></RoomLink>
        <RoomLink channelName='Desired Service Implementation' roomName='導入したいサービス'></RoomLink>
        <RoomLink channelName='Company Improvement Areas' roomName='会社の改善点'></RoomLink>
        <RoomLink channelName='Other' roomName='その他'></RoomLink>
      </ul>
    </div>
  )
}
