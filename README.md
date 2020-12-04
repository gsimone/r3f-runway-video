### Running the demo

```bash
# install dependencies
yarn
# run create-react-app
yarn start
```

### Notes

A few things I considered:

- Video loading is slow, right now a user online would have to wait for both videos to be playable (canplaythrough event). Ideally I would have added a loading state. Probably also find a way to suspend React while the video is loading - need some research on this

- I considered adding some html to better show the point of separation between the videos, but ultimately decided against it. It could be done in HTML using a simple translate div or in the shader itself

- video desynchs. This was painful, video desynchs, especially when switching tabs ( apparently chrome throttles resources differently for different media?). A totally controlled approach would probably be better (each frame, update BOTH videos current time). This would probably also need some more considerations on the THREE js side (probably having to manually update textures on frame)

Other Notes:
- Funny story, I found out that a video with autoPlay and muted doesn't work in a muted chrome tab!?
- The `ombra` library being used for a couple of utility functions, can be found here https://github.com/gsimone/ombra
- The video textures are left with default ClampToEdgeWrapping since it creates an interesting noisy effect that I liked, pixels outside of the video could be discarded (commented line in the shader)

