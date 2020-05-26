import { useCallback, useEffect } from "react";

export default (scrollRef: any, dispatch: any, isPaginated: boolean) => {
    if (!isPaginated) {
        return;
    }
    const scrollObserver = useCallback(
        node => {
            new IntersectionObserver(entries => {
                entries.forEach(en => {
                    if (en.intersectionRatio > 0) {
                        dispatch({ type: 'SCROLL' });
                    }
                });
            }, { rootMargin: '100px' }).observe(node);
        },
        [dispatch]
    );
    useEffect(() => {
        if (scrollRef.current) {
            scrollObserver(scrollRef.current);
        }
    }, [scrollObserver, scrollRef, isPaginated]);
}
