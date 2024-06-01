import { useEffect } from 'react';
import { useIntersectingRef } from 'useintersection';

export type UseInfinityScroll<T extends HTMLElement> = ReturnType<typeof useIntersectingRef<T>>['ref'];

export const useInfiniteScroll = <T extends HTMLElement, ACTION_RETURN_TYPE = void>(
	action: () => Promise<ACTION_RETURN_TYPE>
): UseInfinityScroll<T> => {
	const { intersected, ref: elementReference } = useIntersectingRef<T>();

	useEffect(() => {
		intersected && action();
	}, [intersected, action]);

	return elementReference;
};
