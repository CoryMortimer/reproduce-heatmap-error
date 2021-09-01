# Reproduce Heatmap testing error

## Reproduction steps
1. `yarn`
1. `yarn test`
1. See test fail

You can also use `yarn watch` to run jest in watch mode.

```
FAIL  src/heatmap.test.js
  Heatmap
    ✕ initial render (321 ms)

  ● Heatmap › initial render

    matching of TriangleLayer({id: 'HeatmapLayer-triangle-layer'}): initialization of TriangleLayer({id: 'HeatmapLayer-triangle-layer'}): GLSL compilation errors in fragment shader triangle-layer-fragment-shader-1

      at FragmentShader._compile (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:101:13)
      at FragmentShader.initialize (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:49:10)
      at new Shader (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:41:10)
      at FragmentShader._createSuperInternal (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/dist/es5/classes/shader.js:28:311)
      at new FragmentShader (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:133:26)
      at Program.initialize (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/program.js:65:32)
      at new Program (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/program.js:49:10)
      at ProgramManager.get (.yarn/cache/@luma.gl-engine-npm-8.5.5-edc9462d77-af856d3e98.zip/node_modules/@luma.gl/engine/src/lib/program-manager.js:101:34)
      at Model._checkProgram (.yarn/cache/@luma.gl-engine-npm-8.5.5-edc9462d77-af856d3e98.zip/node_modules/@luma.gl/engine/src/lib/model.js:430:37)
      at Model.initialize (.yarn/cache/@luma.gl-engine-npm-8.5.5-edc9462d77-af856d3e98.zip/node_modules/@luma.gl/engine/src/lib/model.js:94:10)

  console.error
    luma.gl: GLSL compilation errors in fragment shader triangle-layer-fragment-shader-1
     13:
     14: #if (__VERSION__ > 120)
     15:
    ^^^ ERROR: Invalid call of 'texture' (not a function or subroutine uniform)

     16: # define FEATURE_GLSL_DERIVATIVES
    ^^^ ERROR: Use of undeclared identifier 'color'

     17: # define FEATURE_GLSL_DRAW_BUFFERS
    ^^^ ERROR: Use of undeclared identifier 'color'

     18: # define FEATURE_GLSL_FRAG_DEPTH
     19: # define FEATURE_GLSL_TEXTURE_LOD
     20:
    ^^^ ERROR: Invalid call of 'texture' (not a function or subroutine uniform)

     21: // DEPRECATED FLAGS, remove in v9
    ^^^ ERROR: Use of undeclared identifier 'weights'

     22: # define FRAG_DEPTH
     23: # define DERIVATIVES
     24: # define DRAW_BUFFERS
    ^^^ ERROR: Use of undeclared identifier 'weights'

     25: # define TEXTURE_LOD
     26:
    ^^^ ERROR: Use of undeclared identifier 'weight'

     28:
     29: // DERIVATIVES => dxdF, dxdY and fwidth are available
     30: #ifdef GL_OES_standard_derivatives
    ^^^ ERROR: Use of undeclared identifier 'weight'

     31: #extension GL_OES_standard_derivatives : enable
    ^^^ ERROR: Use of undeclared identifier 'linearColor'

     32: # define FEATURE_GLSL_DERIVATIVES
    ^^^ ERROR: Use of undeclared identifier 'linearColor'



      at FragmentShader._compile (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:99:7)
      at FragmentShader.initialize (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:49:10)
      at new Shader (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:41:10)
      at FragmentShader._createSuperInternal (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/dist/es5/classes/shader.js:28:311)
      at new FragmentShader (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:133:26)
      at Program.initialize (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/program.js:65:32)
      at new Program (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/program.js:49:10)

  console.warn
    luma.gl: GLSL compilation warnings in fragment shader triangle-layer-fragment-shader-1


      at FragmentShader._compile (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:100:7)
      at FragmentShader.initialize (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:49:10)
      at new Shader (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:41:10)
      at FragmentShader._createSuperInternal (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/dist/es5/classes/shader.js:28:311)
      at new FragmentShader (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/shader.js:133:26)
      at Program.initialize (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/program.js:65:32)
      at new Program (.yarn/cache/@luma.gl-webgl-npm-8.5.5-ec420a708c-649fe0cf6f.zip/node_modules/@luma.gl/webgl/src/classes/program.js:49:10)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.237 s
```