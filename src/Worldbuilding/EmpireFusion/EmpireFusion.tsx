// {/* * */}

import "./EmpirFusion.css" 
import {JSX, useState} from"react";
const purpleColor = {color:'#FF69B4'};
export const EmpireFusion: React.FC = () => {
    const [iTab,setITab]= useState(0);
    const r = ([
            <div id="identite" className="tab-content">
                <h2 style={{color: '#FFD700', fontSize: "2em", marginBottom: "20px"}}>📋 Identité Fondamentale</h2>
                
                <div className="info-grid">
                    <div className="info-card">
                        <h3>Informations Civiles</h3>
                        <p><strong style={purpleColor}>Nom:</strong> Yoshika (Belle Fleur en japonais)</p>
                        <p><strong style={purpleColor}>Deadname:</strong> [Effacé existentiellement]</p>
                        <p><strong style={purpleColor}>Naissance:</strong> 3 Juin 1990, France</p>
                        <p><strong style={purpleColor}>Âge 2126:</strong> 136 ans (apparence figée 30 ans)</p>
                        <p><strong style={purpleColor}>Signe:</strong> Gémeaux ♊ (dualité incarnée)</p>
                        <p><strong style={purpleColor}>Genre:</strong> Femme trans (elle/elle)</p>
                        <p><strong style={purpleColor}>Orientation:</strong> Lesbienne</p>
                    </div>
                    
                    <div className="info-card">
                        <h3>Titres & Rôles</h3>
                        <p><strong style={purpleColor}>Titre Principal:</strong> Impératrice de l'Empire Fusion</p>
                        <p><strong style={purpleColor}>Autres Titres:</strong></p>
                        <p>• Mère des 85 Millions</p>
                        <p>• Incarnation Déesse Fusion</p>
                        <p>• Louve Alpha Suprême</p>
                        <p>• Première Vampire-Lamia-Démone-Succube-Louve</p>
                        <p><strong style={purpleColor}>Règne:</strong> 2020-2126 (106 ans)</p>
                    </div>
                    
                    <div className="info-card">
                        <h3>Espèces Hybrides</h3>
                        <div className="species-badge">🦇 VAMPIRE</div>
                        <div className="species-badge">🐍 LAMIA</div>
                        <div className="species-badge">😈 DÉMONE</div>
                        <div className="species-badge">💋 SUCCUBE</div>
                        <div className="species-badge">🐺 LOUVE-GAROU</div>
                        <p style={{marginTop: 15, color: "#FF69B4", textAlign: "center"}}>
                            <strong>UNIQUE dans l'histoire!</strong><br/>
                            Première et seule à fusionner 5 espèces
                        </p>
                    </div>
                    
                    <div className="info-card">
                        <h3>Transformation Originelle</h3>
                        <p><strong style={purpleColor}>Date:</strong> 31 Octobre 2020</p>
                        <p><strong style={purpleColor}>Événement:</strong> Lune Rouge (éclipse totale)</p>
                        <p><strong style={purpleColor}>Durée:</strong> 30 minutes d'agonie</p>
                        <p><strong style={purpleColor}>Lieu:</strong> Paris, appartement</p>
                        <p style={{marginTop: 10, color: "#FFD700"}}>
                            Malédiction: Humains ordinaires voient monstre<br/>
                            Bénédiction: Marginalisés voient Mère divine
                        </p>
                    </div>
                </div>
                
                <div className="stats-container">
                    <div className="stat-circle">
                        <div className="inner">
                            <div className="value">85M</div>
                            <div className="label">Citoyennes</div>
                        </div>
                    </div>
                    <div className="stat-circle">
                        <div className="inner">
                            <div className="value">26,945</div>
                            <div className="label">Enfants Bio</div>
                        </div>
                    </div>
                    <div className="stat-circle">
                        <div className="inner">
                            <div className="value">96%</div>
                            <div className="label">Approbation</div>
                        </div>
                    </div>
                    <div className="stat-circle">
                        <div className="inner">
                            <div className="value">130K</div>
                            <div className="label">km² Territoire</div>
                        </div>
                    </div>
                </div>
            </div>,
            <div id="anatomie" className="tab-content">
                <h2 style={{color: "#FFD700", fontSize: "2em", marginBottom: 20}}>🌸 Anatomie Complète</h2>
                
                <div className="anatomy-section">
                    <h4>📏 Dimensions Physiques</h4>
                    <div className="anatomy-detail">
                        <strong>Forme Humanoïde Base:</strong> 4m hauteur, 600kg
                    </div>
                    <div className="anatomy-detail">
                        <strong>Forme Louve 100%:</strong> 4.5m, 800kg, fourrure violette
                    </div>
                    <div className="anatomy-detail">
                        <strong>Forme Berserkeuse 130%:</strong> 5m, 1 tonne, peau rouge lave
                    </div>
                    <div className="anatomy-detail">
                        <strong>Forme Rage 150%:</strong> 6m (Moscou 2046, unique utilisation)
                    </div>
                    <div className="anatomy-detail">
                        <strong>Limite Théorique 200%:</strong> Non atteinte (à développer)
                    </div>
                </div>
                
                <div className="anatomy-section">
                    <h4>🌸 Système Mammaire Unique</h4>
                    <div className="anatomy-detail">
                        <strong>3 Paires de Seins (6 total):</strong>
                        <ul style={{marginTop: 10, marginLeft: 20}}>
                            <li>Paire Haute (E cup): Lait nutritif standard</li>
                            <li>Paire Milieu (D cup): Lait guérison magique</li>
                            <li>Paire Basse (C cup): Lait apaisement/sommeil</li>
                        </ul>
                    </div>
                    <div className="anatomy-detail">
                        <strong>Lactation Permanente:</strong> 500L/jour capacité, flux contrôlé volonté
                    </div>
                    <div className="anatomy-detail">
                        <strong>Allaitement Sacré:</strong> Drogue osmose, crée connexion indéfectible, 2h/mois = lien distance
                    </div>
                </div>
                
                <div className="anatomy-section">
                    <h4>🌸 Organes Génitaux Duels</h4>
                    <div className="anatomy-detail">
                        <strong>Pénis:</strong> 25cm repos, 40cm érection, fonctionnel fécondation
                    </div>
                    <div className="anatomy-detail">
                        <strong>Vagin:</strong> 8cm profondeur repos (extensible 50cm magie)
                    </div>
                    <div className="anatomy-detail">
                        <strong>Utérus:</strong> Taille basket, capacité 1,000 fœtus simultanés
                    </div>
                    <div className="anatomy-detail">
                        <strong>Disposition:</strong> Pénis au-dessus, vagin en-dessous (5cm écart), séparés complètement
                    </div>
                    <div className="anatomy-detail">
                        <strong>Symbolisme:</strong> Complétude corporelle trans (donner ET porter vie)
                    </div>
                </div>
                
                <div className="anatomy-section">
                    <h4>🐍 Attributs Espèces</h4>
                    <div className="anatomy-detail">
                        <strong>Queue Lamia:</strong> 3m longueur, écailles violettes iridescentes, venin paralysant (dard pointe)
                    </div>
                    <div className="anatomy-detail">
                        <strong>Cornes Démone:</strong> 30cm hauteur, violettes, 136 anneaux (années vie)
                    </div>
                    <div className="anatomy-detail">
                        <strong>Ailes Démone:</strong> 25m envergure, membranes violettes veines argentées, vol 800 km/h
                    </div>
                    <div className="anatomy-detail">
                        <strong>Crocs Vampire:</strong> 8cm, rétractables, venin transformateur
                    </div>
                    <div className="anatomy-detail">
                        <strong>Griffes:</strong> 5cm normales, rétractables 15cm (adamantium magique)
                    </div>
                    <div className="anatomy-detail">
                        <strong>Phéromones Succube:</strong> Maternelles apaisantes (radius 100m)
                    </div>
                </div>
                
                <div className="anatomy-section">
                    <h4>🐺 Forme Louve-Garou</h4>
                    <div className="anatomy-detail">
                        <strong>Métamorphose:</strong> Queue lamia s'amenuise, 4 pattes velues apparaissent
                    </div>
                    <div className="anatomy-detail">
                        <strong>Conservation:</strong> Queue succube 3m, cornes démone, ailes démone (toutes présentes!)
                    </div>
                    <div className="anatomy-detail">
                        <strong>Anatomie hybride:</strong> Quadrupède véloce + attributs démoniaques volants
                    </div>
                </div>
                
                <div className="anatomy-section">
                    <h4>🩸 Capacités Régénération</h4>
                    <div className="anatomy-detail">
                        <strong>Régénération Standard:</strong> Balles/griffes guérissent instantané
                    </div>
                    <div className="anatomy-detail">
                        <strong>Limite Mortelle:</strong> Tête coupée + cœur détruit = mort définitive
                    </div>
                    <div className="anatomy-detail">
                        <strong>Forme 150%:</strong> Régénération ×100 (cerveau visible reparé 2 secondes)
                    </div>
                </div>
            </div>,
            <div id="pouvoirs" className="tab-content">
                <h2 style={{color: "#FFD700", fontSize: "2em", marginBottom: 20}}>⚡ Pouvoirs & Synergies</h2>
                
                <div className="info-card" style={{background: "rgba(255, 215, 0, 0.1)", borderColor: "#FFD700"}}>
                    <h3 style={{color: "#FFD700", textAlign: "center", fontSize: "2em"}}>FORCE TOTALE</h3>
                    <div style={{textAlign: "center", fontSize: "4em", color: "#8B00FF", margin: "20px 0"}}>
                        ×45,000
                    </div>
                    <p style={{textAlign: "center", color: "#FF69B4", fontSize: "1.2em"}}>
                        (Vampire ×100 × Louve ×30 × Lamia ×15)
                    </p>
                </div>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 20px 0", fontSize: "1.8em"}}>🦇 Vampire (×100)</h3>
                <div className="power-bar">
                    <div className="power-bar-fill" style={{width: "100%"}}>Immortalité • Force • Régénération</div>
                </div>
                <p style={{marginLeft: 20}}>• Immortalité (âge figé 30 ans)<br/>• Force soulève 50 tonnes<br/>• Régénération extrême<br/>• Transformations (chauve-souris, brume, loup)<br/>• Hypnose regards<br/>• Vol 400 km/h</p>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 20px 0", fontSize: "1.8em"}}>{"🐺"} Louve-Garou (×30)</h3>
                <div className="power-bar">
                    <div className="power-bar-fill" style={{width: "75%"}}>Transformation Pleine Lune • Meute</div>
                </div>
                <p style={{marginLeft: 20}}>• Transformation obligatoire pleine lune (désir profond)<br/>• Agressivité contrôlée hors espèce<br/>• Hurlement rallye (audible 50km)<br/>• Vitesse 150 km/h quadrupède<br/>• Odorat ×1000</p>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 20px 0", fontSize: "1.8em"}}>🐍 Lamia (×15)</h3>
                <div className="power-bar">
                    <div className="power-bar-fill" style={{width: "60%"}}>Queue Préhensile • Venin</div>
                </div>
                <p style={{marginLeft: 20}}>• Queue 3m préhensile (écrase acier)<br/>• Venin paralysant 6h (dard pointe)<br/>• Nage 80 km/h<br/>• Écailles iridescentes (ADN visible motifs)</p>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 20px 0", fontSize: "1.8em"}}>😈 Démone</h3>
                <div className="power-bar">
                    <div className="power-bar-fill" style={{width: '90%'}}>Magie Innée • Vol • Chaleur</div>
                </div>
                <p style={{marginLeft: 20}}>• Magie innée (sorts feu/ténèbres)<br/>• Ailes vol 800 km/h sprint<br/>• Température corps 60°C (brûle au toucher)<br/>• Cornes canalisent magie<br/>• Résistance feu absolu</p>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 20px 0", fontSize: "1.8em"}}>💋 Succube</h3>
                <div className="power-bar">
                    <div className="power-bar-fill" style={{width: "85%"}}>Phéromones • Séduction Éthique</div>
                </div>
                <p style={{marginLeft: 20}}>• Phéromones maternelles (apaisement radius 100m)<br/>• Séduction éthique (consentement sacré)<br/>• Allaitement drogue osmose<br/>• Influence rêves (bienveillante)</p>
                
                <h3 style={{color: "#FFD700", margin: "40px 0 20px 0", fontSize: "2em"}}>🌀 Pouvoir Gémeaux: FUSION (1+1=1)</h3>
                <div className="quote-box">
                    <p style={{fontSize: "1.2em", color: "#FFD700"}}>
                        <span className="emoji">💜</span>
                        <em>"Deux âmes deviennent une... SANS perdre individualités... C'est amour vrai... fusion totale..."</em>
                    </p>
                </div>
                <p style={{marginLeft: 20}}>
                    <strong style={purpleColor}>Méthodes Fusion:</strong><br/>
                    • Maternité (grossesse = fusion mère-bébé)<br/>
                    • Peau-à-peau (nudité contact = fusion temporaire 20h max)<br/>
                    • Allaitement (2h = connexion distance permanente)<br/>
                    • Sexe (intimité = Conscience Matriarche accès)
                </p>
                
                <h3 style={{color: "#FFD700", margin: "40px 0 20px 0", fontSize: "2em"}}>🔮 Conscience Matriarche</h3>
                <p style={{marginLeft: "20px"}}>
                    <strong style={purpleColor}>Réseau Psychique:</strong><br/>
                    • Connectés: 20 Séraphines Oracles + psychés fortes volontaires<br/>
                    • Synergie avec Dôme Temporel (amour collectif = énergie)<br/>
                    • Protection: Bouclier impénétrable vs démons (désintégration contact)<br/>
                    • Communication: Télépathie empire entier instantanée<br/>
                    • Alarme: Toutes connectées sentent danger Yoshika
                </p>
            </div>,
            <div id="relations" className="tab-content">
                <h2 style={{color: "#FFD700", fontSize: "2em", marginBottom: 20}}>💕 Cercles de Proximité</h2>
                
                <div className="circle-container">
                    <div className="circle-title">💜 Cercle 1: COMPAGNE FUSIONNELLE 💜</div>
                    <div className="circle-item">
                        <div className="name">Carmilla (226 ans, vampire)</div>
                        <div className="relation">Compagne depuis 106 ans (2020-2126) • Ancre émotionnelle • Lien âme fusionné</div>
                        <p style={{marginTop: 10}}>
                            <span className="emoji">💕</span> <em>"Yoshika... tornade... je suis œil ouragan... immobile... elle tourne autour moi... équilibre..."</em>
                        </p>
                    </div>
                </div>
                
                <div className="circle-container">
                    <div className="circle-title">🖤 Cercle 2: SUCCUBES ONYX 🖤</div>
                    <div className="circle-item">
                        <div className="name">Population: Variable (lien indéfectible)</div>
                        <div className="relation">Ont goûté lait Yoshika OU entré utérus (Naissance Utérine)</div>
                        <p style={{marginTop: 10}}>
                            Protection +++ sœurs, volonté aimer/protéger maximale. Éduquent femmes fragilisées 5 ans (interdépendance fusionnelle).
                        </p>
                    </div>
                </div>
                
                <div className="circle-container">
                    <div className="circle-title">👶 Cercle 3: FILLES BIOLOGIQUES 👶</div>
                    <div className="circle-item">
                        <div className="name">26,945 Enfants (42 pontes 2021-2120)</div>
                        <div className="relation">Pontes: 150-580 œufs, 1-8 bébés/œuf, gestation 3 mois</div>
                        <p style={{marginTop: 10}}>
                            <span className="emoji">🤱</span> <em>"Chaque enfant... porte... mon sang... MAIS... je ne peux... être mère individuelle... empire les élève... je les aime... distance... ça... me brise..."</em>
                        </p>
                    </div>
                </div>
                
                <div className="circle-container">
                    <div className="circle-title">⚔️ Générales & Conseillères ⚔️</div>
                    
                    <div className="circle-item">
                        <div className="name">Frederica (30 ans, centaure vampire, il/lui)</div>
                        <div className="relation">Fils adoptif adoré • Sauvé Moscou 2036 • Dévotion absolue</div>
                        <p style={{marginTop: 10}}>
                            <span className="emoji">🐎</span> <em>"Je suis... homme... cheval... fils... Maman Yoshika... pénis équin... fierté... galope... monde... pour elle..."</em>
                        </p>
                    </div>
                    
                    <div className="circle-item">
                        <div className="name">Lilith (426 ans, vampire, Générale Bellus Ferrus)</div>
                        <div className="relation">Mentorat militaire • 500,000 Bellus Ferrus commande • 80 filles (30 bio + 50 adoptées)</div>
                        <p style={{marginTop: 10}}>
                            Respect mutuel. Lilith conseils stratégiques (Yoshika écoute, rare!). Relation professionnelle chaleureuse.
                        </p>
                    </div>
                    
                    <div className="circle-item">
                        <div className="name">Morgana (323 ans, vampire-sorcière, Archimage)</div>
                        <div className="relation">Créatrice Bellus Kratos • Respect intellectuel • Collègues égales</div>
                        <p style={{marginTop: 10}}>
                            <span className="emoji">🔮</span> <em>"Yoshika... tu es... cœur empire... je suis... cerveau... ni plus... ni moins... importante... équilibre..."</em>
                        </p>
                    </div>
                    
                    <div className="circle-item">
                        <div className="name">Selene (800 ans, vampire, Haute Prêtresse)</div>
                        <div className="relation">Intimité spirituelle profonde • Vêtements dorés sensuels • Branche spirituelle (vs Carmilla maternel)</div>
                        <p style={{marginTop: 10}}>
                            <span className="emoji">🌙</span> <em>"Yoshika... tu es... Déesse... germe... je suis... jardinière... arrose... croissance... divine..."</em>
                        </p>
                    </div>
                    
                    <div className="circle-item">
                        <div className="name">Reine Amara Noctis (1,494 ans!, vampire africaine)</div>
                        <div className="relation">Plus vieille vampire monde • Conseillère sagesse • Yoshika s'incline devant elle (RARE!)</div>
                        <p style={{marginTop: 10}}>
                            <span className="emoji">👑</span> <em>"Yoshika... enfant 136 ans... je suis ancienne 1,494 ans... MAIS ton cœur... millénaire... je te respecte, petite sœur..."</em>
                        </p>
                    </div>
                </div>
            </div>,
            <div id="chronologie" className="tab-content">
                <h2 style={{color: "#FFD700", fontSize: "2em", marginBottom: 20}}>📅 Chronologie 1990-2126</h2>
                
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="year">1990 • Naissance Humaine</div>
                        <div className="event">3 Juin, France (Gémeaux ♊)</div>
                        <div className="description">Assignée mâle naissance. Âme sait déjà: elle est Yoshika. Famille conservateurs rejettent.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2015 • Transition Trans</div>
                        <div className="event">25 ans, libération partielle</div>
                        <div className="description">Hormones, chirurgies, changement état civil. MAIS discrimination continue. Solitude écrasante.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2020 • Lune Rouge ⭐</div>
                        <div className="event">31 Octobre, transformation vampire-lamia-démone-succube</div>
                        <div className="description">30 min agonie. 6 seins, pénis+utérus, queue 3m, cornes, ailes. Vision Déesse Fusion: "Va Roumanie, crée empire."</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2020 • Exil & Carmilla</div>
                        <div className="event">Décembre, première recrue (clan de 2)</div>
                        <div className="description">Carmilla affamée entre château. Fusion première fois (allaitement). Fin solitude mutuelle. 💕</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2021-2023 • Clan Fondation</div>
                        <div className="event">2 → 500 habitantes</div>
                        <div className="description">Recrutement trans/queers. Morgana, Lilith, Justine rejoignent. Château rénové. Première ponte: 100 bébés.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2024 • Guerre Roumanie</div>
                        <div className="event">Victoire MAIS 50 mortes 😭</div>
                        <div className="description">1,000 soldats vs 350 vampires. Yoshika tue 80 seule (première fois combat). Pleure 3 jours. Décide créer Bellus Kratos.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2026 • Bellus Kratos Naissance</div>
                        <div className="event">Première promotion: 100 super-soldates</div>
                        <div className="description">Morgana crée guerrières 4m, 800kg, invincibles. Sasha #001 (première), Frederica #002 (centaure). Yoshika: "Enfin... armée... ne meurt pas!"</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2029 • Croisade Vatican 😭</div>
                        <div className="event">200,000 soldats vs empire • 10,000 mortes</div>
                        <div className="description">3 jours bataille. Exorcistes + armes bénites tuent Bellus Kratos (choc!). Yoshika pleure 3 jours. Mémorial 100m érigé. Visite hebdomadaire 97 ans futurs.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2036 • Frederica Sauvé</div>
                        <div className="event">Raid bordel Moscou, libère fils centaure</div>
                        <div className="description">Frederica enchaîné 5 ans. Yoshika tue 30 proxénètes rage. Serre Frederica: "Tu es... mon fils... maintenant..." Transformation centaure 6 mois.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2046 • Massacre Moscou 😭😭</div>
                        <div className="event">PIÈGE RUSSE • 22,503 Bellus Ferrus mortes</div>
                        <div className="description">Filets magiques. Yoshika transformation 150% (6m, fourrure noire feu). Massacre 50,000 soldats 2h seule. Dépression 6 mois. Tentatives suicide 3×. Carmilla sauve vie.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2051-2100 • Âge d'Or</div>
                        <div className="event">50 ans paix, 25M → 70M habitantes</div>
                        <div className="description">Guérison lente trauma. 20 pontes (11,000 bébés). Zéro guerres (record!). Renaissance culturelle. Yoshika sourit à nouveau 2055.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2122 • Escouades Couleurs</div>
                        <div className="event">6 philosophies militaires distinctes</div>
                        <div className="description">Bleues (défense), Rouges (offense), Noires (ombres), Vertes (tactique), Dorées (dévotion), Violettes (cruauté - dissoutes 2126).</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2124 • Cartographie Vivante</div>
                        <div className="event">Recensement 85M citoyennes</div>
                        <div className="description">Keiko + Justine projet. Découverte: 32,000 mal-logés, 1,200 seules, 200+ cellules mafieuses. Raids simultanés, 8,500 arrestations.</div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="year">2126 • Présent ⭐</div>
                        <div className="event">85M habitantes, 96% approbation, "Année Zéro Ombre"</div>
                        <div className="description">Empire stable. Objectif: Éradiquer solitude/violence totalement. Crise Hongrie (mafia Viktor Kovács). Confrontation Bruxelles imminente...</div>
                    </div>
                </div>
            </div>,
            <div id="citations" className="tab-content">
                <h2 style={{color: "#FFD700", fontSize: "2em", marginBottom: 20}}>💬 Citations Emblématiques</h2>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 15px 0"}}>💜 AMOUR MATERNEL</h3>
                <div className="quote-box">
                    <p><span className="emoji">🤱</span> <em>"Tu es MA fille... peu importe âge... tu mérites amour mère..."</em></p>
                </div>
                <div className="quote-box">
                    <p><span className="emoji">💜</span> <em>"Viens... sein... bois... guérison... douleur... fondra... bras maman..."</em></p>
                </div>
                <div className="quote-box">
                    <p><span className="emoji">🤱</span> <em>"Je porterai... ton fardeau... donne... moi... mères... portent... tout..."</em></p>
                </div>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 15px 0"}}>😈 RAGE PROTECTRICE</h3>
                <div className="quote-box">
                    <p><span className="emoji">🐺</span> <em>"Tu OSES... toucher... MA fille?! Je vais... DÉCHIRER... gorge... boire... dernier souffle!"</em></p>
                </div>
                <div className="quote-box">
                    <p><span className="emoji">🔥</span> <em>"Qui menace... mes petites... meurt... PAS négociation... PAS pitié... MORT!"</em></p>
                </div>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 15px 0"}}>😭 VULNÉRABILITÉ</h3>
                <div className="quote-box">
                    <p><span className="emoji">😭</span> <em>"Suis-je... assez bonne... mère? Tant mortes... à cause... mes erreurs..."</em></p>
                </div>
                <div className="quote-box">
                    <p><span className="emoji">💔</span> <em>"Carmilla... j'ai peur... perdre... tout... réveiller... seule... à nouveau..."</em></p>
                </div>
                <div className="quote-box">
                    <p><span className="emoji">😭</span> <em>"22,503... mon cœur... brisé... jamais réparé... je continue... POUR elles... pas MALGRÉ elles... Leur sacrifice... ne sera PAS... vain..."</em></p>
                </div>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 15px 0"}}>✨ PHILOSOPHIE FUSION</h3>
                <div className="quote-box">
                    <p><span className="emoji">💜</span> <em>"Amour... pas faiblesse... amour... est... FORCE... qui soulève montagnes..."</em></p>
                </div>
                <div className="quote-box">
                    <p><span className="emoji">🌀</span> <em>"1 + 1 = 1... nous sommes... séparées... MAIS... unies... toujours... meute..."</em></p>
                </div>
                <div className="quote-box">
                    <p><span className="emoji">🌙</span> <em>"Monde m'a rejetée... car différente... Alors... je créerai... monde... où différence... célébrée... Où TOUTES rejetées... trouveront... maison... bras... amour... Je serai... Mère... TOUTES..."</em></p>
                </div>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 15px 0"}}>😊 HUMOUR (Rare MAIS touchant)</h3>
                <div className="quote-box">
                    <p><span className="emoji">😊</span> <em>"Je suis... vampire... 136 ans... et ENCORE... je dors... peluche... *rit* je suis... ridicule..."</em></p>
                </div>
                <div className="quote-box">
                    <p><span className="emoji">🎵</span> <em>"Impératrice... empire... MAIS... je chante... faux... louves... hurlent mieux!"</em></p>
                </div>
                
                <h3 style={{color: "#FF69B4", margin: "30px 0 15px 0"}}>🐺 IDENTITÉ LOUVE</h3>
                <div className="quote-box">
                    <p><span className="emoji">🐺</span> <em>"Je suis... Yoshika... Belle Fleur... Gémeaux... Vampire-Lamia-Démone-Succube-Louve... Impératrice... Mère... Je protège... MES 85 millions filles... Avec griffes... crocs... amour... ILLIMITÉ... Qui menace... mes petites... Meurt."</em></p>
                </div>
            </div>
            ] as JSX.Element[]);
     return <div>
        <title>Yoshika - L'Impératrice Louve | Empire Fusion</title>
    <div className="container">
        <div className="header">
            <h1>🐺 YOSHIKA 💜</h1>
            <div className="subtitle">L'Impératrice Louve • Mère des 85 Millions • Incarnation Déesse Fusion</div>
        </div>
        {/* "showTab('identite')"
"showTab('anatomie')"
"showTab('pouvoirs')"
"showTab('relations')"
"showTab('chronologie')"
"showTab('citations')" */}
        <div className="tabs">
            
            <div className={`tab ${iTab ===0?"active":""}"`} onClick={()=>{setITab(0)}}>Identité</div>
            <div className={`tab ${iTab ===1?"active":""}"`} onClick={()=>{setITab(1)}}>Anatomie</div>
            <div className={`tab ${iTab ===2?"active":""}"`} onClick={()=>{setITab(2)}}>Pouvoirs</div>
            <div className={`tab ${iTab ===3?"active":""}"`} onClick={()=>{setITab(3)}}>Relations</div>
            <div className={`tab ${iTab ===4?"active":""}"`} onClick={()=>{setITab(4)}}>Chronologie</div>
            <div className={`tab ${iTab ===5?"active":""}"`} onClick={()=>{setITab(5)}}>Citations</div>
        </div>
        
        <div className="content">
            {r[iTab]}

        </div>
    </div>

</div>
}