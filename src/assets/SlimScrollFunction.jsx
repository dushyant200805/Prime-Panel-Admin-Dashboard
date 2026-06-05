import { useEffect } from 'react';
import $ from 'jquery';

// Custom hook to initialize slimScroll on elements
export const useSlimScroll = () => {
  useEffect(() => {
    // Function to initialize slimScroll
    const initializeSlimScroll = () => {
      // Check if slimScroll plugin is available
      if (!$.fn.slimScroll) {
        console.warn('slimScroll plugin not yet loaded, retrying...');
        // Retry after 500ms if plugin not loaded yet
        setTimeout(initializeSlimScroll, 500);
        return;
      }

      // Array of selector configurations
      const scrollSelectors = [
        { selector: '#menu' },
        { selector: '#messagelistslide' },
        { selector: '#grouplistslide' },
        { selector: '.codeboxss' },
        { selector: '#taskList' },
        { selector: '#notification' },
        { selector: '#chat-one-slim', options: { start: 'bottom' } },
        { selector: '#chat-two-slim', options: { start: 'bottom' } },
        { selector: '#chat-list-slim', options: { start: 'bottom' } },
        { selector: "[data-id='primepanel-chat']", options: { start: 'bottom' } },
        { selector: '#menubox-list' },
        { selector: '#chatmain-list' },
        { selector: '#chatmain-list-slim', options: { start: 'bottom' } },
        { selector: '#listContainer' },
        { selector: '#taskinhand' },
        { selector: '#chat-one-slim', options: { start: 'bottom' } },
      ];

      // Initialize slimScroll for each selector
      scrollSelectors.forEach(({ selector, options = {} }) => {
        if ($(selector).length > 0) {
          try {
            $(selector).slimScroll(options);
          } catch (e) {
            console.error(`Failed to initialize slimScroll on ${selector}:`, e);
          }
        }
      });
    };

    // Start initialization
    initializeSlimScroll();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);
};

// Alternative: Direct initialization for immediate use
export const initSlimScroll = () => {
  const scrollSelectors = [
    { selector: '#menu' },
    { selector: '#messagelistslide' },
    { selector: '#grouplistslide' },
    { selector: '.codeboxss' },
    { selector: '#taskList' },
    { selector: '#notification' },
    { selector: '#chat-one-slim', options: { start: 'bottom' } },
    { selector: '#chat-two-slim', options: { start: 'bottom' } },
    { selector: '#chat-list-slim', options: { start: 'bottom' } },
    { selector: "[data-id='primepanel-chat']", options: { start: 'bottom' } },
    { selector: '#menubox-list' },
    { selector: '#chatmain-list' },
    { selector: '#chatmain-list-slim', options: { start: 'bottom' } },
    { selector: '#listContainer' },
    { selector: '#taskinhand' },
  ];

  scrollSelectors.forEach(({ selector, options = {} }) => {
    if ($(selector).length > 0) {
      $(selector).slimScroll(options);
    }
  });
};