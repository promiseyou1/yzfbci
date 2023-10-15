import asyncio
import websockets


# 处理 WebSocket 连接
async def handle_websocket(websocket, path):
    data = await websocket.recv()  # 接收数据
    print(f"Received data from JavaScript: {data}")

# 创建 WebSocket 服务器
asyncio.get_event_loop().run_until_complete(
    websockets.serve(handle_websocket, 'localhost', 8765))
asyncio.get_event_loop().run_forever()  # 事件循环
