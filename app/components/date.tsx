type Props = {
  timestamp: string
}
// 時間の調整（ここでは日本時間に調整している）
export default function DateFormatter({ timestamp }: Props) {
  const date = new Date(timestamp)
  var jstDate = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })

  return (
      <>
          {jstDate}
      </>
  )
}
