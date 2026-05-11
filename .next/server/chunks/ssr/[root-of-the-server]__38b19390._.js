module.exports = [
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Timer
useEffect(()=>{
    const isTestMode = false; // 👉 true = teste 30s, false = produção
    let endTime;
    const now = new Date();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        // Sorteio no dia 15 às 23:59:59
        const target = new Date(now.getFullYear(), now.getMonth(), 15, 23, 59, 59);
        // Se já passou do dia 15 deste mês → vai pro próximo mês
        if (target.getTime() < now.getTime()) {
            endTime = new Date(now.getFullYear(), now.getMonth() + 1, 15, 23, 59, 59).getTime();
        } else {
            endTime = target.getTime();
        }
    }
    const interval = setInterval(()=>{
        const now = new Date().getTime();
        const diff = endTime - now;
        if (diff <= 0) {
            setTimeLeft("00:00:00");
            clearInterval(interval);
            if (!drawDone) {
                drawWinners(5);
            }
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
            const minutes = Math.floor(diff / (1000 * 60) % 60);
            const seconds = Math.floor(diff / 1000 % 60);
            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    }, 1000);
    return ()=>clearInterval(interval);
}, [
    participants,
    drawDone
]);
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__38b19390._.js.map