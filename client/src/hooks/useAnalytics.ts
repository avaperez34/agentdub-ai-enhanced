/**
 * Google Analytics 4 tracking hook
 * Provides functions to track custom events throughout the application
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = (
    eventName: string,
    eventParams?: Record<string, any>
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
  };

  const trackButtonClick = (buttonName: string, destination?: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      destination: destination || 'unknown',
    });
  };

  const trackPurchaseIntent = (productName: string, price: number) => {
    trackEvent('begin_checkout', {
      product_name: productName,
      value: price,
      currency: 'USD',
    });
  };

  const trackPageView = (pageName: string) => {
    trackEvent('page_view', {
      page_title: pageName,
    });
  };

  return {
    trackEvent,
    trackButtonClick,
    trackPurchaseIntent,
    trackPageView,
  };
};
