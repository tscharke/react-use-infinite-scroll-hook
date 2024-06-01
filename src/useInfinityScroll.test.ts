import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useInfiniteScroll } from './useInfiniteScroll';

describe('Infinity Scroll Hook', () => {
	it('returns a reference to intersecting an element', () => {
		const actionToCall = vi.fn();
		const { result } = renderHook(() => useInfiniteScroll(actionToCall));

		expect(typeof result.current).toBe('function');
	});

	it('not intersecting an element nor calling the action', () => {
		const element = document.createElement('div');
		const actionToCall = vi.fn();
		renderHook(() => useInfiniteScroll(actionToCall));

		expect(mockObserveElement).not.toHaveBeenCalledWith(element);
		expect(actionToCall).not.toHaveBeenCalled();
	});

	it('intersects an element and calling the action', () => {
		window.IntersectionObserver = vi.fn().mockImplementation(callback => {
			callback([{ isIntersecting: true }], vi.fn());
			return { observe: mockObserveElement };
		});
		const element = document.createElement('div');
		const actionToCall = vi.fn();
		const { result } = renderHook(() => useInfiniteScroll(actionToCall));

		act(() => {
			result.current(element);
		});

		expect(mockObserveElement).toHaveBeenCalledWith(element);
		expect(actionToCall).toHaveBeenCalled();
	});

	it.todo('uses the hook with custom options');

	const mockObserveElement = vi.fn();

	beforeEach(() => {
		window.IntersectionObserver = vi.fn().mockImplementation(() => ({
			observe: mockObserveElement,
		}));
	});

	afterEach(() => {
		vi.resetAllMocks();

		window.IntersectionObserver = IntersectionObserver;
	});

	afterAll(() => {
		vi.clearAllMocks();
	});
});
