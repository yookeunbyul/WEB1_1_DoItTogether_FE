import React, { useRef } from 'react';
import { KeenSliderOptions, TrackDetails, useKeenSlider } from 'keen-slider/react';
import { cn } from '@/lib/utils';

export default function Wheel(props: {
  initIdx?: number;
  label?: string;
  length: number;
  loop?: boolean;
  perspective?: 'left' | 'right' | 'center';
  setValue?: (relative: number, absolute: number) => string;
  width: number;
  onDragEnd?: (value: string) => void;
  className?: string;
}) {
  const perspective = props.perspective || 'center';
  const wheelSize = 20;
  const slides = props.length;
  const slideDegree = 360 / wheelSize;
  const slidesPerView = props.loop ? 9 : 1;
  const [sliderState, setSliderState] = React.useState<TrackDetails | null>(null);
  const size = useRef(0);
  const options = useRef<KeenSliderOptions>({
    slides: {
      number: slides,
      origin: props.loop ? 'center' : 'auto',
      perView: slidesPerView,
    },

    vertical: true,

    initial: props.initIdx || 0,
    loop: props.loop,
    dragSpeed: val => {
      const height = size.current;
      return (
        val * (height / ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) / slidesPerView)
      );
    },
    created: s => {
      size.current = s.size;
    },
    updated: s => {
      size.current = s.size;
    },
    detailsChanged: s => {
      setSliderState(s.track.details);
      // 현재 선택된 값 업데이트
      if (props.setValue && props.onDragEnd && s.track.details.abs !== undefined) {
        const currentValue = props.setValue(s.track.details.abs, s.track.details.abs);
        props.onDragEnd(currentValue);
      }
    },
    rubberband: !props.loop,
    mode: 'free-snap',
  });

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(options.current);

  const [radius, setRadius] = React.useState(0);

  React.useEffect(() => {
    if (slider.current) setRadius(slider.current.size / 2);
  }, [slider]);

  function slideValues() {
    if (!sliderState) return [];
    const offset = props.loop ? 1 / 2 - 1 / slidesPerView / 2 : 0;

    const values = [];
    for (let i = 0; i < slides; i++) {
      const distance = sliderState ? (sliderState.slides[i].distance - offset) * slidesPerView : 0;
      const rotate = Math.abs(distance) > wheelSize / 2 ? 180 : distance * (360 / wheelSize) * -1;

      // 거리에 따른 투명도 계산
      const opacity = Math.max(0, 1 - Math.abs(distance) * 0.3);

      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        opacity: opacity, // 투명도 적용
      };
      const value = props.setValue ? props.setValue(i, sliderState.abs + Math.round(distance)) : i;
      values.push({ style, value });
    }
    return values;
  }

  return (
    <div
      className={`block h-full w-full overflow-visible bg-white03 ${perspective} font-body`}
      ref={sliderRef}
    >
      <div
        className='z-5 relative -mt-0.5 h-[calc(42%+2px)] w-full border-b bg-gradient-to-b'
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
      <div
        className={cn(
          `bg-main/15 flex h-[16%] w-full items-center justify-center transform-style-preserve-3d ${
            perspective === 'right'
              ? 'perspective-origin-[calc(50%+100px)_50%] text-main translate-x-2.5'
              : perspective === 'left'
                ? 'perspective-origin-[calc(50%-100px)_50%] text-main -translate-x-2.5'
                : ''
          }`,
          props.className
        )}
        style={{ perspective: '1000px' }}
      >
        <div className='relative h-full w-full' style={{ width: props.width + 'px' }}>
          {slideValues().map(({ style, value }, idx) => (
            <div
              className={cn(
                'text-xl absolute flex h-full w-full items-center justify-center backface-hidden',
                Math.abs(sliderState?.slides[idx].distance || 0) < 0.1 ? 'text-main' : 'text-main'
              )}
              style={style}
              key={idx}
            >
              <span>{value}</span>
            </div>
          ))}
        </div>
        {props.label && (
          <div
            className='text-sm ml-[5px] mt-[1px] leading-none'
            style={{
              transform: `translateZ(${radius}px)`,
              WebkitTransform: `translateZ(${radius}px)`,
            }}
          >
            {props.label}
          </div>
        )}
      </div>
      <div
        className='z-5 relative mt-0.5 h-[calc(42%+2px)] w-full border-t bg-gradient-to-b'
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
    </div>
  );
}
