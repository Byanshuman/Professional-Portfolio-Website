body {
  --c1: #041806;
  --c2: #0a0e27;
  --c3: #151a3a;
  --c4: #202540;
  --c5: #2a304a;

  --pattern: 
    radial-gradient(circle at 96px 56px, var(--c3) 5px, var(--c2) 6px 9px, var(--c3) 10px 15px, var(--c2) 16px 17px, var(--c3) 18px 23px, var(--c2) 24px 25px, transparent 26px),
    radial-gradient(circle at 96px 0, var(--c3) 5px, var(--c2) 6px 9px, var(--c3) 10px 15px, var(--c2) 16px 17px, var(--c3) 18px 23px, var(--c2) 24px 25px, transparent 26px),
    radial-gradient(circle at 48px 28px, var(--c3) 5px, var(--c2) 6px 9px, var(--c3) 10px 15px, var(--c2) 16px 17px, var(--c3) 18px 23px, var(--c2) 24px 25px, transparent 26px),
    radial-gradient(circle at 0 56px, var(--c3) 5px, var(--c2) 6px 9px, var(--c3) 10px 15px, var(--c2) 16px 17px, var(--c3) 18px 23px, var(--c2) 24px 25px, transparent 26px),
    radial-gradient(circle at 0 0, var(--c3) 5px, var(--c2) 6px 9px, var(--c3) 10px 15px, var(--c2) 16px 17px, var(--c3) 18px 23px, var(--c2) 24px 25px, transparent 26px);

  background: 
    var(--pattern),
    linear-gradient(135deg, rgba(50, 70, 120, 0.05) 0%, transparent 100%);
  background-size: 96px 56px;
  background-color: var(--c1);

  color: #ffffff;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;

  animation: subtleMove 25s ease-in-out infinite;
}

@keyframes subtleMove {
  0% { background-size: 96px 56px; }
  50% { background-size: 105px 60px; }
  100% { background-size: 96px 56px; }
}

body:hover {
  background-size: 110px 65px;
}
