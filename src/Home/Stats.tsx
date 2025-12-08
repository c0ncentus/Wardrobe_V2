          
          function StatsItem(props:{emogi:string, title:string, num:number}){
            const  {emogi, num,title}  = props;
            return <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <span className="text-3xl">📚</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400">{title}</p>
                  <p className="text-3xl font-bold text-white">{num}</p>
                </div>
              </div>
            </div>
          }
          
          
          
          
          
          
          export const Stats: React.FC = () => {
          
          return <div className="grid grid-cols-5 gap-6 mb-12">
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
          }
