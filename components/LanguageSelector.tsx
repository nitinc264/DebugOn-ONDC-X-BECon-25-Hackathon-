import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types';

interface Props {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'mr', name: 'मराठी' },
  { code: 'bn', name: 'বাংলা' },
] as const;

export function LanguageSelector({ currentLanguage, onLanguageChange }: Props) {
  return (
    <div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm">
      <Languages className="w-5 h-5 text-gray-600 hidden sm:block" />
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-transparent border-none focus:outline-none text-gray-700 text-sm sm:text-base pr-6"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}