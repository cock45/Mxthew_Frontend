import * as React from 'react';
import * as PIXI from 'pixi.js';
import { Spine } from 'pixi-spine';

/*interface PixiAnimationProps {
  appW: number;
  appH: number;
  animationId: string;
  src: string;
  scale: number;
  animX: number;
  animY: number;
  animation: string;
}*/

const PixiAnimation = ({
  appW,
  appH,
  animationId,
  src,
  scale,
  animX,
  animY,
  animation,
}) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const app = new PIXI.Application({
      backgroundAlpha: 0,
      width: appW,
      height: appH,
      antialias: true,
      autoDensity: true,
      resolution: 2,
    });

    const element = document.getElementById(animationId);
    element.appendChild(app.view);

    app.loader
      .add('animationId', `/sprites/${src}/${src}.json`)
      .load(function (_, resources) {
        const animationId = new Spine(resources.animationId.spineData);

        animationId.scale.set(scale / animationId.width);
        animationId.x = animationId.width / 2 + animX;
        animationId.y = animationId.height + animY;

        if (animationId.state.hasAnimation(animation)) {
          animationId.state.setAnimation(0, animation, true);
        }

        app.stage.addChild(animationId);
        ref.current.appendChild(app.view);
        app.start();
      });

    return () => {
      app.destroy(true, true);
    };
  }, [animY, animX, animation, animationId, appH, appW, scale, src]);

  return <div ref={ref} />;
};

export default PixiAnimation;
