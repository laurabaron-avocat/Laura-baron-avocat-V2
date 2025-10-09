'use client';

import { useEffect, useState } from 'react';
import { supabase, isConfigured } from '@/lib/supabase';

export default function RealtimeTest() {
  const [status, setStatus] = useState<string>('🔄 Test en cours...');
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    console.log(message);
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  useEffect(() => {
    const testRealtime = async () => {
      addLog('🔧 Début test Realtime');

      // Test 1: Configuration Supabase
      if (!supabase || !isConfigured) {
        setStatus('❌ Supabase non configuré');
        addLog('❌ Supabase non configuré dans .env.local');
        return;
      }
      addLog('✅ Supabase configuré');

      // Test 2: Connexion base
      try {
        const { data, error, count } = await supabase
          .from('posts')
          .select('id', { count: 'exact' })
          .limit(1);

        if (error) {
          setStatus('❌ Erreur connexion DB');
          addLog(`❌ Erreur connexion: ${error.message}`);
          return;
        }
        addLog(`✅ Connexion DB OK - ${count || 0} posts trouvés`);
      } catch (err) {
        setStatus('❌ Erreur réseau');
        addLog(`❌ Erreur réseau: ${err}`);
        return;
      }

      // Test 3: WebSocket Realtime
      addLog('🔌 Test connexion WebSocket...');

      const channel = supabase
        .channel('test_realtime')
        .on('postgres_changes',
          { event: '*', schema: 'public', table: 'posts' },
          (payload) => {
            addLog(`🔥 REALTIME REÇU: ${payload.eventType} - ${JSON.stringify(payload.new || payload.old)}`);
            setStatus('✅ Realtime FONCTIONNE !');
          }
        )
        .subscribe((status) => {
          addLog(`📡 WebSocket status: ${status}`);
          if (status === 'SUBSCRIBED') {
            setStatus('✅ WebSocket connecté - En attente de changements...');
            addLog('✅ WebSocket connecté ! Modifiez un article dans Supabase pour tester');
          } else if (status === 'CHANNEL_ERROR') {
            setStatus('❌ Erreur WebSocket');
            addLog('❌ Erreur WebSocket - Vérifiez le script SQL Realtime');
          }
        });

      // Cleanup
      return () => {
        supabase.removeChannel(channel);
      };
    };

    testRealtime();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 max-h-96 overflow-y-auto">
      <div className="mb-2">
        <h3 className="font-bold text-sm">🔍 Test Realtime</h3>
        <p className="text-sm text-gray-600">{status}</p>
      </div>

      <div className="space-y-1 text-xs">
        {logs.map((log, i) => (
          <div key={i} className="font-mono text-gray-700 bg-gray-50 p-1 rounded">
            {log}
          </div>
        ))}
      </div>

      {status.includes('En attente') && (
        <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs">
          💡 <strong>Test:</strong> Allez dans Supabase → Table "posts" → Modifiez un titre
        </div>
      )}

      {status.includes('❌') && (
        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-xs">
          🚨 <strong>Problème détecté:</strong> {status}
        </div>
      )}
    </div>
  );
}