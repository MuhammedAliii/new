/**
 * Better Call Hana - Global Universal Internationalization (i18n) Engine
 * Highly Optimized for iOS WebKit & Next.js SPA Routing
 */

(function() {
  'use strict';

  var STORAGE_KEY = 'selectedLanguage';
  var BACKUP_KEY = 'bch_selected_lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de'];

  var translations = {
    // 🔴 KEEP YOUR EXACT TRANSLATION DICTIONARY HERE! 
    // Leave your en: {...}, es: {...}, fr: {...}, de: {...} exactly as they are in your file.
  };

  function getSelectedLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(BACKUP_KEY);
      if (saved && SUPPORTED_LANGUAGES.indexOf(saved) !== -1) {
        return saved;
      }
    } catch (e) {}
    return DEFAULT_LANG;
  }

  var cachedElements = null;
  var cachedPlaceholders = null;
  var cachedTitles = null;

  function refreshElementCache() {
    cachedElements = [];
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      if (key) {
        cachedElements.push({
          el: el,
          key: key,
          isInput: (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')
        });
      }
    }

    cachedPlaceholders = [];
    var pEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var p = 0; p < pEls.length; p++) {
      var pEl = pEls[p];
      var pKey = pEl.getAttribute('data-i18n-placeholder');
      if (pKey) {
        cachedPlaceholders.push({ el: pEl, key: pKey });
      }
    }

    cachedTitles = [];
    var tEls = document.querySelectorAll('[data-i18n-title]');
    for (var t = 0; t < tEls.length; t++) {
      var tEl = tEls[t];
      var tKey = tEl.getAttribute('data-i18n-title');
      if (tKey) {
        cachedTitles.push({ el: tEl, key: tKey });
      }
    }
  }

  var currentAppliedLang = null;
  var observer = null;
  var isObserving = false;

  function pauseObserver() {
    if (observer && isObserving) {
      observer.disconnect();
      isObserving = false;
    }
  }

  function resumeObserver() {
    if (observer && !isObserving && document.body) {
      try {
        observer.observe(document.body, { childList: true, subtree: true });
        isObserving = true;
      } catch (e) {}
    }
  }

  // 🔴 FIX 1: REACT-SAFE DOM UPDATER
  // Replaces only the raw text, leaving Next.js structural HTML entirely intact to prevent crashes.
  function applySafeText(el, text) {
    function walk(node) {
      if (node.nodeType === 3) { // TEXT_NODE
        var trimmed = node.nodeValue.trim();
        if (trimmed !== '') {
          if (node.nodeValue !== text && trimmed !== text) {
            node.nodeValue = text;
          }
          return true;
        }
      }
      for (var i = 0; i < node.childNodes.length; i++) {
        if (walk(node.childNodes[i])) return true;
      }
      return false;
    }
    var found = walk(el);
    if (!found && el.textContent !== text) {
      el.textContent = text;
    }
  }

  function translatePage(lang) {
    if (!lang || SUPPORTED_LANGUAGES.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }

    var dict = translations[lang] || translations[DEFAULT_LANG];

    pauseObserver();

    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
      document.documentElement.dir = 'ltr';
    }

    if (!cachedElements || cachedElements.length === 0) {
      refreshElementCache();
    }

    // 🔴 FIX 2: DOM BATCHING QUEUE
    // Prevents iOS Safari Layout Thrashing by stopping rapid Read/Write loops
    var domWrites = [];

    if (cachedElements) {
      for (var i = 0; i < cachedElements.length; i++) {
        var item = cachedElements[i];
        var el = item.el;
        var targetText = dict[item.key];
        
        if (targetText && el.isConnected) {
          if (item.isInput) {
            if (el.hasAttribute('placeholder') && !el.hasAttribute('data-i18n-placeholder')) {
              if (el.placeholder !== targetText) {
                domWrites.push({ el: el, prop: 'placeholder', val: targetText });
              }
            }
          } else {
            domWrites.push({ el: el, prop: 'safeText', val: targetText });
          }
        }
      }
    }

    if (cachedPlaceholders) {
      for (var p = 0; p < cachedPlaceholders.length; p++) {
        var pItem = cachedPlaceholders[p];
        var pTarget = dict[pItem.key];
        if (pTarget && pItem.el.isConnected && pItem.el.placeholder !== pTarget) {
          domWrites.push({ el: pItem.el, prop: 'placeholder', val: pTarget });
        }
      }
    }

    if (cachedTitles) {
      for (var t = 0; t < cachedTitles.length; t++) {
        var tItem = cachedTitles[t];
        var tTarget = dict[tItem.key];
        if (tTarget && tItem.el.isConnected && tItem.el.title !== tTarget) {
          domWrites.push({ el: tItem.el, prop: 'title', val: tTarget });
        }
      }
    }

    // Execute all writes instantly in one batch
    for (var w = 0; w < domWrites.length; w++) {
      var write = domWrites[w];
      if (write.prop === 'safeText') {
        applySafeText(write.el, write.val);
      } else {
        write.el[write.prop] = write.val;
      }
    }

    resumeObserver();

    if (currentAppliedLang !== lang) {
      currentAppliedLang = lang;
      try {
        var event = new CustomEvent('languageChanged', { detail: { language: lang, dictionary: dict } });
        window.dispatchEvent(event);
      } catch (e) {}
    }
  }

  function setLanguage(lang) {
    if (!lang || SUPPORTED_LANGUAGES.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(BACKUP_KEY, lang);
    } catch (e) {}
    translatePage(lang);
  }

  var updateLanguage = function(lang) {
    var targetLang = lang || getSelectedLanguage();
    translatePage(targetLang);
  };

  window.updateLanguage = updateLanguage;
  window.BetterCallHanaI18n = {
    translations: translations,
    supportedLanguages: SUPPORTED_LANGUAGES,
    getLanguage: getSelectedLanguage,
    setLanguage: setLanguage,
    translatePage: translatePage,
    updateLanguage: updateLanguage,
    refreshCache: refreshElementCache
  };

  var runInitialTranslate = function() {
    refreshElementCache();
    var initialLang = getSelectedLanguage();
    translatePage(initialLang);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runInitialTranslate, { passive: true, once: true });
  } else {
    runInitialTranslate();
  }

  // 🔴 FIX 3: Highly Optimized MutationObserver for iOS
  if (typeof MutationObserver !== 'undefined') {
    var observerTimeout = null;
    observer = new MutationObserver(function(mutations) {
      
      // ENGLISH FAST-PASS: If English is active, do absolutely nothing. Saves 100% CPU.
      var currentLang = getSelectedLanguage();
      if (!currentLang || currentLang === DEFAULT_LANG) return;

      var hasRelevantNodes = false;
      for (var m = 0; m < mutations.length; m++) {
        if (mutations[m].addedNodes && mutations[m].addedNodes.length > 0) {
          hasRelevantNodes = true;
          break;
        }
      }

      if (hasRelevantNodes) {
        if (observerTimeout) clearTimeout(observerTimeout);
        // GPU SYNC: Waits 250ms for pop-up animations to finish, then paints in one frame
        observerTimeout = setTimeout(function() {
          window.requestAnimationFrame(function() {
            refreshElementCache();
            translatePage(currentLang);
          });
        }, 250);
      }
    });

    resumeObserver();
    if (!isObserving) {
      document.addEventListener('DOMContentLoaded', function() {
        resumeObserver();
      }, { passive: true, once: true });
    }
  }

})();