interface GetRoomMessagesRequest {
    roomId: string
}

export async function getRoomMessages({roomId}:GetRoomMessagesRequest) {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/rooms/${roomId}`, )

    const data: Array<{
        ID: string,
        RoomID
    }> = await response.json()

    return {roomId: data.id}
}