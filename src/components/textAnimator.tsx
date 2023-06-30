import { RefObject }from 'react';

export default function TextAnimator(ref: RefObject<HTMLDivElement>) {

    const textContainers = document.querySelectorAll('.text-container');
    const defaultScale = 1;
    const maxScale = 2;
    const neighborScale = 1.5;

    textContainers.forEach((textContainer) => {
        const spans = textContainer.querySelectorAll('span');

        textContainer.addEventListener('mousemove', (e) => {
            const target = e.target;
            const index = Array.from(spans).indexOf(target as HTMLSpanElement);

            spans.forEach((span, i) => {
                let scale = defaultScale;

                if (i === index) {
                    scale = maxScale;
                }
                else if (i === index - 1 || i === index + 1) {
                    scale = neighborScale;
                }
                span.style.transform = `scaleY(${scale})`;
            });
        });
        textContainer.addEventListener('mouseleave', () => {
            spans.forEach((span) => {
                span.style.transform = `scaleY(${defaultScale})`;
            });
        });
    });
}
// import { useEffect, RefObject } from 'react';

// export const useTextAnimator = (ref: RefObject<HTMLDivElement>) => {
//   useEffect(() => {
//     const textContainer = ref.current;

//     if (textContainer) {
//       const spans = textContainer.querySelectorAll('span');
//       const defaultScale = 1;
//       const maxScale = 2;
//       const neighborScale = 1.5;

//       const mousemoveListener = (e: MouseEvent) => {
//         const target = e.target as HTMLSpanElement;
//         const index = Array.from(spans).indexOf(target);

//         spans.forEach((span, i) => {
//           let scale = defaultScale;

//           if (i === index) {
//             scale = maxScale;
//           }
//           else if (i === index - 1 || i === index + 1) {
//             scale = neighborScale;
//           }

//           span.style.transform = `scaleY(${scale})`;
//         });
//       };

//       const mouseleaveListener = () => {
//         spans.forEach((span) => {
//           span.style.transform = `scaleY(${defaultScale})`;
//         });
//       };

//       textContainer.addEventListener('mousemove', mousemoveListener);
//       textContainer.addEventListener('mouseleave', mouseleaveListener);

//       return () => {
//         textContainer.removeEventListener('mousemove', mousemoveListener);
//         textContainer.removeEventListener('mouseleave', mouseleaveListener);
//       };
//     }
//   }, [ref]);
// };
