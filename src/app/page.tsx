"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  // Timer até o fim do mês
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const endOfMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0,
        23,
        59,
        59
      );
      const diff = endOfMonth.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("00:00:00");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Buscar dados da planilha
  useEffect(() => {
    async function fetchParticipants() {
      try {
        const csvUrl =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vThBgPwtFNP0_Aurptx2EaM38wI9cWhg4w79gyqcygmMCuktFGBiOreqIdfnrKpC7VI4cF6LWVqG-oK/pub?output=csv";

        const res = await fetch(csvUrl);
        const text = await res.text();
        const lines = text.split("\n");

        // Extrai coluna "Instagram" (segunda coluna)
        const data = lines
          .slice(1) // ignora cabeçalho
          .map((line) => {
            const cols = line.split(",");
            return cols[1] ? cols[1].trim() : null;
          })
          .filter((v): v is string => Boolean(v)); // remove nulos e vazios

        setParticipants(data);
      } catch (err) {
        console.error("Erro ao buscar participantes:", err);
      }
    }

    fetchParticipants();
  }, []);

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
      </div>

      {/* Lista de Participantes */}
      <section className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-2xl mb-4 font-semibold">Participantes</h3>
        <ul className="space-y-2">
          {participants.map((insta, i) => (
            <li key={i} className="bg-gray-700 p-3 rounded-md">
              {insta}
            </li>
          ))}
        </ul>
      </section>

      {/* Botão do Sorteio */}
      <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition">
        Sortear Agora
      </button>
    </main>
  );
}
