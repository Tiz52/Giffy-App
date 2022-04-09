import { useState, useRef, useEffect, RefObject } from 'react';

interface props {
	distance?: string;
	externalRef?: RefObject<HTMLElement> | null;
	once?: boolean;
}

export const useNearScreen = ({ distance = '100px', externalRef, once = true }: props = {}) => {
	const [isNearScreen, setShow] = useState(false);
	const fromRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let observer: IntersectionObserver;

		const fromElement = externalRef ? externalRef.current : fromRef.current;
		if (!fromElement) return;

		const onChange = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			const el = entries[0];
			if (el.isIntersecting) {
				setShow(true);
				once && observer.disconnect();
			} else {
				!once && setShow(false);
			}
		};

		Promise.resolve(
			typeof IntersectionObserver !== 'undefined'
				? IntersectionObserver
				: import('intersection-observer')
		).then(() => {
			observer = new IntersectionObserver(onChange, {
				rootMargin: distance
			});

			observer.observe(fromElement);
		});

		return () => observer && observer.disconnect();
	}, [distance, externalRef, once]);

	return { isNearScreen, fromRef };
};
