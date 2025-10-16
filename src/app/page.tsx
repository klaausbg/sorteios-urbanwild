"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);
  const [winners, setWinners] = useState<string[]>([]);
  const [drawDone, setDrawDone] = useState(false);
  const [nextDrawDate, setNextDrawDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const prizes = [500, 300, 200, 100, 50]; // valores dos prêmios
  const isTestMode = true; // 👉 true = modo teste (30s) | false = produção (sorteio real)

  // Função para sortear X vencedores
 function drawWinners(numWinners: number) {
  if (participants.length === 0) return;

  // embaralha e remove duplicatas de ganhadores
  const shuffled = [...participants].sort(() => 0.5 - Math.random());

  const uniqueWinners: string[] = [];
  for (const name of shuffled) {
    if (!uniqueWinners.includes(name)) {
      uniqueWinners.push(name);
    }
    if (uniqueWinners.length >= numWinners) break;
  }

  const selected = uniqueWinners.map((p, i) => {
    const prize = prizes[i] ? ` - R$${prizes[i]}` : "";
    return `${p}${prize}`;
  });

  setWinners(selected);
  setDrawDone(true);

 // 🕒 Salva vencedores e hora do sorteio no localStorage
  localStorage.setItem("winners", JSON.stringify(selected));
  localStorage.setItem("drawTime", new Date().toISOString());


}



// ✅ Recuperar ganhadores do localStorage se ainda estiver dentro de 3h
useEffect(() => {
  const savedWinners = localStorage.getItem("winners");
  const savedDrawTime = localStorage.getItem("drawTime");

  if (savedWinners && savedDrawTime) {
    const drawDate = new Date(savedDrawTime);
    const now = new Date();
    const diffHours = (now.getTime() - drawDate.getTime()) / (1000 * 60 * 60);

    if (diffHours < 24) {
      // Ainda dentro do período de 3 horas → mostra vencedores
      setWinners(JSON.parse(savedWinners));
      setDrawDone(true);
    } else {
      // Passou das 3h → limpa localStorage e reinicia sorteio
      localStorage.removeItem("winners");
      localStorage.removeItem("drawTime");
      setWinners([]);
      setDrawDone(false);
    }
  }
}, []);
  // Timer
  useEffect(() => {

    let endTime: number;
    const now = new Date();

    if (isTestMode) {
      // Modo teste → 30s
      endTime = new Date().getTime() + 30 * 1000;
    } else {
      // Sorteio no dia 15 às 23:59:59
      const target = new Date(now.getFullYear(), now.getMonth(), 15, 23, 59, 59);
      if (target.getTime() < now.getTime()) {
        endTime = new Date(
          now.getFullYear(),
          now.getMonth() + 1,
          15,
          23,
          59,
          59
        ).getTime();
      } else {
        endTime = target.getTime();
      }
    }

    setNextDrawDate(new Date(endTime));

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft("00:00:00");
        clearInterval(interval);

        if (!drawDone) {
          drawWinners(prizes.length);
        }
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [participants, drawDone]);

  // Buscar dados da planilha
  useEffect(() => {
    async function fetchParticipants() {
      try {
        setLoading(true);
        setError("");

        const csvUrl =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vThBgPwtFNP0_Aurptx2EaM38wI9cWhg4w79gyqcygmMCuktFGBiOreqIdfnrKpC7VI4cF6LWVqG-oK/pub?output=csv";

        const res = await fetch(`${csvUrl}&t=${Date.now()}`); // força a evitar cache
        const text = await res.text();
        const lines = text.split("\n");

        // Extrai coluna "Instagram" (segunda coluna)
        const data = lines
          .slice(1)
          .map((line) => {
            const cols = line.split(",");
            return cols[1]?.replace(/[\r\n"]+/g, "").trim();
          })
          .filter((v): v is string => Boolean(v));

        setParticipants(data);
      } catch (err) {
        console.error("Erro ao buscar participantes:", err);
        setError("Não foi possível carregar os participantes.");
      } finally {
        setLoading(false);
      }
    }

    fetchParticipants();
  }, []);

  // ❌ Removido: recuperar ganhadores do localStorage

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Sorteios Urban Wild
      </h1>

      {/* Cronômetro */}
      <div className="bg-gray-900 rounded-xl shadow-lg p-6 mb-8 text-center">
        <p className="text-lg">Próximo sorteio em:</p>
        <h2 className="text-3xl font-mono mt-2">{timeLeft}</h2>
        {nextDrawDate && (
          <p className="text-sm text-gray-400 mt-2">
            Data: {nextDrawDate.toLocaleDateString("pt-BR")} às{" "}
            {nextDrawDate.toLocaleTimeString("pt-BR")}
          </p>
        )}
      </div>
      
      {/* Botão para reiniciar o teste */}
{isTestMode && (
  <button
    onClick={() => window.location.reload()}
    className="bg-gray-700 px-4 py-2 rounded-lg mb-8 hover:bg-gray-600 transition"
  >
    Reiniciar Teste
  </button>
)}

      {/* Lista de Participantes */}
<section className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
  <h3 className="text-2xl mb-4 font-semibold">Participantes</h3>
  {loading && <p>Carregando participantes...</p>}
  {error && <p className="text-red-400">{error}</p>}

  {!loading && !error && (
    <>
     {/* ✅ contador de participantes únicos e total de entradas */}
<p className="text-sm text-gray-400 mb-2">
  Total: {new Set(participants).size} participantes ({participants.length} entradas)
</p>

      {/* ✅ lista com rolagem se forem muitos */}
      <ul className="space-y-2 max-h-64 overflow-y-auto">
        {participants.map((insta, i) => (
          <li key={i} className="bg-gray-700 p-3 rounded-md">
            {insta}
          </li>
        ))}
      </ul>
    </>
  )}
</section>

      {/* Resultados do Sorteio */}
      {drawDone && (
        <section className="w-full max-w-2xl bg-green-800 rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl mb-4 font-semibold">🎉 Vencedores</h3>
          <ul className="space-y-2">
            {winners.map((win, i) => (
              <li key={i} className="bg-green-600 p-3 rounded-md">
                {win}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
