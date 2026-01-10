import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DefaultPage.css';
interface Domain {
  id: string;
  name: string;
  link:string,
  icon: string;
  gradient: string;
  description: string;
  categories: { name: string; icon: string }[];
  comingSoon?: boolean;
}

const DOMAINS: Domain[] = [
  {
    id: 'wardrobe',
    name: 'Garde-robe',
    link:"garde-robe",
    icon: '👗',
    gradient: 'from-purple-600 via-pink-500 to-rose-500',
    description: 'Cataloguez et organisez votre garde-robe personnelle',
    categories: [
      { name: 'Vêtements', icon: '👚' },
      { name: 'Chaussures', icon: '👠' },
      { name: 'Accessoires', icon: '👜' },
      { name: 'Collections', icon: '📚' },
    ],
  },
  {
    id: 'library',
    name: 'Bibliothèque',
        link:"bibliotheque",
    icon: '📚',
    gradient: 'from-amber-600 via-orange-500 to-red-600',
    description: 'Gérez votre collection de livres et lectures',
    categories: [
      { name: 'Romans', icon: '📖' },
      { name: 'BD & Manga', icon: '📕' },
      { name: 'Essais', icon: '📘' },
      { name: 'Listes', icon: '📋' },
    ],
    comingSoon: true,
  },
  {
    id: 'politics',
    name: 'Politique',
            link:"politique",
    icon: '🏛️',
    gradient: 'from-blue-600 via-indigo-500 to-purple-600',
    description: 'Suivez l\'actualité politique et vos élus',
    categories: [
      { name: 'Élus', icon: '👤' },
      { name: 'Partis', icon: '🎯' },
      { name: 'Actualités', icon: '📰' },
      { name: 'Analyses', icon: '📊' },
    ],
    comingSoon: true,
  },
  {
    id: 'worldbuilding',
    name: 'Worldbuilding',
            link:"worldbuilding",
    icon: '🌍',
    gradient: 'from-green-600 via-emerald-500 to-teal-600',
    description: 'Créez et organisez vos univers fictifs',
    categories: [
      { name: 'Personnages', icon: '👥' },
      { name: 'Lieux', icon: '🗺️' },
      { name: 'Histoires', icon: '📜' },
      { name: 'Timeline', icon: '⏳' },
    ],
    comingSoon: true,
  },
  {
    id: 'symbols',
    link:"symboles",
    name: 'Symboles',
    icon: '🛡️',
    gradient: 'from-yellow-600 via-amber-500 to-orange-600',
    description: 'Collection de symboles, blasons et emblèmes',
    categories: [
      { name: 'Héraldique', icon: '⚜️' },
      { name: 'Drapeaux', icon: '🏴' },
      { name: 'Monnaies', icon: '🪙' },
      { name: 'Symboles', icon: '☯️' },
    ],
    comingSoon: true,
  },
  {
    id: 'webtools',
    name: 'Outils Web',
    link:"outils-web",
    icon: '🔧',
    gradient: 'from-cyan-600 via-sky-500 to-blue-600',
    description: 'Utilitaires pratiques pour le web',
    categories: [
      { name: 'Couleurs', icon: '🎨' },
      { name: 'Conversions', icon: '🔄' },
      { name: 'Download', icon: '⬇️' },
      { name: 'Générateurs', icon: '✨' },
    ],
    comingSoon: true,
  },
];

export const HomePage: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleClick = (id: string, comingSoon?: boolean) => {
    if (comingSoon) {
      alert('Bientôt disponible ! 🚀');
      return;
    }
    window.location.hash = id;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  Atlas Personnel
                </h1>
                <p className="text-slate-400 text-lg">
                  Votre centre de commande pour organiser tout ce qui compte
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">Version</p>
                <p className="text-lg font-bold text-slate-300">2.0.0</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Stats */}
          <div className="grid grid-cols-5 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Total Items</p>
                  <p className="text-3xl font-bold text-white">0</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <span className="text-3xl">📚</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Collections</p>
                  <p className="text-3xl font-bold text-white">0</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl border border-green-500/30 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Domaines actifs</p>
                  <p className="text-3xl font-bold text-white">1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Vos Domaines</h2>
          </div>

          {/* Domains grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOMAINS.map((domain) => (
              <Link
              to={domain.link}
                key={domain.id}
                // onClick={() => handleClick(domain.id, domain.comingSoon)}
                onMouseEnter={() => setHovered(domain.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-slate-600 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {domain.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-bold rounded-full backdrop-blur-sm">
                      Bientôt
                    </span>
                  </div>
                )}

                <div className="relative p-8">
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}>
                      <span className="text-5xl">{domain.icon}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {domain.name}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {domain.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-700/50">
                      {domain.categories.map((cat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                        >
                          <span>{cat.icon}</span>
                          <span className="truncate">{cat.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${domain.gradient} flex items-center justify-center shadow-lg`}>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>

      <style>{`
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};