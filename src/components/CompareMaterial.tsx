import { shaderMaterial } from '@react-three/drei'
import { extend } from 'react-three-fiber'

const SwapMaterial = shaderMaterial({
  u_time: 0,
  u_mouse: [0, 0],
  u_resolution: [0, 0],

  original: 0,
  deoldify: 0,

  videoSize: [0, 0]
}, /*glsl*/`
  varying vec2 vUv;
  void main()	{
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`, /* glsl */`
  varying vec2 vUv;
  uniform sampler2D original;
  uniform sampler2D deoldify;
  uniform vec2 u_mouse;
  uniform vec2 u_resolution;

  uniform vec2 videoSize;

  // helper to draw a thin line, from https://thebookofshaders.com/glossary/?search=smoothstep
  float plot(vec2 st, float pct){
    return  smoothstep( pct-1., pct, st.y) -
            smoothstep( pct, pct+1., st.y);
  }

  void main() {
    float ratio = videoSize.y/videoSize.x;
    float screenRatio = u_resolution.y/u_resolution.x;
    
    vec2 fitUv = vUv;

    // offset
    fitUv -= vec2(0.5, 0.);
    
    // scale UV space to fit
    fitUv = vec2(fitUv.x * ratio/screenRatio, fitUv.y);

    // center back
    fitUv += vec2(0.5, 0.);

    // discard outside of range
    // if (fitUv.x < 0. || fitUv.x > 1.) discard;

    vec3 col = texture2D(original, fitUv).rgb;
    vec3 deold = texture2D(deoldify, fitUv).rgb;

    // denormalize mouse coords from -1,1 to 0,1
    vec2 mouse = (u_mouse + vec2(1.)) / 2.;

    // using the original uv space to make this simpler
    float perc = smoothstep(mouse.x, mouse.x + 0.001, vUv.x);

    // final color is picked with mix, since our perc will either be 0 or 1
    col = mix(col, deold, vec3(perc));

    gl_FragColor = vec4(col, 1.);
  }
`)

extend({ SwapMaterial })

type SwapMaterialType = JSX.IntrinsicElements['shaderMaterial']

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swapMaterial': SwapMaterialType
    }
  }
}
