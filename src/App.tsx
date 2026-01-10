import { HomePage } from "./Home"
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EmpireFusion } from "./Worldbuilding/EmpireFusion/EmpireFusion";


interface DefaultPageProps {
  icon: string;
  title: string;
  description?: string;
}

type ViewMode = 'grid' | 'list' | 'kanban' | 'timeline';
type TabType = 'all' | 'favorites' | 'recent' | 'archived';

export function DefaultPage({ icon, title, description }: DefaultPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Données mockées - à remplacer par de vraies données
  const stats = [
    { label: 'Total', value: 124, trend: '+12%', color: '#667eea' },
    { label: 'Actifs', value: 89, trend: '+8%', color: '#764ba2' },
    { label: 'En attente', value: 23, trend: '-3%', color: '#f093fb' },
    { label: 'Archivés', value: 12, trend: '0%', color: '#4facfe' }
  ];

  const items = [
    { id: 1, title: 'Élément 1', status: 'actif', priority: 'high', date: '2025-01-10', tags: ['important', 'urgent'] },
    { id: 2, title: 'Élément 2', status: 'en-attente', priority: 'medium', date: '2025-01-09', tags: ['normal'] },
    { id: 3, title: 'Élément 3', status: 'actif', priority: 'low', date: '2025-01-08', tags: ['backlog'] },
    { id: 4, title: 'Élément 4', status: 'actif', priority: 'high', date: '2025-01-07', tags: ['important'] },
    { id: 5, title: 'Élément 5', status: 'archivé', priority: 'medium', date: '2025-01-06', tags: ['done'] },
    { id: 6, title: 'Élément 6', status: 'actif', priority: 'low', date: '2025-01-05', tags: ['normal'] }
  ];

  return (
    <div className="default-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-top">
          <div className="header-title">
            <span className="page-icon-large">{icon}</span>
            <div>
              <h1>{title}</h1>
              {description && <p className="page-description">{description}</p>}
            </div>
          </div>
          <div className="header-actions">
            <button className="btn-secondary">
              <span>⚙️</span> Paramètres
            </button>
            <button className="btn-primary">
              <span>➕</span> Nouveau
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
              <div className="stat-header">
                <span className="stat-label">{stat.label}</span>
                <span className={`stat-trend ${stat.trend.startsWith('+') ? 'positive' : stat.trend.startsWith('-') ? 'negative' : 'neutral'}`}>
                  {stat.trend}
                </span>
              </div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <span>📋</span> Tous <span className="tab-count">124</span>
          </button>
          <button
            className={`tab ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            <span>⭐</span> Favoris <span className="tab-count">18</span>
          </button>
          <button
            className={`tab ${activeTab === 'recent' ? 'active' : ''}`}
            onClick={() => setActiveTab('recent')}
          >
            <span>🕐</span> Récents <span className="tab-count">32</span>
          </button>
          <button
            className={`tab ${activeTab === 'archived' ? 'active' : ''}`}
            onClick={() => setActiveTab('archived')}
          >
            <span>📦</span> Archivés <span className="tab-count">12</span>
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="toolbar-left">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select className="filter-select">
            <option>Tous les statuts</option>
            <option>Actif</option>
            <option>En attente</option>
            <option>Archivé</option>
          </select>
          <select className="filter-select">
            <option>Toutes les priorités</option>
            <option>Haute</option>
            <option>Moyenne</option>
            <option>Basse</option>
          </select>
        </div>
        <div className="toolbar-right">
          <div className="view-switcher">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Vue grille"
            >
              ⊞
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="Vue liste"
            >
              ☰
            </button>
            <button
              className={`view-btn ${viewMode === 'kanban' ? 'active' : ''}`}
              onClick={() => setViewMode('kanban')}
              title="Vue kanban"
            >
              ▦
            </button>
            <button
              className={`view-btn ${viewMode === 'timeline' ? 'active' : ''}`}
              onClick={() => setViewMode('timeline')}
              title="Vue timeline"
            >
              ⎯
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="page-content">
        {viewMode === 'grid' && <GridView items={items} />}
        {viewMode === 'list' && <ListView items={items} />}
        {viewMode === 'kanban' && <KanbanView items={items} />}
        {viewMode === 'timeline' && <TimelineView items={items} />}
      </div>
    </div>
  );
}

// Grid View
function GridView({ items }: { items: any[] }) {
  return (
    <div className="grid-view">
      {items.map((item) => (
        <div key={item.id} className="grid-card">
          <div className="card-header">
            <span className={`priority-badge priority-${item.priority}`}>
              {item.priority === 'high' ? '🔴' : item.priority === 'medium' ? '🟡' : '🟢'}
            </span>
            <div className="card-actions">
              <button className="icon-btn">⭐</button>
              <button className="icon-btn">⋮</button>
            </div>
          </div>
          <h3 className="card-title">{item.title}</h3>
          <div className="card-meta">
            <span className={`status-badge status-${item.status}`}>{item.status}</span>
            <span className="card-date">📅 {item.date}</span>
          </div>
          <div className="card-tags">
            {item.tags.map((tag: string) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="card-footer">
            <button className="btn-link">Voir détails →</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// List View
function ListView({ items }: { items: any[] }) {
  return (
    <div className="list-view">
      <div className="list-header">
        <div className="list-col">Titre</div>
        <div className="list-col">Statut</div>
        <div className="list-col">Priorité</div>
        <div className="list-col">Date</div>
        <div className="list-col">Actions</div>
      </div>
      {items.map((item) => (
        <div key={item.id} className="list-row">
          <div className="list-col">
            <span className="list-icon">📄</span>
            <span className="list-title">{item.title}</span>
          </div>
          <div className="list-col">
            <span className={`status-badge status-${item.status}`}>{item.status}</span>
          </div>
          <div className="list-col">
            <span className={`priority-badge priority-${item.priority}`}>
              {item.priority === 'high' ? '🔴 Haute' : item.priority === 'medium' ? '🟡 Moyenne' : '🟢 Basse'}
            </span>
          </div>
          <div className="list-col">{item.date}</div>
          <div className="list-col list-actions">
            <button className="icon-btn">👁️</button>
            <button className="icon-btn">✏️</button>
            <button className="icon-btn">🗑️</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Kanban View
function KanbanView({ items }: { items: any[] }) {
  const columns = [
    { id: 'actif', title: 'Actif', items: items.filter(i => i.status === 'actif') },
    { id: 'en-attente', title: 'En attente', items: items.filter(i => i.status === 'en-attente') },
    { id: 'archivé', title: 'Archivé', items: items.filter(i => i.status === 'archivé') }
  ];

  return (
    <div className="kanban-view">
      {columns.map((column) => (
        <div key={column.id} className="kanban-column">
          <div className="kanban-header">
            <h3>{column.title}</h3>
            <span className="kanban-count">{column.items.length}</span>
          </div>
          <div className="kanban-items">
            {column.items.map((item) => (
              <div key={item.id} className="kanban-card">
                <div className="kanban-card-header">
                  <span className={`priority-badge priority-${item.priority}`}>
                    {item.priority === 'high' ? '🔴' : item.priority === 'medium' ? '🟡' : '🟢'}
                  </span>
                </div>
                <h4>{item.title}</h4>
                <div className="kanban-card-tags">
                  {item.tags.map((tag: string) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="kanban-card-footer">
                  <span className="kanban-date">📅 {item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Timeline View
function TimelineView({ items }: { items: any[] }) {
  return (
    <div className="timeline-view">
      {items.map((item, index) => (
        <div key={item.id} className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot" />
            {index < items.length - 1 && <div className="timeline-line" />}
          </div>
          <div className="timeline-content">
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <h4>{item.title}</h4>
                <span className={`status-badge status-${item.status}`}>{item.status}</span>
              </div>
              <div className="timeline-card-body">
                <div className="timeline-meta">
                  <span className={`priority-badge priority-${item.priority}`}>
                    {item.priority === 'high' ? '🔴 Haute' : item.priority === 'medium' ? '🟡 Moyenne' : '🟢 Basse'}
                  </span>
                  <div className="timeline-tags">
                    {item.tags.map((tag: string) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


function Default_({}:{}) {
  console.log('Default loaded');
  return <DefaultPage title="Lol" description="y'a des jours où ça m'empoisonne" icon=""/>
}

export const App: React.FC = () => {
     return  <BrowserRouter>
      <Routes>
          <Route caseSensitive path="/" element={<HomePage />}/>
          <Route caseSensitive path="/" element={<Default_/>} />
          <Route caseSensitive path="/garde-robe/:category" element={<Default_/>} />
          <Route caseSensitive path="/bibliotheque" element={<Default_/>} />
          <Route caseSensitive path="/bibliotheque/:category" element={<Default_/>} />
          <Route caseSensitive path="/politique" element={<Default_/>} />
          <Route caseSensitive path="/politique/:category" element={<Default_/>} />
          <Route caseSensitive path="/worldbuilding" element={<EmpireFusion/>} />
          <Route caseSensitive path="/worldbuilding/:category" element={<Default_/>} />
          <Route caseSensitive path="/symboles" element={<Default_/>} />
          <Route caseSensitive path="/symboles/:category" element={<Default_/>} />
          <Route caseSensitive path="/outils-web" element={<Default_/>} />
          <Route caseSensitive path="/outils-web/:tool" element={<Default_/>} />
      </Routes>
    </BrowserRouter>
}