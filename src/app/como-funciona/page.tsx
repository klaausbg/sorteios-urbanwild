"use client";

import Link from "next/link";

export default function ComoFunciona() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        🎉 Sorteio Urban Wild
      </h1>

      {/* Introdução */}
      <section className="max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 mb-8 space-y-4">
        <p>
          Na <strong>Urban Wild</strong>, queremos agradecer quem já caminha com
          a gente e também abrir espaço para quem ainda não comprou conosco.
          Todo mês realizamos um sorteio com{" "}
          <strong>3 prêmios em créditos</strong> que podem ser usados em
          qualquer produto do site:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>🥇 1º lugar → R$300</li>
          <li>🥈 2º lugar → R$150</li>
          <li>🥉 3º lugar → R$50</li>
    
        </ul>
        <h3 className="text-xl font-semibold mt-4">⚡ Importante:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Os prêmios <strong>não têm validade</strong>.</li>
          <li>
            Podem ser usados em <strong>qualquer produto disponível no site</strong>,
            até o valor conquistado.
          </li>
          <li>
            <strong>Novas adesões</strong> podem ser feitas até 1 dia antes do sorteio.
          </li>
        </ul>
      </section>

      {/* Como participar */}
      <section className="max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 mb-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">👤 Como participar?</h2>

        <h3 className="text-xl font-semibold">✅ Se você já é cliente:</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Envie o <strong>comprovante da sua compra</strong> (print da compra, nota ou
            recibo) para a gente, seja por Direct ou Whatsapp.
          </li>
          <li>
            Publique um <strong>review no Google</strong> sobre sua experiência
            com a Urban Wild.
          </li>
          <li>
            Receba tickets de acordo com o valor da compra:
            <ul className="list-disc list-inside ml-6 space-y-1 mt-2">
              <li>Até R$1000 → 1 ticket</li>
              <li>De R$1000 até R$2000 → 2 tickets</li>
              <li>A cada R$1000 adicionais → +1 ticket extra</li>
              <li>Ex.: R$700 = 1 ticket | R$1200 = 2 tickets | R$2100 = 3 tickets</li>
            </ul>
          </li>
        </ol>

        <h3 className="text-xl font-semibold mt-4">✅ Se você ainda não é cliente:</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Poste nos seus <strong>Stories</strong> uma foto da nossa loja ou de
            um produto.
          </li>
          <li>
            Marque o perfil oficial <strong>@urbanwildtnf</strong>.
          </li>
          <li>
            Envie o <strong>print do story postado</strong> para validar sua
            participação.
          </li>
        </ol>

        <p className="mt-4">
          📩 Todos os <strong>comprovantes</strong> (story, compra + review)
          devem ser enviados para a Urban Wild dentro do prazo estabelecido.
        </p>
      </section>

      {/* Como funciona */}
      <section className="max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 mb-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">
          🔎 Como funciona o sorteio Urban Wild
        </h2>

        <h3 className="text-xl font-semibold">⏳ Contagem regressiva</h3>
        <p>O site mostra exatamente quanto tempo falta para o sorteio acontecer.</p>

        <h3 className="text-xl font-semibold">👥 Lista de participantes e tickets</h3>
        <p>
          Todos os participantes ficam visíveis no site. Você pode conferir{" "}
          <strong>quantos tickets possui</strong> e comparar com os demais —
          nada é escondido.
        </p>

        <h3 className="text-xl font-semibold">🎰 Sorteio automático e imparcial</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Assim que o prazo termina, o sistema realiza o sorteio{" "}
            <strong>de forma 100% automática</strong>.
          </li>
          <li>
            São definidos <strong>5 ganhadores aleatórios</strong>, sem
            intervenção manual.
          </li>
          <li>
            <strong>Um participante só pode ganhar uma vez por mês</strong>, mas
            pode competir novamente nos meses seguintes.
          </li>
          <li>
            Se estiver participando pela segunda vez (ou mais),
            <strong> é necessário fazer um novo review e compartilhar uma foto do nosso perfil </strong> 
            no seu story para validar a participação.
          </li>
          <li>
            Após cada sorteio, publicamos a{" "}
            <strong>lista oficial de ganhadores</strong> no site, incluindo o{" "}
            <strong>histórico dos meses anteriores</strong>.
          </li>
        </ul>

        <p className="mt-4">
          ✅ Tudo foi pensado para que o processo seja{" "}
          <strong>justo, transparente e acessível a todos</strong>. Assim, você
          sempre terá confiança de que o resultado é verdadeiro e que cada
          participante tem suas chances respeitadas.
        </p>
      </section>

      {/* Como usar créditos */}
      <section className="max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 mb-8 space-y-2">
        <h2 className="text-2xl font-semibold mb-4">🧩 Como usar seus créditos</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Se o produto escolhido tiver um valor <strong>maior</strong> que o
            prêmio, você pode <strong>completar a diferença</strong> no
            pagamento.
          </li>
          <li>
            Se o produto for <strong>menor</strong>, é possível escolher{" "}
            <strong>mais de um item</strong> até atingir o valor total do
            crédito.
          </li>
          <li>
            Os créditos são flexíveis e podem ser usados em{" "}
            <strong>qualquer produto disponível no site</strong>.
          </li>
        </ul>
      </section>

      {/* Engajamento */}
      <section className="max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 mb-8 space-y-2">
        <h2 className="text-2xl font-semibold mb-4">🎯 Mais chances e engajamento</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Participar mais de uma vez aumenta suas chances!</strong>
          </li>
          <li>
            Clientes podem enviar <strong>novos reviews no Google</strong> a cada mês.
          </li>
          <li>
            📸 Já usou nossos produtos em alguma viagem?
            Se você tem uma foto incrível dessa aventura,
          </li>
          <li>  posta no seu story, marca @urbanwildtnf e garanta +1 ticket extra pra concorrer ao prêmio! 🎟️✨</li>
          
        
          <li>
            Convide amigos e familiares: quanto mais gente participar, maior a
            força da nossa comunidade Urban Wild.
          </li>
        </ul>
      </section>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
      >
        ← Voltar ao Sorteio
      </Link>
    </main>
  );
}
