import * as React from 'react'
import { ScreenQuad, useBasicUniforms } from 'ombra'
import { Canvas } from 'react-three-fiber'

/** 
 * just importing will be enough to evaluate material creation and r3f's extend,
 * meaning the material is now available to the renderer - and the declare statement
 * adds it to the ts namespace
 */
import './components/CompareMaterial'
import VideoTexture from './components/VideoTexture'

function Scene() {
  
  const material = React.useRef<THREE.ShaderMaterial>(null)
  /** 
   *  this hook injects mouse position and resolution in our shader uniforms
   *  👉 https://github.com/gsimone/ombra#usebasicuniforms
  **/
  useBasicUniforms(material)

  /**
   * store loading state in a ref, we are going to imperatively start the video
   * so we don't care about react updating anything.
   * This whole block of code COULD be abstracted away.
   */
  const loaded = React.useRef<number>(0)
  const originalVideoRef = React.useRef<HTMLVideoElement>(null)
  const deoldifyVideoRef = React.useRef<HTMLVideoElement>(null)

  const handleLoadedMetaData = React.useCallback((e) => {
    loaded.current++

    // once we have both videos loaded, we can set size uniforms and start playing both
    if (loaded.current >= 2) {
      const deoldify = deoldifyVideoRef.current!
      const original = originalVideoRef.current!
      const m = material.current!
      m.uniforms.videoSize.value = [e.target.videoWidth, e.target.videoHeight]
  
      deoldify.play()
      original.play()
    }
  }, [])

  /**
   * 👉 https://github.com/gsimone/ombra#screenquad
   * We don't need to worry about scaling since we have a fixed camera
   * and the texture is ultimately fit in the shader
  **/
  return (
    <>
      <ScreenQuad>
        <swapMaterial ref={material}>
          <VideoTexture 
            attach="original" 
            src="/video/original.mp4" 
            videoRef={originalVideoRef} 
            muted 
            loop 
            onLoadedMetadata={handleLoadedMetaData} 
          />
          <VideoTexture 
            attach="deoldify" 
            src="/video/deoldify.mp4" 
            videoRef={deoldifyVideoRef} 
            muted 
            loop 
            onLoadedMetadata={handleLoadedMetaData} 
          />
        </swapMaterial>
      </ScreenQuad>
    </>
  )
}

function App() {
  
  return (
    <Canvas>
      <color attach="background" args={[0, 0, 0]} />
      <React.Suspense fallback={null}>
        <Scene />
      </React.Suspense>
    </Canvas>
  );
}

export default App;
