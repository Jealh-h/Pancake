import i18n from 'i18next';
import { useCallback, useState } from 'react';

const langs = ['zh', 'en', 'jp'];

export default function useLang(): [string, Function] {
  const [lang, setLang] = useState('zh');
  const memoCallback = useCallback(() => {
    const index = langs.indexOf(lang);

    const Lg = langs[(index + 1) % langs.length];
    setLang(Lg);

    i18n.changeLanguage(Lg);
  }, [lang])

  return [lang, memoCallback];
}